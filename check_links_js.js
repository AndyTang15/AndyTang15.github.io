const axios = require('axios');
const publications = require('./publications.js'); // 路径根据你的实际情况调整

// 收集所有链接
let allLinks = [];
publications.forEach(pub => {
    if (Array.isArray(pub.links)) {
        pub.links.forEach(linkObj => {
            if (linkObj.url && /^https?:\/\//.test(linkObj.url)) {
                allLinks.push({ label: linkObj.label, url: linkObj.url });
            }
        });
    }
});

console.log(`Total links found: ${allLinks.length}`);

async function checkLink(linkObj) {
    try {
        const resp = await axios.get(linkObj.url, { timeout: 3000, validateStatus: () => true });
        return { ...linkObj, status: resp.status };
    } catch (err) {
        return { ...linkObj, status: 'timeout or error' };
    }
}

(async () => {
    const results = [];
    for (const linkObj of allLinks) {
        const res = await checkLink(linkObj);
        results.push(res);
        console.log(`Checked: [${res.label}] ${res.url} => ${res.status}`);
    }

    // 输出不可达链接
    const badLinks = results.filter(r => r.status !== 200 && r.status !== 301 && r.status !== 302);
    if (badLinks.length > 0) {
        console.log('\nBroken or unreachable links:');
        badLinks.forEach(r => console.log(`[${r.label}] ${r.url} => ${r.status}`));
    } else {
        console.log('\nAll links are reachable!');
    }
})();
