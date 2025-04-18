/**
 * 教育门户网站主脚本
 */

document.addEventListener('DOMContentLoaded', function() {
  // 初始化轮播图
  const swiperContainer = document.querySelector('.swiper-container');
  if (swiperContainer) {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // 响应式导航菜单
  const createMobileMenu = () => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const container = header.querySelector('.container');
    const nav = header.querySelector('.main-nav');
    
    // 创建菜单按钮
    if (!document.querySelector('.mobile-menu-btn')) {
      const menuBtn = document.createElement('button');
      menuBtn.classList.add('mobile-menu-btn');
      menuBtn.innerHTML = '<span></span><span></span><span></span>';
      
      // 在小屏幕下插入菜单按钮
      if (window.innerWidth <= 768) {
        container.insertBefore(menuBtn, nav);
        nav.classList.add('mobile-hidden');
      }
      
      // 点击菜单按钮切换导航显示
      menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('mobile-hidden');
        nav.classList.toggle('mobile-visible');
      });
    }
  };

  // 卡片悬停效果
  const setupCardHoverEffects = () => {
    const cards = document.querySelectorAll('.info-card, .tool-card, .course-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      });
    });
  };

  // 平滑滚动
  const setupSmoothScroll = () => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // 导航栏固定效果
  const setupStickyHeader = () => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    const headerHeight = header.offsetHeight;
    const scrollHandler = () => {
      if (window.scrollY > headerHeight) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
    
    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // 初始检查
  };

  // 初始化函数
  const init = () => {
    createMobileMenu();
    setupCardHoverEffects();
    setupSmoothScroll();
    setupStickyHeader();
    
    // 响应窗口大小变化
    window.addEventListener('resize', function() {
      createMobileMenu();
    });
  };

  // 执行初始化
  init();
});

// 动态加载一些内容
window.addEventListener('load', function() {
  // 模拟获取热门课程数据
  const fetchPopularCourses = () => {
    // 真实项目中这里应该是异步请求后端API获取数据
    // 这里仅作为演示用途
    setTimeout(() => {
      console.log('热门课程数据已加载');
    }, 500);
  };

  // 模拟获取最新资讯
  const fetchLatestNews = () => {
    // 真实项目中这里应该是异步请求后端API获取数据
    setTimeout(() => {
      console.log('最新资讯数据已加载');
    }, 800);
  };

  fetchPopularCourses();
  fetchLatestNews();
}); 