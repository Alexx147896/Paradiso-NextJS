import Image from "next/image"
import styles from '../styles/heroImage.module.css'

export default function HeroImage() {
  return (
    <div className={styles.imageContainer}>
        <Image src='/images/banner.jpg' alt="banner" width={1500} height={800} />
        <div className={styles.caption}><h1>ÚNETE AL PARAÍSO DEL FITNESS</h1></div>
    </div>

  )
}
