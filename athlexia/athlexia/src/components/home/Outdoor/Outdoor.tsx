import styles from './Outdoor.module.css';

export default function Outdoor() {
  return (
    <section className={styles.section}>
      <div className="container-fluid">
        <div className={styles.header}>
          <h2 className={styles.title}>Outdoor Sports</h2>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.img}>IMG</div>
            <p>Camping</p>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>IMG</div>
            <p>Hiking</p>
          </div>
          <div className={styles.box}>
            <div className={styles.img}>IMG</div>
            <p>Climbing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
