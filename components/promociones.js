import Image from "next/image"
import Link from "next/link"
import styles from "../styles/promociones.module.css"



export default function Promociones() {
  return (
    <div className={styles.container}>
        <div>
            <h2 className={styles.h2}>¡DESCUBRE TODO LO QUE TENEMOS PREPARADO PARA TI!</h2>
            <p className={styles.promo}>DESCUENTOS, PROMOCIONES Y MUCHO MÁS</p>
        </div>


        <div className={styles.promoGrid}>

        <div className={styles.card}>
            <Image width={400} height={300} src='/images/entrenador-personal.jpg' alt='entrenador personal' />
            <div className={styles.cardContent}>
                <h3 className={styles.h3prox}>PROMOCIONES EN PACKS DE ENTRENADOR PERSONAL</h3>
                <div>
                    <Link legacyBehavior href='/centros' className={styles.text}>
                        <p className={styles.p}> Nuevos packs en promoción de entrenamiento personal para que consigas tus objetivos </p>
                    </Link>
                </div>
            </div>
        </div>


        <div className={styles.card}>
            <Image width={400} height={300} src='/images/small-group-training.jpg' alt='small group training' />
            <div className={styles.cardContent}>
                <h3 className={styles.h3prox}>PACK DE 2 SESIONES DE SMALL GROUP TRAINING</h3>
                <div>
                    <Link legacyBehavior href='/centros' className={styles.text}>
                        <p className={styles.p}> ¡Entrena en grupos reducidos de menos de 6 personas y motívate al máximo!  </p>
                    </Link>
                </div>
            </div>
        </div>


        <div className={styles.card}>
            <Image width={400} height={300} src='/images/estetica.jpg' alt='estetica y wellness' />
            <div className={styles.cardContent}>
                <h3 className={styles.h3prox}>PROMOCIONES EN PACKS DE ESTÉTICA Y WELLNESS</h3>
                <div>
                    <Link legacyBehavior href='/centros' className={styles.text}>
                        <p className={styles.p}> Tratamiento facial, diatérmia y depilación laser diodo con descuentos de hasta un 20% </p>
                    </Link>
                </div>
            </div>
        </div>

        



        </div>
    </div>
  )
}
