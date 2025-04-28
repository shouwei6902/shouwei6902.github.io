document.addEventListener("DOMContentLoaded", function() {
    // 假设当前页面的路径为 /page1/page2/page3.html
    const pathArray = window.location.pathname.split('/').filter Boolean;

    const breadcrumb = document.getElementById('breadcrumb');
    let breadcrumbHtml = '';

    let basePath = '';
    pathArray.forEach((segment, index) => {
        if (segment.endsWith('.html')) {
            segment = segment.replace('.html', '');
        }
        basePath += '/' + segment;
        const link = index === pathArray.length - 1 ? segment : `<a href="${basePath}.html">${segment}</a>`;
        breadcrumbHtml += `<li>${link}</li>`;
    });

    breadcrumb.innerHTML = breadcrumbHtml;
});
