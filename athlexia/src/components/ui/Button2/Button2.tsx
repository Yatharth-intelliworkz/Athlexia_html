import styles from './Button2.module.css';

type Button2Props = Readonly<{
  label: string;
  href?: string;
}>;

export default function Button2({
  label,
  href = 'javascript:void(0)',
}: Button2Props) {
  return (
    <a href={href} className={styles.btn_2}>
      {label}
    </a>
  );
}
