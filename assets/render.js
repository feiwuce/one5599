document.addEventListener('DOMContentLoaded', function() {
  // 渲染网站基本信息
  document.title = config.site.title;
  document.querySelector('.navbar-brand img').src = config.site.logo;
  document.querySelector('.navbar-brand span').textContent = config.site.brandName;

  // 渲染Banner
  const bannerWrapper = document.querySelector('.swiper-wrapper');
  bannerWrapper.innerHTML = config.banners.map(banner => `
    <div class="swiper-slide">
      <img src="${banner.image}" alt="${banner.alt}" />
    </div>
  `).join('');

  // 渲染公告
  document.querySelector('.card-title').innerHTML = `
    <i class="fa fa-hashtag"></i> ${config.announcement.title}
  `;
  
  const announcementList = document.querySelector('.MagicAnnouncement ul');
  announcementList.innerHTML = config.announcement.content.map(text => 
    `<li>${text}</li>`
  ).join('');

  // 渲染公告按钮
  const buttonContainer = document.querySelector('.AnnouncementContact');
  buttonContainer.innerHTML = config.announcement.buttons.map(button => `
    <a href="${button.url}">
      ${button.icon ? `<i class="fa ${button.icon}"></i> ` : ''}
      ${button.text}
    </a>
  `).join('');

  // 渲染商品列表
  const productContainer = document.querySelector('#product');
  productContainer.innerHTML = config.products.map(product => `
    <span class="button-click goods-custom">
      <img class="commodity-icon" src="${product.icon}" alt="${product.name}" />
      <a href="${product.url}" style="${product.style}">${product.name}</a>
    </span>
  `).join('');

  // 渲染页脚
  const footer = document.querySelector('.magic-footer');
  footer.innerHTML = config.footer.map((link, index) => `
    <div class="magic-inline${index === config.footer.length - 1 ? ' magic-inline-finally' : ''}">
      <a href="${link.url}">
        <i class="fa ${link.icon}"></i> ${link.text}
      </a>
    </div>
  `).join('');
}); 