// ========================================
// 1. LENIS SMOOTH SCROLL
// ========================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ========================================
// 2. AOS ANIMATION INIT
// ========================================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});
// ========================================
// 2.1. HAMBURGER JS
// ========================================
       const hamburger = document.getElementById('hamburger');
        const megaMenu = document.getElementById('megaMenu');

        // Toggle menu and hamburger animation
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            megaMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (megaMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu button functionality
        function toggleMenu() {
            hamburger.classList.remove('active');
            megaMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (megaMenu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });

// ========================================
// 3. SELECT2 INITIALIZATION
// ========================================
$(function () {
    $('.head_state').select2({
        placeholder: "Select a state",
        allowClear: false,        
    });
});

// ========================================
// 4. LIKE BUTTON TOGGLE
// ========================================
document.querySelectorAll(".likeBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

// ========================================
// 5. HERO LOGO MARQUEE SLIDER
// ========================================
$('.hero_logo').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: false,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 5 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 576, settings: { slidesToShow: 2 } }
    ]
});

// ========================================
// 6. TOP PRODUCTS SLIDER (HERO TP SLIDER)
// ========================================
$('.tp_slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 800,
    pauseOnFocus: false,
    pauseOnHover: true,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
});

// Custom arrows for tp_slider
$('#herotp-next').on('click', function () {
    $('.tp_slider').slick('slickNext');
});

$('#herotp-prev').on('click', function () {
    $('.tp_slider').slick('slickPrev');
});

// Update arrow states
function updateTpArrows(currentSlide, totalSlides) {
    const slidesToShow = $('.tp_slider').slick('slickGetOption', 'slidesToShow');
    $('#herotp-prev').toggleClass('disabled', currentSlide === 0);
    $('#herotp-next').toggleClass('disabled', currentSlide >= totalSlides - slidesToShow);
}

// Init & after change
$('.tp_slider').on('init afterChange', function (event, slick, currentSlide) {
    updateTpArrows(currentSlide || 0, slick.slideCount);
});
// ========================================
// 8. NEW ARRIVALS SLIDER (HERO TP SLIDER)
// ========================================
$('.na_slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 800,
    pauseOnFocus: false,
    pauseOnHover: true,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
});

// Custom arrows for tp_slider
$('#herona-next').on('click', function () {
    $('.na_slider').slick('slickNext');
});

$('#herona-prev').on('click', function () {
    $('.na_slider').slick('slickPrev');
});

// Update arrow states
function updateNaArrows(currentSlide, totalSlides) {
    const slidesToShow = $('.na_slider').slick('slickGetOption', 'slidesToShow');
    $('#herona-prev').toggleClass('disabled', currentSlide === 0);
    $('#herona-next').toggleClass('disabled', currentSlide >= totalSlides - slidesToShow);
}

// Init & after change
$('.na_slider').on('init afterChange', function (event, slick, currentSlide) {
    updateNaArrows(currentSlide || 0, slick.slideCount);
});

