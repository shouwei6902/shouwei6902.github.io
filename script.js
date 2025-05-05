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
//产品与服务
// 监听整个文档的右键点击事件
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // 阻止默认的右键菜单
    window.location.href = "https://www.example.com"; // 跳转到指定网页
});


// 获取下拉菜单元素
const selector = document.getElementById('.dropdown li');
selector.addEventListener('change', function () {
    const url = this.value;
    if (url) {
        window.location.href = url;
    }
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

