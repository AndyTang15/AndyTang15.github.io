// main.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('publications-list');
    if (!container || !Array.isArray(publications)) return;

    publications.forEach(pub => {
        const tr = document.createElement('tr');

        // 图片
        const tdImg = document.createElement('td');
        tdImg.style = "padding:20px;width:30%;max-width:30%;text-align:center;";
        const img = document.createElement('img');
        img.src = pub.image;
        img.alt = "dise";
        img.style = "width:100%;max-width:100%";
        tdImg.appendChild(img);

        // 内容
        const tdContent = document.createElement('td');
        tdContent.width = "75%";
        tdContent.vAlign = "center";
        let linksHtml = "";
        if (pub.links && pub.links.length > 0) {
            linksHtml = pub.links.map(link => `<a href="${link.url}">[${link.label}]</a>`).join(' ');
        }
        let badgeHtml = pub.badge ? `<br>${pub.badge}` : "";

        tdContent.innerHTML = `
      <papertitle>${pub.title}</papertitle>
      <br>
      ${pub.authors}
      <br>
      <em>${pub.venue}</em>, ${pub.year}
      ${badgeHtml}
      <br>
      ${linksHtml}
      <br>
      <p>${pub.description}</p>
    `;

        tr.appendChild(tdImg);
        tr.appendChild(tdContent);

        container.appendChild(tr);
    });
});
