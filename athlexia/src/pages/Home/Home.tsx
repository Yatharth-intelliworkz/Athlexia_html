import Button1 from '@/components/ui/Button1';
import Button2 from '@/components/ui/Button2';

// Assets
import heroImg from '@/assets/images/hero_banner.png';
import coachImg from '@/assets/images/find_coach.png';
import cartGif from '@/assets/images/gifs/shopping-cart.gif';

// CSS Modules
import heroStyles from './Hero.module.css';
import coachStyles from './Coach.module.css';

// Other homepage sections (lazy-loaded / imported later)
import Outdoor from '@/components/home/Outdoor';
import TopProducts from '@/components/home/TopProducts';
import TabProducts from '@/components/home/TabProducts';

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className={heroStyles.wrap}>
        <img src={heroImg} alt="Hero Banner" className={heroStyles.heroImg} />
        <div className={heroStyles.content}>
          <h1 className={heroStyles.title}>Find the right coach</h1>
          <p className="mt-3">
            Personalized training plans and expert guidance to take your game
            to the next level.
          </p>
          <div className={heroStyles.actions}>
            <Button1
              label="Find Coaches"
              iconSrc={cartGif}
              iconAlt="Cart"
              href="/coaches"
            />
            <Button2 label="Contact Supplier" href="javascript:void(0)" />
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC COMPONENT SECTIONS ================= */}
      <Outdoor />
      <TopProducts />
      <TabProducts />
      {/* ================= COACH SECTION ================= */}
      <section className={coachStyles.wrap}>
        <img src={coachImg} alt="Find Coach" className={coachStyles.img} />
        <div className={coachStyles.content}>
          <h2 className={coachStyles.title}>Gear up for greatness</h2>
          <p>
            Discover outdoor, indoor, and fitness essentials from Athlexia.
          </p>
          <Button1
            label="Explore Coaches"
            iconSrc={cartGif}
            iconAlt="Cart"
            href="/coaches"
          />
        </div>
      </section>
    </>
  );
}
