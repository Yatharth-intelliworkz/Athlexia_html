import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

// swap these with your real assets
import ftLogo from '@/assets/images/footer/ft_logo.svg';
import ftLinkedin from '@/assets/images/footer/ft_linkedin.svg';
import ftX from '@/assets/images/footer/ft_x.svg';
import ftFb from '@/assets/images/footer/ft_fb.svg';
import ftInsta from '@/assets/images/footer/ft_insta.svg';
import playstore from '@/assets/images/footer/playstore.svg';
import appstore from '@/assets/images/footer/appstore.svg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className={styles.ft_wrapper}>
          {/* left */}
          <div className={styles.left_ft}>
            <Link to="/">
              <img src={ftLogo} alt="Athlexia" className="img-fluid" />
            </Link>

            <p>
              Lorem ipsum dolor sit amet consectetur. Diam lorem auctor neque laoreet id massa purus duis ut.
              Adipiscing cras eu ultricies diam. Sed eget facilisis accumsan integer. Suscipit aliquam ut varius
              faucibus ipsum donec felis gravida. Nulla feugiat scelerisque vel amet cursus nulla imperdiet.
              Suspendisse magna justo posuere vel phasellus sit quisque tortor sit. Est netus eleifend at feugiat
              arcu laoreet. Felis sed purus placerat fringilla arcu. In facilisis est eu diam id imperdiet quam
              dictumst.
            </p>

            <div className={styles.ft_social}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={ftLinkedin} alt="LinkedIn" className="img-fluid" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <img src={ftX} alt="X" className="img-fluid" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={ftFb} alt="Facebook" className="img-fluid" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={ftInsta} alt="Instagram" className="img-fluid" />
              </a>
            </div>
          </div>

          {/* center */}
          <div className={styles.center_ft}>
            <div>
              <h4 className={styles.ft_head}>Categories</h4>
              <ul className={styles.ft_menu}>
                <li><Link to="/outdoor-sports">Outdoor Sports</Link></li>
                <li><Link to="/indoor-games">Indoor Games</Link></li>
                <li><Link to="/fitness">Fitness Sports &amp; Yoga</Link></li>
                <li><Link to="/water-sports">Water Sports</Link></li>
                <li><Link to="/racket-sports">Racket Sports</Link></li>
                <li><Link to="/team-sports">Team Sports</Link></li>
                <li><Link to="/running-cycling">Running &amp; Cycling</Link></li>
                <li><Link to="/roller-sports">Roller Sports</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={styles.ft_head}>About Us</h4>
              <ul className={styles.ft_menu}>
                <li><Link to="/about">Who we are</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/help">Help</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={styles.ft_head}>Legal</h4>
              <ul className={styles.ft_menu}>
                <li><Link to="/return-policy">Return Policy</Link></li>
                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className={styles.right_ft}>
            <h4 className={styles.ft_head}>Download App</h4>
            <p>Get real time updates on our App</p>
            <div className={styles.mob_store}>
              <a href="#" aria-label="Google Play">
                <img src={playstore} alt="Play Store" className="img-fluid" />
              </a>
              <a href="#" className="ms-3" aria-label="App Store">
                <img src={appstore} alt="App Store" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.cpy}>
          © {year} Athlexia.
        </div>
      </div>
    </footer>
  );
}
