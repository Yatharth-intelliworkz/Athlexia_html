import styles from './GifGrid.module.css';

export type GifItem = {
  src: string;
  alt: string;
  label: string;
};

type ContainerType = 'container' | 'container-fluid';

type GifGridProps = Readonly<{
  items: GifItem[];                     // ← pass different arrays per page
  container?: ContainerType;            // defaults to 'container'
  className?: string;                   // optional extra class on <section>
  size?: number;                        // circle size in px (default 200)
}>;

/**
 * Reusable GIF grid. Only `items` changes per page.
 * No data fetching—API-ready: pass server image URLs later.
 */
export default function GifGrid({
  items,
  container = 'container',
  className,
  size = 200,
}: GifGridProps) {
  return (
    <section className={`mt-75 ${className ?? ''}`}>
      <div className={container}>
        <div className={styles.outdoor_wrapper}>
          {items.map((it, idx) => (
            <div key={`${it.alt}-${idx}`} className={styles.outdoor_box}>
              <div
                className={styles.outdoor_img}
                style={{ width: size, height: size }}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  width={size}
                  height={size}
                />
              </div>
              <h4 className={styles.outdoor_txt}>{it.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
