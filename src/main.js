import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { 
    id: 2, 
    name: "Midnight Oud", 
    price50: 310, 
    price100: 440,
    top: "Smoky Incense, Black Cardamom",
    heart: "Cambodian Oud, Tuscan Leather",
    base: "Dark Amber, Cedarwood",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqecHO4FvEhmGQqBUXTV9P4u0sjSRDfwkgcarp" 
  },
  { 
    id: 3, 
    name: "Velvet Amber", 
    price50: 295, 
    price100: 410,
    top: "Bergamot, Labdanum",
    heart: "Golden Amber, Myrrh",
    base: "Bourbon Vanilla, Tonka Bean",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq2n7yZbBSqMNBOhv50Ha9gowcPdZTKJepiyk8" 
  },
  { 
    id: 4, 
    name: "Crimson Rose", 
    price50: 340, 
    price100: 490,
    top: "Bulgarian Rose, Saffron",
    heart: "May Rose, Geranium",
    base: "Patchouli, Musk",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqb9d76Z1imoPfCY9KagJrVnOFAtp57DGERiLh" 
  },
  { 
    id: 5, 
    name: "Golden Bloom", 
    price50: 325, 
    price100: 460,
    top: "Neroli, Mandarin",
    heart: "Ylang-Ylang, Tuberose",
    base: "Sandalwood, White Honey",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqGqzXTyF7xFCNHRI5vudXn82csPlVLakjZtQr" 
  },
  { 
    id: 6, 
    name: "Mystic Cedar", 
    price50: 285, 
    price100: 395,
    top: "Atlas Cedar, Cypress",
    heart: "Vetiver, Black Pepper",
    base: "Iso E Super, Oakmoss",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqnvgreS7bwUGEWuKTDMolfsIS4qC26ByLF91t" 
  },
  { 
    id: 7, 
    name: "Scarlet Musk", 
    price50: 350, 
    price100: 510,
    top: "Red Currant, Star Anise",
    heart: "Scarlet Iris, Cashmere Wood",
    base: "Civil Musk, Ambrette",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqb9Ch6FAimoPfCY9KagJrVnOFAtp57DGERiLh" 
  },
  { 
    id: 8, 
    name: "Royal Patchouli", 
    price50: 330, 
    price100: 475,
    top: "Indonesian Patchouli, Clove",
    heart: "Orris Root, Dark Cocoa",
    base: "Benzoin, Guiac Wood",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq5Ikj801o5qui7rMpZSmhAcv2tfQ49aL0lRTP" 
  },
  { 
    id: 9, 
    name: "Sandalwood Noir", 
    price50: 360, 
    price100: 520,
    top: "Mysore Sandalwood, Cardamom",
    heart: "Papyrus, Violet Leaf",
    base: "Leather, White Amber",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq8cQjDFDs0GbPji7192ACswTmfQ8uU6FyIahJ" 
  },
  { 
    id: 10, 
    name: "Luminous Peony", 
    price50: 290, 
    price100: 420,
    top: "White Peony, Pear Nectar",
    heart: "Magnolia, Freesia",
    base: "White Musk, Cedar",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq971u8zGXFYNPRzr4S6yJE8ua0doDZBnGAhce" 
  },
  { 
    id: 11, 
    name: "Eternal Saffron", 
    price50: 375, 
    price100: 540,
    top: "Persian Saffron, Blood Orange",
    heart: "Jasmine Sambac, Fire Spice",
    base: "Agarwood, Warm Amber",
    img: "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqE3f8FZqcLgPMhz6yijV529IZFNkxYvU3q0ue" 
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    }
    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // --- Populate Additional Products ---
  const container = document.getElementById("additional-products-container");
  if (container) {
    products.forEach((product, index) => {
      // index 0 (Fragrance 02) -> Image RIGHT (md:order-last)
      // index 1 (Fragrance 03) -> Image LEFT
      const isRight = index % 2 === 0;
      
      const content = `
      <section class="product-section relative min-h-screen flex items-center bg-pitch-black border-t border-white/5 py-20 md:py-28">
        <div class="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          ${isRight ? `
          <div class="relative h-[60vh] sm:h-[70vh] md:h-[80vh] group overflow-hidden rounded-lg product-img-wrapper cursor-grab active:cursor-grabbing border border-white/5 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center md:order-last" data-product-id="${product.id}">
            <img src="${product.img}" alt="${product.name}" class="max-h-[85%] max-w-[85%] object-contain product-bottle transition-transform duration-150 ease-out select-none">
            <div class="absolute inset-0 bg-ruby-red/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div class="absolute bottom-4 left-4 bg-pitch-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[10px] text-brushed-gold uppercase tracking-[0.2em] pointer-events-none flex items-center space-x-2">
              <svg class="w-3.5 h-3.5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              <span>Drag to rotate 360°</span>
            </div>
          </div>
          ` : `
          <div class="relative h-[60vh] sm:h-[70vh] md:h-[80vh] group overflow-hidden rounded-lg product-img-wrapper cursor-grab active:cursor-grabbing border border-white/5 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center" data-product-id="${product.id}">
            <img src="${product.img}" alt="${product.name}" class="max-h-[85%] max-w-[85%] object-contain product-bottle transition-transform duration-150 ease-out select-none">
            <div class="absolute inset-0 bg-ruby-red/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div class="absolute bottom-4 left-4 bg-pitch-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[10px] text-brushed-gold uppercase tracking-[0.2em] pointer-events-none flex items-center space-x-2">
              <svg class="w-3.5 h-3.5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              <span>Drag to rotate 360°</span>
            </div>
          </div>
          `}
          
          <div class="product-info flex flex-col justify-center space-y-6 max-w-lg ${isRight ? '' : 'md:ml-auto'}">
            <div class="flex items-center justify-between">
              <span class="text-brushed-gold text-xs tracking-[0.25em] uppercase font-semibold">Fragrance ${product.id.toString().padStart(2, '0')}</span>
              <span class="text-2xl font-serif text-white font-medium">$${product.price100} <span class="text-xs font-sans text-gray-400 font-normal">/ 100ml</span></span>
            </div>
            <h2 class="text-4xl md:text-5xl font-serif text-white">${product.name}</h2>
            <p class="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              Immerse yourself in the scent story of ${product.name}. Handcrafted using artisanal techniques to ensure unparalleled sillage and longevity.
            </p>
            
            <div class="pt-4 border-t border-white/10">
              <h4 class="uppercase tracking-[0.2em] text-[11px] mb-3 text-gray-500 font-medium">Olfactory Pyramid</h4>
              <div class="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                <div class="bg-white/5 p-2.5 rounded border border-white/5">
                  <span class="text-brushed-gold block text-[10px] uppercase tracking-wider mb-1">Top</span>
                  <span class="text-white font-light">${product.top}</span>
                </div>
                <div class="bg-white/5 p-2.5 rounded border border-white/5">
                  <span class="text-brushed-gold block text-[10px] uppercase tracking-wider mb-1">Heart</span>
                  <span class="text-white font-light">${product.heart}</span>
                </div>
                <div class="bg-white/5 p-2.5 rounded border border-white/5">
                  <span class="text-brushed-gold block text-[10px] uppercase tracking-wider mb-1">Base</span>
                  <span class="text-white font-light">${product.base}</span>
                </div>
              </div>
            </div>
            
            <div class="flex flex-wrap items-center gap-4 pt-4">
              <div class="flex space-x-2 border border-white/20 p-1 rounded">
                <button class="px-4 py-2 bg-brushed-gold text-pitch-black font-semibold text-xs transition-colors">50ml - $${product.price50}</button>
                <button class="px-4 py-2 text-gray-300 hover:text-white text-xs transition-colors">100ml - $${product.price100}</button>
              </div>
              <a href="/product/?id=${product.id}" class="px-6 py-3 bg-ruby-red hover:bg-ruby-red/80 text-white uppercase text-xs tracking-[0.2em] font-semibold transition-all rounded shadow-[0_0_15px_rgba(155,17,30,0.4)]">
                Explore Fragrance
              </a>
            </div>
          </div>
        </div>
      </section>
      `;
      container.innerHTML += content;
    });
  }

  // --- Interactive 360 Drag-to-Rotate for all Perfume Bottle Containers ---
  setup360DragRotation();

  // --- GSAP Animations ---
  initGSAPAnimations();
});

