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

    // Initialize all sliders inside tabs
    $('.tab_prod_bad_slider').each(function () {
        $(this).slick({
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
    });

    // Helper: Get active tab's slider
    function getActiveTabSlider() {
        return $('.tab-pane.active .tab_prod_bad_slider');
    }

    // Global Prev/Next buttons for tab sliders
    $('#tpbs-prev').on('click', function () {
        getActiveTabSlider().slick('slickPrev');
    });

    $('#tpbs-next').on('click', function () {
        getActiveTabSlider().slick('slickNext');
    });

    // Update arrow states
    function updateTabArrows(slider) {
        const slick = slider.slick('getSlick');
        $('#tpbs-prev').toggleClass('disabled', slick.currentSlide === 0);
        $('#tpbs-next').toggleClass('disabled', slick.currentSlide >= slick.slideCount - slick.options.slidesToShow);
    }

    // On init & slide change
    $('.tab_prod_bad_slider').on('init afterChange', function () {
        updateTabArrows($(this));
    });

    // Re-init slider when tab is shown (fixes layout issues)
    $('a[data-bs-toggle="pill"], a[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
        const activeSlider = getActiveTabSlider();
        setTimeout(() => {
            activeSlider.slick('setPosition');
            updateTabArrows(activeSlider);
        }, 150);
    });

    // Initial arrow state
    setTimeout(() => {
        updateTabArrows(getActiveTabSlider());
    }, 300);
});
// ========================================
// 9. TAB PRODUCT SLIDERS 2 (golf, dart, etc.)
// ========================================
$(document).ready(function () {

    // Initialize all sliders inside tabs
    $('.tab_prod_bad_slider2').each(function () {
        $(this).slick({
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
    });

    // Helper: Get active tab's slider
    function getActiveTabSlider() {
        return $('.tab-pane.active .tab_prod_bad_slider2');
    }

    // Global Prev/Next buttons for tab sliders
    $('#tpbs2-prev').on('click', function () {
        getActiveTabSlider().slick('slickPrev');
    });

    $('#tpbs2-next').on('click', function () {
        getActiveTabSlider().slick('slickNext');
    });

    // Update arrow states
    function updateTabArrows(slider) {
        const slick = slider.slick('getSlick');
        $('#tpbs2-prev').toggleClass('disabled', slick.currentSlide === 0);
        $('#tpbs2-next').toggleClass('disabled', slick.currentSlide >= slick.slideCount - slick.options.slidesToShow);
    }

    // On init & slide change
    $('.tab_prod_bad_slider2').on('init afterChange', function () {
        updateTabArrows($(this));
    });

    // Re-init slider when tab is shown (fixes layout issues)
    $('a[data-bs-toggle="pill"], a[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
        const activeSlider = getActiveTabSlider();
        setTimeout(() => {
            activeSlider.slick('setPosition');
            updateTabArrows(activeSlider);
        }, 150);
    });

    // Initial arrow state
    setTimeout(() => {
        updateTabArrows(getActiveTabSlider());
    }, 300);
});



