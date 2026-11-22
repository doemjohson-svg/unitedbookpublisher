// United Book Publisher - Main Interactive Script
// Includes: Dropdowns, Mobile Drawer, Counters, Pricing Tabs Switcher,
// Slide-Out Contact/Quote Drawer, Accordions & Form Handlers

// Pricing data for all 8 categories
const pricingData = {
  'illustration': {
    title: 'Professional Book Illustration',
    packages: [
      {
        name: 'Spot Illustration',
        price: '$65',
        oldPrice: '$130',
        features: [
          'Small, simple illustrations to liven up a page with text.',
          'Placed as chapter heading, corner decoration, or inside text.',
          'One character or object OR two simple objects.',
          'Full commercial rights & high-resolution print files.',
          'Up to 3 revision rounds included.'
        ]
      },
      {
        name: 'Half-Page Illustration',
        price: '$120',
        oldPrice: '$240',
        features: [
          'Medium-scale illustration capturing key story moments.',
          'Ideal for children books, poetry, and memoirs.',
          'Up to two detailed characters with simple background.',
          'Full-color, print-ready 300 DPI resolution.',
          'Dedicated illustrator communication & revisions.'
        ]
      },
      {
        name: 'Full-Page Illustration',
        price: '$200',
        oldPrice: '$400',
        features: [
          'Full-bleed double-page or single-page complete spread.',
          'Detailed complex scenes with multi-character interactions.',
          'Vibrant rich background detailing and lighting.',
          'Print & digital formats formatted for Kindle & print.',
          'Complete creative consultation from draft to final art.'
        ]
      }
    ]
  },
  'author-website': {
    title: 'Custom Author Website Platforms',
    packages: [
      {
        name: 'Author Starter Website',
        price: '$499',
        oldPrice: '$999',
        features: [
          'Custom responsive modern author portfolio site.',
          'Author bio, book cover showcase & direct purchase links.',
          'Contact & inquiry form with instant email alerts.',
          'Mobile & tablet friendly design optimized for speed.',
          'Social media links & basic on-page SEO setup.'
        ]
      },
      {
        name: 'Professional Author Platform',
        price: '$899',
        oldPrice: '$1,799',
        features: [
          'Up to 5 custom pages (Home, About, Books, Blog, Contact).',
          'Integrated email newsletter capture & lead generation.',
          'Reader reviews & media recognition press section.',
          'Blogging system for author news and reader engagement.',
          'Custom domain connection & SSL security certificate.'
        ]
      },
      {
        name: 'Ultimate Author E-Commerce',
        price: '$1,499',
        oldPrice: '$2,999',
        features: [
          'Complete author store with direct book & merchandise sales.',
          'Payment gateway integration (Stripe, PayPal, Apple Pay).',
          'Interactive book sample preview reader.',
          'Advanced SEO optimization & Google Search Console setup.',
          '1 Year free hosting & technical maintenance included.'
        ]
      }
    ]
  },
  'book-cover': {
    title: 'Custom Book Cover Design',
    packages: [
      {
        name: 'Standard eBook Cover',
        price: '$199',
        oldPrice: '$399',
        features: [
          'Bespoke digital eBook front cover design.',
          'Genre-specific typography & premium typography.',
          '3D digital mockup for website and marketing.',
          'High-resolution JPG & PNG files for Amazon KDP.',
          'Unlimited design concepts & revision rounds.'
        ]
      },
      {
        name: 'Paperback & Hardcover Wrap',
        price: '$349',
        oldPrice: '$699',
        features: [
          'Full print-ready jacket: Front, Back & Spine calculation.',
          'Barcode generation with ISBN integration.',
          'Print specifications tailored to Amazon KDP & IngramSpark.',
          '3D digital mockup bundle (eBook, paperback, tablet).',
          'Source files included (PSD / PDF / AI).'
        ]
      },
      {
        name: 'Premium Illustrated Cover',
        price: '$599',
        oldPrice: '$1,199',
        features: [
          'Original custom illustration by senior digital artist.',
          'Multi-format print wrap + eBook + audio cover.',
          'Promotional social media banners & marketing assets.',
          'Custom embossed/foil effect preview layers.',
          '100% exclusive copyright and full licensing rights.'
        ]
      }
    ]
  },
  'publishing': {
    title: 'Professional Book Publishing',
    packages: [
      {
        name: 'Basic Publishing Package',
        price: '$999',
        oldPrice: '$1,999',
        features: [
          'Complete eBook & Paperback formatting & conversion.',
          'Dedicated ISBN assignment & barcode generation.',
          'Worldwide distribution on Amazon, Barnes & Noble, Apple Books.',
          'Author retains 100% royalties and rights.',
          'Dedicated publishing project manager.'
        ]
      },
      {
        name: 'Standard Publishing Package',
        price: '$1,499',
        oldPrice: '$2,999',
        features: [
          'Everything in Basic + Hardcover edition creation.',
          'Custom creative interior typography & chapter headers.',
          'Copyright registration assistance & Library of Congress data.',
          'Amazon Author Central page setup & optimization.',
          '5 Complimentary author print copies delivered.'
        ]
      },
      {
        name: 'Extensive Publishing Package',
        price: '$2,499',
        oldPrice: '$4,999',
        features: [
          'Multi-format publishing: eBook, Paperback & Luxury Hardcover.',
          'Global distribution to 40,000+ libraries & retailers worldwide.',
          'Expedited publishing timeline (under 30 days).',
          'Press release creation and national media distribution.',
          '10 Complimentary author copies + ongoing royalty reporting.'
        ]
      }
    ]
  },
  'marketing': {
    title: 'Strategic Book Marketing',
    packages: [
      {
        name: 'Silver Marketing Package',
        price: '$3,499',
        oldPrice: '$6,999',
        features: [
          'Targeted Facebook & Instagram reader advertising campaign.',
          'Press release writing & distribution to 150+ news sites.',
          'Amazon category & keyword ranking optimization.',
          'Custom promotional graphics & social media banners.',
          'Bi-weekly campaign performance analytics report.'
        ]
      },
      {
        name: 'Gold Marketing Package',
        price: '$6,499',
        oldPrice: '$12,999',
        features: [
          'Everything in Silver + 60-day active Amazon Ads management.',
          'High-definition animated cinematic book video trailer.',
          'Influencer outreach & verified book review campaign.',
          'Author podcast interview placement.',
          'Dedicated book marketing strategist with weekly calls.'
        ]
      },
      {
        name: 'Platinum Marketing Plan',
        price: '$11,999',
        oldPrice: '$23,999',
        features: [
          'Comprehensive nationwide book promotion campaign.',
          'Times Square or major metro digital billboard display.',
          'Guaranteed national radio & podcast interview tours.',
          'Major media feature pitching (Forbes, HuffPost, etc.).',
          'Bestseller trajectory campaign management.'
        ]
      }
    ]
  },
  'editing': {
    title: 'Professional Editorial Services',
    packages: [
      {
        name: 'Proofreading',
        price: '$299',
        oldPrice: '$599',
        features: [
          'Meticulous spelling, grammar, syntax & punctuation check.',
          'Correction of typos, duplicate words & formatting quirks.',
          'Consistent US/UK English style guide adherence.',
          'Track Changes document provided for full transparency.',
          'Quick turnaround by native professional proofreaders.'
        ]
      },
      {
        name: 'Line & Copyediting',
        price: '$599',
        oldPrice: '$1,199',
        features: [
          'Comprehensive sentence structure, tone & flow refinement.',
          'Vocabulary enhancement while preserving author voice.',
          'Redundancy removal and clarity polishing.',
          'Editorial summary report highlighting narrative strengths.',
          'Two full editorial passes included.'
        ]
      },
      {
        name: 'Developmental Editing',
        price: '$999',
        oldPrice: '$1,999',
        features: [
          'Deep structural critique of plot, pacing, and character arcs.',
          'In-depth chapter-by-chapter editorial feedback letter.',
          'Constructive solutions for plot holes and dialogue improvements.',
          'One-on-one editorial strategy phone call.',
          'Follow-up review of revised draft included.'
        ]
      }
    ]
  },
  'ghostwriting': {
    title: 'Expert Ghostwriting Services',
    packages: [
      {
        name: 'Short Book / Memoir (25k Words)',
        price: '$2,999',
        oldPrice: '$5,999',
        features: [
          'Collaborative recorded interviews to capture your voice.',
          'Detailed chapter outline and structural blueprint.',
          'Dedicated genre-specialized ghostwriter.',
          'Regular chapter submissions for review and feedback.',
          '100% Copyright and author credit belongs solely to you.'
        ]
      },
      {
        name: 'Standard Manuscript (50k Words)',
        price: '$5,499',
        oldPrice: '$10,999',
        features: [
          'Ideal for full-length fiction, business books, and biographies.',
          'In-depth research and subject matter synthesis.',
          'Senior executive editor oversight and polish.',
          'Strict non-disclosure agreement (NDA) guarantee.',
          'Complete manuscript formatted and publication-ready.'
        ]
      },
      {
        name: 'Comprehensive Manuscript (80k Words)',
        price: '$8,999',
        oldPrice: '$17,999',
        features: [
          'Comprehensive epic novel, multi-volume or definitive authority book.',
          'Elite bestselling author assigned to your project.',
          'Full developmental editing, line editing & proofreading included.',
          'Includes custom book proposal and publishing roadmap.',
          'Unlimited revisions until your vision is 100% realized.'
        ]
      }
    ]
  },
  'combo-deals': {
    title: 'Value All-in-One Publishing Combos',
    packages: [
      {
        name: 'Author Kickstart Combo',
        price: '$1,899',
        oldPrice: '$3,799',
        features: [
          'Professional Copyediting (up to 40k words).',
          'Custom eBook & Paperback Cover Design.',
          'Basic Publishing Package with Global Distribution.',
          'ISBN Assignment & Barcode Integration.',
          'Save 50% compared to purchasing services separately!'
        ]
      },
      {
        name: 'Bestseller Launch Combo',
        price: '$3,999',
        oldPrice: '$7,999',
        features: [
          'Full Developmental Editing & Proofreading.',
          'Premium Print & eBook Cover Design + 3D Mockups.',
          'Standard Publishing Package (eBook, Paperback & Hardcover).',
          'Professional Author Website (up to 5 pages).',
          'Silver Marketing Campaign with Social Media Ads.'
        ]
      },
      {
        name: 'Complete Author Legacy Combo',
        price: '$7,499',
        oldPrice: '$14,999',
        features: [
          'Comprehensive Editorial Package (Developmental + Proofreading).',
          'Illustrated Cover + Interior Book Formatting.',
          'Extensive Publishing with Worldwide Distribution.',
          'Ultimate Author E-Commerce Platform.',
          'Gold Marketing Package with Book Video Trailer & PR Campaign.'
        ]
      }
    ]
  }
};


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
    btn.addEventListener('focus', show);
    menu.addEventListener('mouseenter', show);
    menu.addEventListener('mouseleave', hide);
  });

  // 4. Mobile Navigation Drawer
  var mobileToggle = document.querySelector('header button[aria-controls="mobile-nav"]');
  if (mobileToggle) {
    var overlay = document.createElement('div');
    overlay.className = 'ubp-mobile-overlay';

    var drawer = document.createElement('div');
    drawer.className = 'ubp-mobile-menu';
    drawer.innerHTML = 
      '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:1px solid #e5e7eb;">' +
        '<span style="font-weight:bold; font-size:18px; color:#29361a;">Menu</span>' +
        '<button type="button" id="ubp-close-mobile" style="background:none; border:none; font-size:24px; cursor:pointer; color:#4b5563; padding:4px 8px;">&times;</button>' +
      '</div>' +
      '<nav style="display:flex; flex-direction:column; gap:12px;">' +
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
        '<button type="button" class="ubp-open-drawer-btn" style="display:block; width:100%; text-align:center; background:#b46c29; color:white; padding:10px 16px; border-radius:6px; font-weight:bold; border:none; cursor:pointer;">Contact Us</button>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    var openNavDrawer = function() {
      overlay.classList.add('show');
      drawer.classList.add('show');
      mobileToggle.setAttribute('aria-expanded', 'true');
    };

    var closeNavDrawer = function() {
      overlay.classList.remove('show');
      drawer.classList.remove('show');
      mobileToggle.setAttribute('aria-expanded', 'false');
    };

    mobileToggle.addEventListener('click', openNavDrawer);
    overlay.addEventListener('click', closeNavDrawer);
    drawer.querySelector('#ubp-close-mobile').addEventListener('click', closeNavDrawer);
    drawer.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeNavDrawer);
    });
    var mobileContactBtn = drawer.querySelector('.ubp-open-drawer-btn');
    if (mobileContactBtn) {
      mobileContactBtn.addEventListener('click', function() {
        closeNavDrawer();
        openDrawer();
      });
    }
  }

  // 5. Slide-Out Contact & Quote Drawer Handler
  var backdrop = document.querySelector('.ubp-drawer-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'ubp-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  var getDrawer = function() {
    return document.querySelector('aside#_R_6adb_') || document.querySelector('aside[aria-label="Get started form"]');
  };

  var openDrawer = function(pkgName) {
    var drawer = getDrawer();
    if (drawer) {
      drawer.classList.remove('invisible', 'translate-x-full');
      drawer.classList.add('visible', 'translate-x-0', 'ubp-drawer-open');
      drawer.setAttribute('aria-hidden', 'false');
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';

      if (pkgName) {
        var msgArea = drawer.querySelector('textarea[name="message"]');
        if (msgArea) {
          msgArea.value = 'Hello, I would like to inquire about the ' + pkgName + ' package.';
        }
      }
      var firstInput = drawer.querySelector('input[name="fullName"]');
      if (firstInput) {
        setTimeout(function() { firstInput.focus(); }, 150);
      }
    } else {
      var contactForm = document.querySelector('form');
      if (contactForm && window.location.pathname.includes('contact-us')) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = prefix + (window.location.protocol === 'file:' ? 'contact-us.html' : 'contact-us');
      }
    }
  };

  var closeDrawer = function() {
    var drawer = getDrawer();
    if (drawer) {
      drawer.classList.add('invisible', 'translate-x-full');
      drawer.classList.remove('visible', 'translate-x-0', 'ubp-drawer-open');
      drawer.setAttribute('aria-hidden', 'true');
    }
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  };

  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // Drawer close button
  document.querySelectorAll('aside[aria-label="Get started form"] button[aria-label="Close form"], aside#_R_6adb_ button[aria-label="Close form"]').forEach(function(btn) {
    btn.addEventListener('click', closeDrawer);
  });

  // 6. Pricing Tabs System (for pricing.html and service pages)
  var renderPricingCards = function(categoryKey, container) {
    var normKey = categoryKey.toLowerCase();
    if (normKey === 'authors-website' || normKey === "author's-website") normKey = 'author-website';
    if (normKey === 'book-covers') normKey = 'book-cover';
    
    var catData = pricingData[normKey] || pricingData['illustration'];
    if (!catData || !container) return;

    var cardsHtml = catData.packages.map(function(pkg) {
      var featuresHtml = pkg.features.map(function(f) {
        return '<li class="flex items-start gap-2.5">' +
          '<span class="pricing-box-bullet mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c97a21]">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-3 w-3 text-white" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>' +
          '</span>' +
          '<span class="pricing-box-feature text-sm leading-relaxed text-[#29361a]">' + f + '</span>' +
        '</li>';
      }).join('');

      return '<div class="motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out motion-safe:will-change-transform">' +
        '<div class="pricing-box group flex h-full flex-col rounded-xl border border-[#34401f] bg-[#fdeee0] p-6 shadow-sm min-h-105">' +
          '<div>' +
            '<h3 class="pricing-box-title font-heading text-xl font-bold text-[#29361a] sm:text-[22px]">' + pkg.name + '</h3>' +
            '<p class="mt-4 font-heading text-4xl font-bold text-[#b46c29]">' + pkg.price + '</p>' +
            '<p class="pricing-box-price mt-1 text-sm text-[#29361a]/70"><span class="line-through">' + pkg.oldPrice + '</span> Only</p>' +
          '</div>' +
          '<div class="pricing-scroll mt-5 max-h-52 space-y-4 overflow-y-auto pr-2" data-lenis-prevent="true">' +
            '<ul class="space-y-3">' + featuresHtml + '</ul>' +
          '</div>' +
          '<div class="mt-auto pt-5">' +
            '<div class="pricing-box-footer grid grid-cols-2 gap-3 border-t border-gray-300/70 pt-4">' +
              '<button type="button" data-talkknock-open="true" data-package="' + pkg.name + '" class="flex flex-col gap-1.5 text-left text-xs text-[#29361a] transition hover:text-[#b46c29]">' +
                '<span class="font-semibold">Want To Discuss?</span>' +
                '<span class="flex items-center gap-2">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-4 w-4 shrink-0" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>Let\'s Chat Now' +
                '</span>' +
              '</button>' +
              '<div class="flex flex-col items-end justify-center">' +
                '<button type="button" data-quote-modal="true" data-package="' + pkg.name + '" class="ubp-cta-button ubp-cta-button-primary inline-flex items-center justify-center rounded-md border-2 border-[#b46c29] bg-[#b46c29] px-4 py-2 text-xs font-bold uppercase text-white shadow transition-colors hover:border-[#b46c29] hover:bg-white hover:text-[#b46c29]">Get Started</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    container.innerHTML = '<div class="grid pricing-tab-fade gap-5 sm:grid-cols-2 xl:grid-cols-3">' + cardsHtml + '</div>';
  };

  var tablist = document.querySelector('aside [role="tablist"]');
  if (tablist) {
    var tabs = tablist.querySelectorAll('button[role="tab"]');
    var panel = document.querySelector('[role="tabpanel"]');

    var switchTab = function(btn) {
      tabs.forEach(function(t) {
        t.setAttribute('aria-selected', 'false');
        t.tabIndex = -1;
        t.className = 'shrink-0 rounded-full px-4 py-2.5 text-left font-heading text-xs font-semibold uppercase tracking-wide transition-all duration-300 sm:text-sm lg:w-full lg:rounded-md bg-[#e8dcc8] text-[#29361a] hover:bg-[#dcc9ad]';
      });
      btn.setAttribute('aria-selected', 'true');
      btn.tabIndex = 0;
      btn.className = 'shrink-0 rounded-full px-4 py-2.5 text-left font-heading text-xs font-semibold uppercase tracking-wide transition-all duration-300 sm:text-sm lg:w-full lg:rounded-md bg-[#29361a] text-white';

      var tabId = btn.id || '';
      var catKey = tabId.replace(/.*-tab-/, '');
      if (!catKey) {
        catKey = btn.textContent.trim().toLowerCase().replace(/['\s]+/g, '-');
      }
      if (panel) {
        renderPricingCards(catKey, panel);
      }
    };

    tabs.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        switchTab(btn);
      });
    });
  }

  // 7. Portfolio Showcase Tabs Switcher
  var portfolioTabs = document.querySelectorAll('button[role="tab"]');
  portfolioTabs.forEach(function(btn) {
    var parentTablist = btn.closest('[role="tablist"]');
    var text = btn.textContent.trim().toLowerCase();
    if (['published books', 'author websites', 'book illustrations', 'video trailers', 'book marketing'].includes(text)) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (parentTablist) {
          parentTablist.querySelectorAll('button[role="tab"]').forEach(function(t) {
            t.setAttribute('aria-selected', 'false');
            t.className = 'px-3 py-1 font-heading text-sm font-semibold transition-colors sm:text-base text-white hover:text-[#f1d0ae]';
          });
        }
        btn.setAttribute('aria-selected', 'true');
        btn.className = 'px-3 py-1 font-heading text-sm font-semibold transition-colors sm:text-base text-[#f1d0ae]';
      });
    }
  });

  // 8. FAQ Accordion Toggle
  document.querySelectorAll('button').forEach(function(btn) {
    var nextElem = btn.nextElementSibling;
    if (nextElem && (nextElem.classList.contains('grid-rows-[0fr]') || nextElem.classList.contains('grid-rows-[1fr]') || nextElem.className.includes('grid-rows-['))) {
      btn.classList.add('ubp-accordion-btn');
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var isExpanded = btn.getAttribute('aria-expanded') === 'true';
        var icon = btn.querySelector('svg');
        if (isExpanded) {
          btn.setAttribute('aria-expanded', 'false');
          nextElem.classList.remove('ubp-accordion-active');
          nextElem.classList.remove('grid-rows-[1fr]', 'opacity-100');
          nextElem.classList.add('grid-rows-[0fr]', 'opacity-0');
          if (icon) {
            icon.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>';
          }
        } else {
          btn.setAttribute('aria-expanded', 'true');
          nextElem.classList.add('ubp-accordion-active');
          nextElem.classList.remove('grid-rows-[0fr]', 'opacity-0');
          nextElem.classList.add('grid-rows-[1fr]', 'opacity-100');
          if (icon) {
            icon.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus size-4" aria-hidden="true"><path d="M5 12h14"></path></svg>';
          }
        }
      });
    }
  });

  // 9. Global Click Handler for Action Buttons & Links
  document.addEventListener('click', function(e) {
    var target = e.target.closest('button, a');
    if (!target) return;

    // Allow form submit buttons to trigger their form submit event
    if (target.type === 'submit' && target.closest('form')) return;

    // Handle side tab "Let's Get Started" link
    if (target.getAttribute('aria-controls') === '_R_6adb_') {
      e.preventDefault();
      openDrawer();
      return;
    }

    // Normal anchor links
    if (target.tagName === 'A') {
      var href = target.getAttribute('href') || '';
      if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#')) return;

      // Local file resolution if browsing from disk
      if (window.location.protocol === 'file:' && !href.startsWith('http')) {
        if (!href.includes('.html') && !href.includes('.png') && !href.includes('.jpg') && !href.includes('.css')) {
          e.preventDefault();
          var fileHref = (href === '' || href === '/') ? prefix + 'index.html' : href + '.html';
          window.location.href = fileHref;
        }
      }
      return;
    }

    // Buttons: Skip special non-CTA buttons
    if (target.getAttribute('role') === 'tab') return;
    if (target.classList.contains('ubp-accordion-btn') || (target.nextElementSibling && target.nextElementSibling.className.includes('grid-rows-['))) return;
    if (target.getAttribute('aria-label') === 'Close form') return;
    if (target.getAttribute('aria-controls') === 'mobile-nav') return;
    if (target.getAttribute('aria-haspopup') === 'menu') return;

    // Check for CTA actions
    var isTalkKnock = target.getAttribute('data-talkknock-open') !== null;
    var isQuoteModal = target.getAttribute('data-quote-modal') !== null;
    var text = (target.textContent || '').trim().toLowerCase();

    var isActionText = 
      text.includes('chat with us') ||
      text.includes('talk to an agent') ||
      text.includes('talk to a senior consultant') ||
      text.includes('let\'s chat now') ||
      text.includes('get a free quote') ||
      text.includes('begin your publishing journey') ||
      text.includes('get started') ||
      text.includes('let\'s get started') ||
      text.includes('book free consultation') ||
      text.includes('schedule your free consultation') ||
      text.includes('request quote') ||
      text.includes('get an instant quote') ||
      text.includes('begin recording') ||
      text.includes('begin publishing') ||
      text.includes('start project') ||
      text.includes('start your publishing journey');

    if (isTalkKnock || isQuoteModal || isActionText) {
      e.preventDefault();
      var pkg = target.getAttribute('data-package') || '';
      if (!pkg) {
        var box = target.closest('.pricing-box');
        if (box) {
          var title = box.querySelector('.pricing-box-title');
          if (title) pkg = title.textContent.trim();
        }
      }
      openDrawer(pkg);
    }
  });

  // 10. Form Submission Handlers
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Submitting...</span>';
      }

      setTimeout(function() {
        var successBox = document.createElement('div');
        successBox.className = 'ubp-form-success';
        successBox.innerHTML = 
          '<svg style="width:36px; height:36px; margin:0 auto 8px; color:#16a34a;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' +
          '<div style="font-weight:bold; font-size:16px;">Thank You!</div>' +
          '<div style="font-size:13px; margin-top:4px;">Your inquiry has been received. Our publishing specialist will contact you shortly.</div>';

        form.innerHTML = '';
        form.appendChild(successBox);

        if (form.closest('aside')) {
          setTimeout(function() {
            closeDrawer();
          }, 3500);
        }
      }, 600);
    });
  });
});