function setup360DragRotation() {
  const wrappers = document.querySelectorAll('.product-img-wrapper');
  
  wrappers.forEach(wrapper => {
    const bottle = wrapper.querySelector('.product-bottle');
    if (!bottle) return;

    let isDragging = false;
    let startX = 0;
    let currentRotY = 0;
    let targetRotY = 0;

    // Mouse events
    wrapper.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      wrapper.classList.add('cursor-grabbing');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) {
        // Subtle mouse move hover tilt
        const rect = wrapper.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
          const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
          const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(bottle, {
            rotationY: currentRotY + relativeX * 25,
            rotationX: -relativeY * 15,
            duration: 0.4,
            ease: "power1.out"
          });
        }
        return;
      }
      
      const deltaX = e.clientX - startX;
      targetRotY = currentRotY + deltaX * 0.8;
      
      gsap.to(bottle, {
        rotationY: targetRotY,
        duration: 0.2,
        ease: "power1.out"
      });
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        currentRotY = targetRotY;
        wrapper.classList.remove('cursor-grabbing');
        
        // Reset tilt on release
        gsap.to(bottle, {
          rotationX: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      }
    });

    // Touch events for mobile responsiveness
    wrapper.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
      }
    }, { passive: true });

    wrapper.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - startX;
      targetRotY = currentRotY + deltaX * 1.2;
      gsap.to(bottle, {
        rotationY: targetRotY,
        duration: 0.1
      });
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
      if (isDragging) {
        isDragging = false;
        currentRotY = targetRotY;
      }
    });
  });
}

function initGSAPAnimations() {
  // Splash Screen Fade Out & Hero Animation Sequence
  const splash = document.getElementById("intro-splash");
  const skipBtn = document.getElementById("skip-intro-btn");

  function animateHeroElements() {
    const tlHero = gsap.timeline();
    tlHero.to(".hero-text", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          .to(".hero-subtext", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
          .to(".hero-ctas", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6");
  }

  let splashDismissed = false;

  function dismissSplash() {
    if (splashDismissed || !splash) return;
    splashDismissed = true;

    gsap.to(splash, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        splash.style.display = "none";
        animateHeroElements();
      }
    });
  }

  if (splash) {
    // Auto dismiss splash after exactly 8 seconds
    const splashTimer = setTimeout(dismissSplash, 8000);

    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        clearTimeout(splashTimer);
        dismissSplash();
      });
    }
  } else {
    animateHeroElements();
  }

  gsap.to(".hero-bg", {
    scale: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "header",
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  });

  // Product Showcase Section Scroll Animations
  const productSections = document.querySelectorAll(".product-section");
  productSections.forEach((section) => {
    const imgWrapper = section.querySelector(".product-img-wrapper");
    const infoElements = section.querySelectorAll(".product-info > *");

    if (imgWrapper) {
      gsap.fromTo(imgWrapper, 
        { y: 30, opacity: 0.8 },
        {
          y: -30,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }

    if (infoElements.length > 0) {
      gsap.from(infoElements, {
        opacity: 0,
        y: 35,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }
  });
}
