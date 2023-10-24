import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ContactAlta from '../../components/contactAlta';
import styles from '../../styles/layoutDetails.module.css';
import Image from 'next/image';



export default function ZaragozaLayout() {
  return (
    <>

    <Header />
    <Navbar />

<div>


  <div className={styles.container}>

  <div className={styles.imageContainer}>
        <Image src='/images/barcelona-banner-2.jpg' alt="banner" width={1800} height={720} />
        <div className={styles.caption}><h1>ZARAGOZA</h1></div>
    </div>

    <div className={styles.containerInfo}>

      <div className={styles.infoTitle}>
        <p>Dirección</p>
       </div>

       <div className={styles.infoText}>
        <p>Calle de Francisco de Vitoria 28 , Zaragoza</p>
       </div>


       <div className={styles.infoTitle}>
        <p>Horarios</p>
       </div>

       <div className={styles.infoText}>
        <p>Laborables:</p>
        <p>07:00h - 23:00h</p>
        <p>Fines de semana y festivos:</p>
        <p>08:00h - 21:00h</p>
        <br></br>
        <p>Horarios especiales en Navidad y Semana Santa</p>
       </div>

    </div>
  </div>
</div>








    <ContactAlta />
    <Footer />

</>
  );
}



