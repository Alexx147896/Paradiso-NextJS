import Image from "next/image"
import styles from "../styles/trabajo.module.css"




export default function Trabajar() {
  return (
   
   <>
   
    <div className={styles.imageContainer}>
            <Image src='/images/banner-trabajo.jpg' alt="banner trabajo" width={1500} height={800} />
        </div>

        <div className={styles.title}>
            <h2>OFERTAS ACTUALES</h2>
        </div>

        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.offerTitle}>
                    <h3>ENTRENADOR/A PERSONAL</h3>
                    <p>Imprescindible Grado en Ciencias de la Actividad Física y el Deporte o CFGS de Actividades Físicodeportivas</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.offerTitle}>
                    <h3>NUTRICIONISTA DEPORTIVO</h3>
                    <p>Imprescindible Grado en Nutrición y estar inscrito en el Colegio de Nutricionistas</p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.offerTitle}>
                    <h3>PROFESOR/A DE YOGA</h3>
                    <p>Imprescindible tener formación en yoga y estar inscrito en el ROPEC </p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.offerTitle}>
                    <h3>TÉCNICO/A DE ACTIVIDADES DIRIGIDAS</h3>
                    <p>Imprescindible Grado en Ciencias de la Actividad Física y el Deporte o CFGS de Actividades Físicodeportivas</p>
                </div>
            </div>

            <div className={styles.cv}>
                <p>Envianos tu CV a <span>trabajo@paradiso.com</span> indicando el puesto deseado</p>
            </div>



        </div>
    
   </>

  )
}
