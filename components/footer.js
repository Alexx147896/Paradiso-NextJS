import * as Unicons from '@iconscout/react-unicons';
import styles from '../styles/footer.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>

        <div className={styles.footerContainer}>

            <div className={styles.socialIcons}>
                <ul>
                    <li> <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer" title='facebook'> <Unicons.UilFacebookF size="40" />  </a>  </li>
                    <li> <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer" title='twitter'> <Unicons.UilTwitter size="40" />  </a>  </li>
                    <li> <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer" title='instagram'> <Unicons.UilInstagram size="40" />  </a>  </li>
                    <li> <a href='https://www.telegram.com' target="_blank" rel="noopener noreferrer" title='telegram'> <Unicons.UilTelegram size="40" />  </a>  </li>
                </ul>
            </div>

            <div className={styles.newsletterContainer}>
                <p className={styles.newsletterTitle}>APÚNTATE A LA NEWSLETTER</p>
                <p>Recibe noticias sobre actividades dirigidas, eventos, promociones y mucho más</p>
            </div>

            <div className={styles.inputContainer}>
                <input type='email' placeholder='email'></input>
                <button>ENVIAR</button>
            </div>

            <div className={styles.linkContainer}>
                <Link legacyBehavior href='/' >
                    <a>INICIO</a>
                </Link>

                <p className={styles.dot}>·</p>

                <Link legacyBehavior href='/trabajo' >
                    <a>TRABAJA EN PARADISO</a>
                </Link>

                <p className={styles.dot}>·</p>

                <Link legacyBehavior href='/privacidad' >
                    <a>POLÍTICA DE PRIVACIDAD</a>
                </Link>

            </div>

            <div className={styles.copyright}>
                <p> Website made by <a href='https://www.alexhernan.com' target="_blank" rel="noopener noreferrer"><span>Alex Hernán</span> </a>  {new Date().getFullYear()} © </p>
            </div>

        </div>

    </footer>
  )
}
