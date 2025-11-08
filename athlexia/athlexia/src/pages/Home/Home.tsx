// UI
import Button1 from '@/components/ui/Button1';
import LogoSlider from '@/components/ui/LogoSlider';
import GifGrid, { type GifItem } from '@/components/ui/GifGrid';
import ProductSliderCard from '../../components/ProductSlider';
import type { ProductCardProps } from '../../components/ProductCard'; // needs index.ts

// Assets
import heroImg from '@/assets/images/hero_banner.png';
import coachImg from '@/assets/images/find_coach.png';
import cartGif from '@/assets/images/gifs/shopping-cart.gif';

// logos
import nb from '@/assets/images/logos/new-balance.svg';
import puma from '@/assets/images/logos/puma.svg';
import columbia from '@/assets/images/logos/columbia.svg';
import adidas from '@/assets/images/logos/adidas.svg';
import peloton from '@/assets/images/logos/peloton.svg';
import reebok from '@/assets/images/logos/reebok.svg';
import asics from '@/assets/images/logos/asics.svg';
import fila from '@/assets/images/logos/fila.svg';

// gifs
import gifFootball from '@/assets/images/gifs/football-player.gif';
import gifTreadmill from '@/assets/images/gifs/treadmill.gif';
import gifTennis from '@/assets/images/gifs/tennis-racket.gif';
import gifRoller from '@/assets/images/gifs/rollerskate.gif';
import gifWater from '@/assets/images/gifs/water-skiing.gif';
import gifCycling from '@/assets/images/gifs/cycling.gif';

// Product demo image
import tpImg from '@/assets/images/tp_img.png';

// CSS Modules
import heroStyles from './Hero.module.css';
import coachStyles from './Coach.module.css';

// -------------------------------------------
// Page-scoped data (mock; API will replace)
// -------------------------------------------
const homeLogos = [
  { src: nb, alt: 'New Balance' },
  { src: puma, alt: 'Puma' },
  { src: columbia, alt: 'Columbia' },
  { src: adidas, alt: 'Adidas' },
  { src: peloton, alt: 'Peloton' },
  { src: reebok, alt: 'Reebok' },
  { src: asics, alt: 'Asics' },
  { src: fila, alt: 'Fila' },
];

const homeGifs: GifItem[] = [
  { src: gifFootball, alt: 'Outdoor Sports', label: 'Outdoor Sports' },
  { src: gifTreadmill, alt: 'Fitness & Yoga', label: 'Fitness & Yoga' },
  { src: gifTennis, alt: 'Racket Sports', label: 'Racket Sports' },
  { src: gifRoller, alt: 'Roller Sports', label: 'Roller Sports' },
  { src: gifWater, alt: 'Water Sports', label: 'Water Sports' },
  { src: gifCycling, alt: 'Running & Cycling', label: 'Running & Cycling' },
];

const topProducts: ProductCardProps[] = [
  {
    id: 'p1',
    image: { src: tpImg, alt: '8 Ft Air Hockey Table' },
    title: '8 Ft Air Hockey Table',
    priceText: '₹ 35,000/Piece',
    company: 'KD Sports & Fitness',
    location: { city: 'Ahmedabad', area: 'Jahangirpura' },
  },
  {
    id: 'p2',
    image: { src: tpImg, alt: 'Treadmill X500' },
    title: 'Treadmill X500',
    priceText: '₹ 65,000/Piece',
    company: 'FitHub India',
    location: { city: 'Mumbai', area: 'Andheri East' },
  },
  {
    id: 'p3',
    image: { src: tpImg, alt: 'Professional Tennis Racket' },
    title: 'Professional Tennis Racket',
    priceText: '₹ 8,500/Piece',
    company: 'RacketPro Sports',
    location: { city: 'Pune', area: 'Kalyani Nagar' },
  },
  {
    id: 'p4',
    image: { src: tpImg, alt: '8 Ft Air Hockey Table' },
    title: '8 Ft Air Hockey Table',
    priceText: '₹ 35,000/Piece',
    company: 'KD Sports & Fitness',
    location: { city: 'Ahmedabad', area: 'Jahangirpura' },
  },
  {
    id: 'p5',
    image: { src: tpImg, alt: 'Treadmill X500' },
    title: 'Treadmill X500',
    priceText: '₹ 65,000/Piece',
    company: 'FitHub India',
    location: { city: 'Mumbai', area: 'Andheri East' },
  },
  {
    id: 'p6',
    image: { src: tpImg, alt: 'Professional Tennis Racket' },
    title: 'Professional Tennis Racket',
    priceText: '₹ 8,500/Piece',
    company: 'RacketPro Sports',
    location: { city: 'Pune', area: 'Kalyani Nagar' },
  },
  {
    id: 'p7',
    image: { src: tpImg, alt: 'Professional Tennis Racket' },
    title: 'Professional Tennis Racket',
    priceText: '₹ 8,500/Piece',
    company: 'RacketPro Sports',
    location: { city: 'Pune', area: 'Kalyani Nagar' },
  },
];

// -------------------------------------------
// Component (single default export only)
// -------------------------------------------
export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={heroStyles.hero}>
        <div className="container-fluid">
          <img src={heroImg} alt="Hero Banner" className="img-fluid" />
          <div className={heroStyles.content}>
            <h1 className="spartan_title_48 text-white">
              Find the right coach <br /> Fitness & Health Suppliers
            </h1>
            <p className="text-white">
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
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC SECTIONS ================= */}
      <LogoSlider items={homeLogos} />
      <GifGrid items={homeGifs} container="container" size={180} />

      <ProductSliderCard
        title="Top Products"
        items={topProducts}
        slidesToShow={5}
        infinite={false}
        autoplay={false}
      />

      {/* ================= COACH ================= */}
      <section className='mt-75'>
        <div className="container-fluid">
          <div className={coachStyles.coach_wrapper}>
            <img src={coachImg} alt="Find Coach" className="img-fluid" />
            <div className={coachStyles.coach_content}>
              <h2 className="spartan_title_48">
                Hire Expert Cricket Coaches for Your Academy or Team
              </h2>
              <p className="text-white">
                Discover outdoor, indoor, and fitness essentials from Athlexia.
              </p>
              <Button1
                label="Find Coaches"
                iconSrc={cartGif}
                iconAlt="Cart"
                href="/coaches"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
