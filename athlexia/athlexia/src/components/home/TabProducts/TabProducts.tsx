import styles from './TabProducts.module.css';

export default function TabProducts() {
  return (
    <section className={styles.section}>
      <div className="container-fluid">
        <div className={styles.head}>
          <h2 className={styles.title}>Shop by Sports</h2>
          <ul className={styles.nav} role="tablist">
            <li className={styles.navItem}><a className={`${styles.navLink} ${styles.navLinkActive}`} href="#">All</a></li>
            <li className={styles.navItem}><a className={styles.navLink} href="#">Cricket</a></li>
            <li className={styles.navItem}><a className={styles.navLink} href="#">Badminton</a></li>
            <li className={styles.navItem}><a className={styles.navLink} href="#">Football</a></li>
          </ul>
        </div>

        <div className={styles.body}>
          <p className={styles.placeholder}>Tab content placeholder</p>
        </div>
      </div>
    </section>
  );
}
