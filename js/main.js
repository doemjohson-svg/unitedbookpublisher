document.addEventListener('DOMContentLoaded', function () {
  // 1. Reveal scroll elements immediately and clear any translate offset
  document.querySelectorAll('[class*="motion-safe:"]').forEach(function(el) {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.translate = '0 0';
    el.style.scale = '1';
  });

  // 2. Animated Stats Counter
  var counterElements = document.querySelectorAll('.home-intro-stat .tabular-nums');
  if (counterElements.length > 0) {
    var targets = [12, 500, 50]; // Years of Experience, Books Published, Books Sold
    
    var animateCounter = function(el, target, duration) {
      var start = 0;
      var startTime = null;
      var step = function(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var current = Math.floor(progress * target);
        el.textContent = current;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };
      window.requestAnimationFrame(step);
    };

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          counterElements.forEach(function(el, i) {
            var target = targets[i] || parseInt(el.textContent, 10) || 10;
            animateCounter(el, target, 1800);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    var container = document.querySelector('.home-intro-counters');
    if (container) {
      observer.observe(container);
    } else {
      counterElements.forEach(function(el, i) {
        animateCounter(el, targets[i] || 10, 1800);
      });
    }
  }

  // Helper: check if we are in a subfolder
  var isSubfolder = window.location.pathname.includes('/blogs/') || 
                    window.location.pathname.includes('/case-study/') || 
                    window.location.pathname.includes('/order-details/');
  var prefix = isSubfolder ? '../' : '';

  // 3. Desktop Dropdowns for Services & Resources
  var navButtons = document.querySelectorAll('header nav button[aria-haspopup="menu"]');
  
  var servicesLinks = [
    { text: 'Book Publishing', href: prefix + 'book-publishing' },
    { text: 'eBook Publishing', href: prefix + 'ebook-publishing' },
    { text: 'Audiobook Production', href: prefix + 'audiobook-production' },
    { text: 'Book Marketing', href: prefix + 'book-marketing' },
    { text: 'Author Website', href: prefix + 'author-website' },
    { text: 'Book Illustration', href: prefix + 'book-illustration' },
    { text: 'Book Video Trailers', href: prefix + 'book-video-trailers' },
    { text: 'Ghostwriting', href: prefix + 'ghostwriting' },
    { text: 'Book Writing', href: prefix + 'book-writing' },
    { text: 'PR & Publicity', href: prefix + 'pr-and-publicity' },
    { text: 'Children Book Illustration', href: prefix + 'children-book-illustration' },
    { text: 'Screenplay Script Writing', href: prefix + 'screenplay-script-writing' }
  ];

  var resourcesLinks = [
    { text: 'Free Book Marketing Guide', href: prefix + 'free-book-marketing-guide' },
    { text: 'Free Book Publishing Guide', href: prefix + 'free-book-publishing-guide' },
    { text: 'Genre Guide', href: prefix + 'genre-guide' },
    { text: 'Blogs', href: prefix + 'blogs' },
    { text: 'About Us', href: prefix + 'about-us' },
    { text: 'Contact Us', href: prefix + 'contact-us' },
    { text: 'Beware of Imitators', href: prefix + 'protect-yourself-from-impersonators' }
  ];

  navButtons.forEach(function(btn) {
    var parent = btn.parentElement;
    var btnText = btn.textContent.trim().toLowerCase();
    var links = btnText.includes('service') ? servicesLinks : resourcesLinks;
    
    var menu = document.createElement('div');
    menu.className = 'ubp-dropdown-menu';
    menu.setAttribute('role', 'menu');
    
    links.forEach(function(l) {
      var a = document.createElement('a');
      a.className = 'ubp-dropdown-item';
      a.href = l.href;
      a.textContent = l.text;
      menu.appendChild(a);
    });
    
    parent.appendChild(menu);

    var timeout;
    var show = function() {
      clearTimeout(timeout);
      document.querySelectorAll('.ubp-dropdown-menu').forEach(function(m) {
        if (m !== menu) m.classList.remove('show');
      });
      menu.classList.add('show');
      btn.setAttribute('aria-expanded', 'true');
    };
    var hide = function() {
      timeout = setTimeout(function() {
        menu.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
      }, 200);
    };

    parent.addEventListener('mouseenter', show);
    parent.addEventListener('mouseleave', hide);
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('show');
      btn.setAttribute('aria-expanded', menu.classList.contains('show'));
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.ubp-dropdown-menu').forEach(function(m) {
      m.classList.remove('show');
    });
    navButtons.forEach(function(btn) {
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // 4. Mobile Navigation Drawer
  var mobileToggle = document.querySelector('button[aria-controls="mobile-nav"], button[aria-label="Open menu"]');
  if (mobileToggle) {
    var overlay = document.createElement('div');
    overlay.className = 'ubp-mobile-menu-overlay';

    var drawer = document.createElement('div');
    drawer.className = 'ubp-mobile-menu';
    drawer.innerHTML = 
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:1px solid #e5e7eb;">' +
        '<span style="font-weight:bold; font-size:18px; color:#1f2937;">Menu</span>' +
        '<button id="ubp-close-mobile" style="background:none; border:none; font-size:24px; cursor:pointer; color:#4b5563;">&times;</button>' +
      '</div>' +
      '<nav style="display:flex; flex-direction:column; gap:10px;">' +
        '<a href="' + prefix + 'index" style="font-size:15px; font-weight:600; color:#1f2937; text-decoration:none; padding:6px 0;">Home</a>' +
        '<a href="' + prefix + 'book-publishing" style="font-size:15px; font-weight:600; color:#1f2937; text-decoration:none; padding:6px 0;">Book Publishing</a>' +
        '<a href="' + prefix + 'book-marketing" style="font-size:15px; font-weight:600; color:#1f2937; text-decoration:none; padding:6px 0;">Book Marketing</a>' +
        '<a href="' + prefix + 'pricing" style="font-size:15px; font-weight:600; color:#1f2937; text-decoration:none; padding:6px 0;">Pricing</a>' +
        '<a href="' + prefix + 'blogs" style="font-size:15px; font-weight:600; color:#1f2937; text-decoration:none; padding:6px 0;">Blogs</a>' +
        '<a href="' + prefix + 'about-us" style="font-size:15px; font-weight:600; color:#1f2937; text-decoration:none; padding:6px 0;">About Us</a>' +
        '<a href="' + prefix + 'contact-us" style="font-size:15px; font-weight:600; color:#1f2937; text-decoration:none; padding:6px 0;">Contact Us</a>' +
      '</nav>' +
      '<div style="margin-top:24px; padding-top:16px; border-top:1px solid #e5e7eb;">' +
        '<a href="tel:+15552345678" style="display:block; text-align:center; font-weight:bold; color:#29361a; text-decoration:none; margin-bottom:12px;">+1 (555) 234-5678</a>' +
        '<a href="' + prefix + 'contact-us" style="display:block; text-align:center; background:#b46c29; color:white; padding:10px 16px; border-radius:6px; font-weight:bold; text-decoration:none;">Contact Us</a>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    var openDrawer = function() {
      overlay.classList.add('show');
      drawer.classList.add('show');
      mobileToggle.setAttribute('aria-expanded', 'true');
    };

    var closeDrawer = function() {
      overlay.classList.remove('show');
      drawer.classList.remove('show');
      mobileToggle.setAttribute('aria-expanded', 'false');
    };

    mobileToggle.addEventListener('click', openDrawer);
    overlay.addEventListener('click', closeDrawer);
    drawer.querySelector('#ubp-close-mobile').addEventListener('click', closeDrawer);
    drawer.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeDrawer);
    });
  }

  // 5. FAQ Accordion Toggle
  document.querySelectorAll('button').forEach(function(btn) {
    var nextElem = btn.nextElementSibling;
    if (nextElem && (nextElem.classList.contains('grid-rows-[0fr]') || nextElem.className.includes('grid-rows-['))) {
      btn.classList.add('ubp-accordion-btn');
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function() {
        var isOpen = nextElem.classList.contains('ubp-accordion-active');
        if (isOpen) {
          nextElem.classList.remove('ubp-accordion-active');
          nextElem.style.gridTemplateRows = '0fr';
          nextElem.style.opacity = '0';
          btn.classList.remove('active');
        } else {
          nextElem.classList.add('ubp-accordion-active');
          nextElem.style.gridTemplateRows = '1fr';
          nextElem.style.opacity = '1';
          btn.classList.add('active');
        }
      });
    }
  });

  // 6. Global Action: "Consult Now" & "Get Started" -> Navigate to Contact Us
  document.addEventListener('click', function(e) {
    var target = e.target.closest('button, a');
    if (!target) return;

    if (target.type === 'submit' && target.closest('form')) {
      return;
    }

    var text = (target.textContent || '').trim().toLowerCase();
    
    var isConsultAction = 
      text === 'consult now' ||
      text === 'consultant now' ||
      text.indexOf('consult now') !== -1 ||
      text.indexOf('consultant now') !== -1 ||
      text.indexOf('free consultation') !== -1;

    var isGetStartedAction = 
      text === 'get started' ||
      text === "let's get started" ||
      text.indexOf("let's get started") !== -1 ||
      text.indexOf('get started') !== -1 ||
      text.indexOf('get a free quote') !== -1 ||
      text.indexOf('begin your publishing journey') !== -1 ||
      target.getAttribute('data-quote-modal') !== null;

    if (isConsultAction || isGetStartedAction) {
      e.preventDefault();
      e.stopPropagation();
      var targetPage = prefix + (window.location.protocol === 'file:' ? 'contact-us.html' : 'contact-us');
      window.location.href = targetPage;
      return;
    }

    // For file:// protocol: resolve extensionless links to .html files locally
    if (window.location.protocol === 'file:' && target.tagName === 'A') {
      var href = target.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        if (!href.includes('.html') && !href.includes('.png') && !href.includes('.jpg') && !href.includes('.webp') && !href.includes('.css')) {
          e.preventDefault();
          var fileHref = href === '' || href === '/' ? prefix + 'index.html' : href + '.html';
          window.location.href = fileHref;
        }
      }
    }
  });
});
