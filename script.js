// 页面加载完成后隐藏加载动画
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 800); // 确保加载动画至少显示800ms
});

// 主题切换，默认深色
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// 默认启用深色主题
document.body.classList.add('dark-theme');
themeIcon.classList.remove('fa-moon');
themeIcon.classList.add('fa-sun');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// 滚动动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// 模拟从GitHub API获取数据
setTimeout(() => {
    document.getElementById('repoCount').textContent = '17';
    document.getElementById('followers').textContent = '7';
    document.getElementById('stars').textContent = '30';
    document.getElementById('contributions').textContent = '465';
}, 1000);

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        nav.style.padding = '10px 5%';
    } else {
        nav.style.boxShadow = '0 2px 10px var(--shadow)';
        nav.style.padding = '15px 5%';
    }
});

// 预加载所有背景图片
const bgImages = [
    'resource/images/homeBG.webp',
    'resource/images/bg1.webp',
    'resource/images/bg2.webp',
    'resource/images/bg3.webp',
    'resource/images/bg4.webp'
];

bgImages.forEach(img => {
    const image = new Image();
    image.src = img;
});