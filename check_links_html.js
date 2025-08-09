const glob = require('glob');
const cheerio = require('cheerio');
const axios = require('axios');

// 配置：项目根目录下所有 html 文件
const htmlFiles = glob.sync('**/*.html', { ignore: 'node_modules/**' });

const allLinks = new Set();

htmlFiles.forEach(file => {
    const content = require('fs').readFileSync(file, 'utf-8');
    const $ = cheerio.load(content);
    $('a').each((_, el) => {
        const href = $(el).attr('href');
        // 过滤锚点、空链接、mailto等
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('javascript:')) {
            allLinks.add(href);
        }
    });
});

console.log(`Total links found: ${allLinks.size}`);

async function checkLink(link) {
    try {
        // 对相对路径，可以加前缀或本地 server 地址
        let url = link;
        if (!/^https?:\/\//.test(link)) {
            // 假如你本地有 server，可以改成 http://localhost:8080/ + link
            url = 'http://localhost:8080/' + link.replace(/^\//, '');
        }
        const resp = await axios.get(url, { timeout: 3000, validateStatus: () => true });
        return { link, status: resp.status };
    } catch (err) {
        return { link, status: 'timeout or error' };
    }
}

(async () => {
    const results = [];
    for (const link of allLinks) {
        const res = await checkLink(link);
        results.push(res);
        console.log(`Checked: ${link} => ${res.status}`);
    }

    // 输出不可达链接
    const badLinks = results.filter(r => r.status !== 200 && r.status !== 301 && r.status !== 302);
    if (badLinks.length > 0) {
        console.log('\nBroken or unreachable links:');
        badLinks.forEach(r => console.log(`${r.link} => ${r.status}`));
    } else {
        console.log('\nAll links are reachable!');
    }
})();
