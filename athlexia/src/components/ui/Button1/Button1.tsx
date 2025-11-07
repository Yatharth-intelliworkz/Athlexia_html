import styles from './Button1.module.css';

type Button1Props = Readonly<{
  label: string;
  href?: string;
  iconSrc?: string;
  iconAlt?: string;
}>;

export default function Button1({
  label,
  href = 'javascript:void(0)',
  iconSrc,
  iconAlt = '',
}: Button1Props) {
  return (
    <a href={href} className={styles.btn_1}>
      {label}
      {iconSrc && <img src={iconSrc} alt={iconAlt} />}
    </a>
  );
}
