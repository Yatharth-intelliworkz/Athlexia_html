import Slider from 'react-slick';
import styles from './LogoSlider.module.css';

export type LogoItem = {
    src: string;
    alt: string;
};

type LogoSliderProps = Readonly<{
    items: LogoItem[];                 // ← pass different arrays per page
    className?: string;
}>;

/**
 * Marquee-like brand/logo slider.
 * Only the `items` prop changes across pages; slider behavior stays identical.
 */
export default function LogoSlider({ items, className }: LogoSliderProps) {
    const settings: import('react-slick').Settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,         // continuous scroll
        speed: 5000,              // match your jQuery slick config
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className={`mt-75 ${className ?? ''}`}>
            <div className="container-fluid">
                <div className={styles.hero_logo}>
                    <Slider {...settings}>
                        {items.map((item) => (
                            <div key={item.alt || item.src} className={styles.slide}>
                                <img
                                    src={item.src}
                                    alt={item.alt || 'logo'}
                                    className={styles.logoImg}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
