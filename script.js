// 轮播图功能
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');
const totalSlides = slides.length;

function changeSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// 自动播放
let autoPlay = setInterval(() => changeSlide(1), 5000);

// 鼠标悬停暂停
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => changeSlide(1), 5000);
});

// 导航栏交互
document.querySelectorAll('.dropdown li').forEach(item => {
    item.addEventListener('click', function() {
        // 根据点击的菜单项更新内容区域
        const contentTitle = this.textContent;
        const contentDiv = document.querySelector('.content');
        contentDiv.innerHTML = `
            <h2>${contentTitle}</h2>
            <p>${contentTitle}的详细内容...</p>
        `;
    });
});

// 页面加载后初始化
window.addEventListener('DOMContentLoaded', () => {
    // 设置首张轮播图可见
    slides[0].classList.add('active');

    // 移动端菜单响应（可选）
    if (window.innerWidth <= 768) {
        const menuButton = document.createElement('div');
        menuButton.className = 'mobile-menu-btn';
        menuButton.innerHTML = '☰';
        document.querySelector('.navbar').appendChild(menuButton);

        menuButton.addEventListener('click', () => {
            document.querySelector('.nav-items').classList.toggle('show');
        });
    }
});