// ========================================
// 7. TAB PRODUCT SLIDERS (Badminton, Tennis, etc.)
// ========================================
$(document).ready(function () {
    const $allSliders = $('.tab_prod_bad_slider');
    const $prevBtn = $('#tpbs-prev');
    const $nextBtn = $('#tpbs-next');

    // --- Helpers ---
    function isInited($el) { return $el && $el.length && $el.hasClass('slick-initialized'); }
    function getActiveSlider() { return $('.tab-pane.active .tab_prod_bad_slider'); }

    function getSlickInstance($slider) {
        if (!isInited($slider)) return null;
        try { return $slider.slick('getSlick'); } catch (_) { return null; }
    }

    function debounce(fn, wait) {
        let t;
        return function () {
            clearTimeout(t);
            const ctx = this, args = arguments;
            t = setTimeout(() => fn.apply(ctx, args), wait);
        };
    }

    function updateArrows($slider) {
        const slick = getSlickInstance($slider);
        if (!slick) {
            $prevBtn.addClass('disabled');
            $nextBtn.addClass('disabled');
            return;
        }
        const atStart = slick.currentSlide === 0;
        const atEnd = slick.currentSlide >= (slick.slideCount - slick.options.slidesToShow);
        $prevBtn.toggleClass('disabled', atStart);
        $nextBtn.toggleClass('disabled', atEnd);
    }
    const updateArrowsDebounced = debounce(updateArrows, 120);

    function strongRefresh($slider) {
        if (!isInited($slider)) return;

        try { $slider.slick('setPosition'); } catch (_) {}

        setTimeout(() => {
            try { $slider.slick('refresh'); } catch (_) {}
            updateArrowsDebounced($slider);
        }, 25);

        const finalize = debounce(() => {
            try { $slider.slick('setPosition'); } catch (_) {}
            updateArrowsDebounced($slider);
        }, 50);

        const $pane = $slider.closest('.tab-pane');
        const $imgs = $pane.find('img');
        let pending = 0;
        $imgs.each(function () { if (!this.complete) pending++; });

        if (pending === 0) {
            finalize();
        } else {
            $imgs.on('load error', function () {
                pending--;
                if (pending <= 0) finalize();
            });
        }
    }

    function initSlider($slider) {
        if (isInited($slider)) return;

        $slider
          .on('init afterChange reInit setPosition', function () {
              updateArrowsDebounced($(this));
          })
          .slick({
              infinite: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              autoplay: false,
              speed: 800,
              pauseOnFocus: false,
              pauseOnHover: true,
              responsive: [
                  { breakpoint: 992, settings: { slidesToShow: 2 } },
                  { breakpoint: 576, settings: { slidesToShow: 1 } }
              ]
          });
    }

    // --- Initialize ALL sliders ---
    $allSliders.each(function () { initSlider($(this)); });

    // --- Global Prev/Next Buttons ---
    $prevBtn.on('click', function () {
        const $s = getActiveSlider();
        if (isInited($s)) { $s.slick('slickPrev'); updateArrowsDebounced($s); }
    });

    $nextBtn.on('click', function () {
        const $s = getActiveSlider();
        if (isInited($s)) { $s.slick('slickNext'); updateArrowsDebounced($s); }
    });

    // --- Refresh when tab becomes visible ---
    $('a[data-bs-toggle="pill"], a[data-bs-toggle="tab"], button[data-bs-toggle="pill"], button[data-bs-toggle="tab"]')
      .on('shown.bs.tab shown.bs.pill', function (e) {
          const target = $(e.target).attr('data-bs-target') || $(e.target).attr('href');
          const $pane = $(target);
          const $slider = $pane.find('.tab_prod_bad_slider');
          if ($slider.length) strongRefresh($slider);
      });

    // --- Initial arrow state ---
    setTimeout(() => { updateArrows(getActiveSlider()); }, 60);

    // --- Resize handler ---
    $(window).on('resize', debounce(() => {
        const $s = getActiveSlider();
        if (isInited($s)) { try { $s.slick('setPosition'); } catch (_) {} }
        updateArrowsDebounced($s);
    }, 120));
});
// ========================================
// 9. TAB PRODUCT SLIDERS 2 (golf, dart, etc.)
// ========================================
$(document).ready(function () {
    const $allSliders = $('.tab_prod_bad_slider2');
    const $prevBtn = $('#tpbs2-prev');
    const $nextBtn = $('#tpbs2-next');

    // --- Helpers ---
    function isInited($el) { return $el && $el.length && $el.hasClass('slick-initialized'); }
    function getActiveSlider() { return $('.tab-pane.active .tab_prod_bad_slider2'); }

    function getSlickInstance($slider) {
        if (!isInited($slider)) return null;
        try { return $slider.slick('getSlick'); } catch (_) { return null; }
    }

    function debounce(fn, wait) {
        let t;
        return function () {
            clearTimeout(t);
            const ctx = this, args = arguments;
            t = setTimeout(function(){ fn.apply(ctx, args); }, wait);
        };
    }

    function updateArrows($slider) {
        const slick = getSlickInstance($slider);
        if (!slick) {
            $prevBtn.addClass('disabled');
            $nextBtn.addClass('disabled');
            return;
        }
        const atStart = slick.currentSlide === 0;
        const atEnd = slick.currentSlide >= (slick.slideCount - slick.options.slidesToShow);
        $prevBtn.toggleClass('disabled', atStart);
        $nextBtn.toggleClass('disabled', atEnd);
    }
    const updateArrowsDebounced = debounce(updateArrows, 120);

    function strongRefresh($slider) {
        if (!isInited($slider)) return;

        // 1) Immediate reposition (helps most cases)
        try { $slider.slick('setPosition'); } catch (_) {}

        // 2) Short follow-up refresh (handles hidden->visible width calc)
        setTimeout(function () {
            try { $slider.slick('refresh'); } catch (_) {}
            updateArrowsDebounced($slider);
        }, 25);

        // 3) Optional: after images are loaded, do one final position
        const $pane = $slider.closest('.tab-pane');
        const finalize = debounce(function () {
            try { $slider.slick('setPosition'); } catch (_) {}
            updateArrowsDebounced($slider);
        }, 50);

        if ($.fn.imagesLoaded) {
            // Use imagesLoaded plugin if available
            $pane.imagesLoaded().always(finalize);
        } else {
            // Fallback: wait for images in this pane
            const $imgs = $pane.find('img');
            let pending = 0;
            $imgs.each(function () { if (!this.complete) pending++; });
            if (pending === 0) {
                finalize();
            } else {
                $imgs.on('load error', function () {
                    pending--;
                    if (pending <= 0) finalize();
                });
            }
        }
    }

    function initSlider($slider) {
        if (isInited($slider)) return;

        $slider
          .on('init afterChange reInit setPosition', function () {
              updateArrowsDebounced($(this));
          })
          .slick({
              infinite: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: false, // using global arrows
              autoplay: false,
              speed: 800,
              pauseOnFocus: false,
              pauseOnHover: true,
              responsive: [
                  { breakpoint: 992, settings: { slidesToShow: 2 } },
                  { breakpoint: 576, settings: { slidesToShow: 1 } }
              ]
          });
    }

    // --- Init ALL sliders (Option B) ---
    $allSliders.each(function () { initSlider($(this)); });

    // --- Global Prev/Next wired to the CURRENT active tab's slider ---
    $prevBtn.on('click', function () {
        const $s = getActiveSlider();
        if (isInited($s)) { $s.slick('slickPrev'); updateArrowsDebounced($s); }
    });

    $nextBtn.on('click', function () {
        const $s = getActiveSlider();
        if (isInited($s)) { $s.slick('slickNext'); updateArrowsDebounced($s); }
    });

    // --- When a tab/pill becomes visible, force a strong refresh of its slider ---
    $('a[data-bs-toggle="pill"], a[data-bs-toggle="tab"], button[data-bs-toggle="pill"], button[data-bs-toggle="tab"]')
      .on('shown.bs.tab shown.bs.pill', function (e) {
          const target = $(e.target).attr('data-bs-target') || $(e.target).attr('href');
          const $pane = $(target);
          const $slider = $pane.find('.tab_prod_bad_slider2');
          if ($slider.length) strongRefresh($slider);
      });

    // --- Initial arrow state for the initially active tab ---
    setTimeout(function () { updateArrows(getActiveSlider()); }, 60);

    // --- Also refresh on window resize (guarded) ---
    $(window).on('resize', debounce(function () {
        const $s = getActiveSlider();
        if (isInited($s)) { try { $s.slick('setPosition'); } catch (_) {} }
        updateArrowsDebounced($s);
    }, 120));
});



