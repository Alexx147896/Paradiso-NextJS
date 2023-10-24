import styles from '../styles/pricing.module.css'

export default function Pricing() {
  return (
    
    <>


    
    <div className={styles.container}>

    <div>
        <h2 className={styles.h2}>ELIGE TU PLAN</h2>
    </div>


            <div className={styles.cardContainer}>

            <div className={styles.cardContent}>
                    <h3 className={styles.h3}>MENSUAL</h3>
                    <h3 className={styles.h3price}>$32</h3>
                    <div>
                        <p className={styles.p}> Acceso a sala de musculación </p>
                        <p className={styles.p}> Acceso a sala de pilates </p>
                        <p className={styles.p}> Actividades dirigidas </p>
                        <p className={styles.p}> Rutina personalizada </p>
                        <p className={styles.p}> Entrenador personal </p>
                        <p className={styles.promo}> Sin Permanencia </p>
                    </div>
                </div>

                <div className={styles.cardContent}>
                    <h3 className={styles.h3}>3 MESES</h3>
                    <h3 className={styles.h3price}>$80</h3>
                    <div>
                        <p className={styles.p}> Acceso a sala de musculación </p>
                        <p className={styles.p}> Acceso a sala de pilates </p>
                        <p className={styles.p}> Actividades dirigidas </p>
                        <p className={styles.p}> Rutina personalizada </p>
                        <p className={styles.p}> Entrenador personal </p>
                        <p className={styles.promo}> Ahorra un 5% </p>
                    </div>
                </div>

                <div className={styles.cardContent}>
                    <h3 className={styles.h3}>6 MESES</h3>
                    <h3 className={styles.h3price}>$170</h3>
                    <div>
                        <p className={styles.p}> Acceso a sala de musculación </p>
                        <p className={styles.p}> Acceso a sala de pilates </p>
                        <p className={styles.p}> Actividades dirigidas </p>
                        <p className={styles.p}> Rutina personalizada </p>
                        <p className={styles.p}> Entrenador personal </p>
                        <p className={styles.promo}> Ahorra un 10% </p>
                    </div>
                </div>

                <div className={styles.cardContent}>
                    <h3 className={styles.h3}>12 MESES</h3>
                    <h3 className={styles.h3price}>$320</h3>
                    <div>
                        <p className={styles.p}> Acceso a sala de musculación </p>
                        <p className={styles.p}> Acceso a sala de pilates </p>
                        <p className={styles.p}> Actividades dirigidas </p>
                        <p className={styles.p}> Rutina personalizada </p>
                        <p className={styles.p}> Entrenador personal </p>
                        <p className={styles.promo}> Ahorra un 20% </p>
                    </div>
                </div>
         </div> 
    </div>
    






    </>
  )
}
