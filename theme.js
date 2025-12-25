/* ============================================
   HUMA TRADERS - THEME JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initCartDrawer();
  initHeroCarousel();
  initProductGallery();
  initFAQAccordion();
  initQuantityControls();
  initAddToCart();
});

/* Mobile Menu */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  
  if (!menuToggle || !mobileMenu) return;
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    if (menuOverlay) menuOverlay.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
  
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      menuOverlay.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  }
}

/* Cart Drawer */
function initCartDrawer() {
  const cartToggle = document.querySelectorAll('.cart-toggle');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartClose = document.querySelector('.cart-drawer-close');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  
  if (!cartDrawer) return;
  
  cartToggle.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      openCartDrawer();
    });
  });
  
  if (cartClose) {
    cartClose.addEventListener('click', closeCartDrawer);
  }
  
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartDrawer);
  }
  
  function openCartDrawer() {
    cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* Hero Carousel */
function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.hero-slide');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  
  if (slides.length <= 1) return;
  
  let currentSlide = 0;
  let autoplayInterval;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }
  
  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }
  
  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }
  
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      stopAutoplay();
      prevSlide();
      startAutoplay();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      stopAutoplay();
      nextSlide();
      startAutoplay();
    });
  }
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', function() {
      stopAutoplay();
      showSlide(i);
      startAutoplay();
    });
  });
  
  showSlide(0);
  startAutoplay();
}

/* Product Gallery */
function initProductGallery() {
  const mainImage = document.querySelector('.product-gallery-main img');
  const thumbs = document.querySelectorAll('.product-gallery-thumb');
  
  if (!mainImage || !thumbs.length) return;
  
  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      const newSrc = this.querySelector('img').src;
      mainImage.src = newSrc;
      
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* FAQ Accordion */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', function() {
      const isOpen = question.classList.contains('active');
      
      faqItems.forEach(function(otherItem) {
        otherItem.querySelector('.faq-question').classList.remove('active');
        otherItem.querySelector('.faq-answer').classList.remove('open');
      });
      
      if (!isOpen) {
        question.classList.add('active');
        answer.classList.add('open');
      }
    });
  });
}

/* Quantity Controls */
function initQuantityControls() {
  document.querySelectorAll('.product-quantity-controls, .cart-item-quantity').forEach(function(control) {
    const minusBtn = control.querySelector('[data-action="minus"]');
    const plusBtn = control.querySelector('[data-action="plus"]');
    const input = control.querySelector('.product-quantity-value, .cart-quantity-value');
    
    if (!minusBtn || !plusBtn || !input) return;
    
    minusBtn.addEventListener('click', function() {
      let value = parseInt(input.textContent || input.value) || 1;
      if (value > 1) {
        value--;
        if (input.tagName === 'INPUT') {
          input.value = value;
        } else {
          input.textContent = value;
        }
        input.dispatchEvent(new Event('change'));
      }
    });
    
    plusBtn.addEventListener('click', function() {
      let value = parseInt(input.textContent || input.value) || 1;
      value++;
      if (input.tagName === 'INPUT') {
        input.value = value;
      } else {
        input.textContent = value;
      }
      input.dispatchEvent(new Event('change'));
    });
  });
}

/* Add to Cart */
function initAddToCart() {
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
  
  addToCartForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        updateCartCount();
        
        const cartDrawer = document.querySelector('.cart-drawer');
        const cartOverlay = document.querySelector('.cart-drawer-overlay');
        if (cartDrawer) {
          cartDrawer.classList.add('open');
          if (cartOverlay) cartOverlay.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
        
        refreshCartDrawer();
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
      });
    });
  });
}

/* Update Cart Count */
function updateCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      const countElements = document.querySelectorAll('.cart-count');
      countElements.forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    });
}

/* Refresh Cart Drawer */
function refreshCartDrawer() {
  const cartContent = document.querySelector('.cart-drawer-content');
  if (!cartContent) return;
  
  fetch('/cart?view=drawer')
    .then(response => response.text())
    .then(html => {
      cartContent.innerHTML = html;
      initQuantityControls();
    });
}

/* Product Options */
document.querySelectorAll('.product-option-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const optionGroup = this.closest('.product-option');
    optionGroup.querySelectorAll('.product-option-btn').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');
    updateVariantId();
  });
});

function updateVariantId() {
  const selectedOptions = [];
  document.querySelectorAll('.product-option-btn.selected').forEach(function(btn) {
    selectedOptions.push(btn.dataset.value);
  });
  
  const variantSelect = document.querySelector('select[name="id"]');
  if (variantSelect) {
    const options = variantSelect.querySelectorAll('option');
    options.forEach(function(option) {
      if (option.dataset.options === selectedOptions.join(' / ')) {
        variantSelect.value = option.value;
      }
    });
  }
}
