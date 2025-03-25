// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表单提交
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // 这里可以添加AJAX提交代码
    alert('您的咨询已提交，我们将尽快与您联系！');
    this.reset();
});

// 滚动动画
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const header = document.querySelector('.header');

    if(scrollPos > 100) {
        header.style.background = 'rgba(255,255,255,0.95)';
    } else {
        header.style.background = '#fff';
    }
});
