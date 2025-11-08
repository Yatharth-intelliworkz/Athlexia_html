import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from './ProductSliderCard.module.css';
import ProductCard, { type ProductCardProps } from '../ProductCard/ProductCard';
import leftArr from '@/assets/images/left_arr.svg';
import rightArr from '@/assets/images/right_arr.svg';

type Props = Readonly<{
  title: string;
  items: ProductCardProps[];
  className?: string;
  slidesToShow?: number;
  infinite?: boolean;
  autoplay?: boolean;
  speed?: number;
}>;

export default function ProductSliderCard({
  title,
  items,
  className,
  slidesToShow = 5,
  infinite = false,
  autoplay = false,
  speed = 800,
}: Props) {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: import('react-slick').Settings = {
    dots: false,
    arrows: false,
    infinite,
    autoplay,
    speed,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const totalSlides = items.length;
  const slidesVisible = slidesToShow;
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= totalSlides - slidesVisible;

  // Ensure correct disabled state on resize
  useEffect(() => {
    const handleResize = () => {
      const refAny = sliderRef.current as any;
      const curr =
        (typeof refAny?.slickCurrentSlide === 'function' ? refAny.slickCurrentSlide() : undefined) ??
        (refAny?.innerSlider?.state?.currentSlide ?? 0);
      setCurrentSlide(curr);
    };

    // initialize on mount and update on resize
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`mt-75 ${className ?? ''}`}>
      <div className="container-fluid">
        <div className={styles.header}>
          <h2 className="black_title-48">{title}</h2>
          <div className={styles.arrows}>
            <button
              type="button"
              className={`${styles.arrowBtn} ${isPrevDisabled ? styles.disabled : ''}`}
              onClick={() => sliderRef.current?.slickPrev()}
              disabled={isPrevDisabled}
              aria-label="Previous"
            >
              <img src={leftArr} alt="Previous" />
            </button>

            <button
              type="button"
              className={`${styles.arrowBtn} ${isNextDisabled ? styles.disabled : ''}`}
              onClick={() => sliderRef.current?.slickNext()}
              disabled={isNextDisabled}
              aria-label="Next"
            >
              <img src={rightArr} alt="Next" />
            </button>
          </div>
        </div>

        <div className={styles.sliderWrap}>
          <Slider ref={sliderRef} {...settings}>
            {items.map((product) => (
              <div key={product.id} className={styles.slide}>
                <ProductCard {...product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
