import Slider from 'react-slick';
import styles from './TopProducts.module.css';

export default function TopProducts() {
  const settings: import('react-slick').Settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992,  settings: { slidesToShow: 2 } },
      { breakpoint: 576,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.section}>
      <div className="container-fluid">
        <div className={styles.header}>
          <h2 className={styles.title}>Top Products</h2>
        </div>

        <div className={styles.slider}>
          <Slider {...settings}>
            {[1,2,3,4,5,6].map((i) => (
              <div key={i}>
                <div className={styles.slide}>
                  <img src={`/images/tp/tp_${i}.png`} alt={`Product ${i}`} className={styles.prodImg} />
                  <p className={styles.name}>Product {i}</p>
                  <p className={styles.price}>₹ 1,999</p>
                  <div className={styles.cta}>
                    <a className="btn_2" href="javascript:void(0)">Add to Cart</a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
