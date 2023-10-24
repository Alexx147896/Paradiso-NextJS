import Link from 'next/link';
import styles from '../styles/navbar.module.css'; // Import the CSS module

export default function Navbar() {
  return (
    <nav className={styles.navbar}> 
      <Link legacyBehavior href='/'>
        <a>INICIO</a>
      </Link>
      <Link legacyBehavior href='/centros'>
        <a>CENTROS</a>
      </Link>
      <Link legacyBehavior href='/planes'>
        <a>PRECIOS Y ALTA</a>
      </Link>
    </nav>
  );
}
