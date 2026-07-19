import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({ href, children, variant = 'primary', external = false }) {
  const className = `${styles.btn} ${styles[variant]}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}
