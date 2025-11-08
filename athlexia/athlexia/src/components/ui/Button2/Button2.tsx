import styles from './Button2.module.css';

type Button2Props = Readonly<{
  label: string;
  href?: string;             // optional navigation link
  onClick?: () => void;      // optional click handler (e.g., modal open)
  disabled?: boolean;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
}>;

/**
 * Reusable button that supports both `onClick` and `href`.
 * - Renders as a <button> element (no invalid DOM warnings)
 * - If `href` is provided, navigates via window.location
 * - If `onClick` is provided, executes before navigation
 */
export default function Button2({
  label,
  href,
  onClick,
  disabled = false,
  className,
  iconSrc,
  iconAlt = '',
}: Button2Props) {
  const classes = [styles.btn_2, className].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    // Execute onClick first (for modal or analytics)
    onClick?.();

    // Navigate if href provided
    if (href) {
      globalThis.location.href = href;
    }
  };

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      <span>{label}</span>
      {iconSrc && <img src={iconSrc} alt={iconAlt} />}
    </button>
  );
}
