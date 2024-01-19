import Link from 'next/link';
import styles from './Navbar.module.scss';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
          <img src="/assets/images/logo.svg" draggable={false} />
      </Link>
      <div className={styles.actions}>
        <a>Почему мы?</a>
        <a>Продукты</a>
        <a>Связаться с нами</a>
        <a>Доставка</a>
      </div>
    </div>
  );
}
