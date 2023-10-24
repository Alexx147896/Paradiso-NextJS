import styles from '../styles/instalaciones.module.css'
import Image from 'next/image'


export default function Instalaciones() {
  return (


    <div className={styles.container}>

        <div className={styles.card}>
            <div>
                <Image width={120} height={100} src='/iconos/superficie-icon.svg' alt='superficie' className={styles.text} />
                <p>5.800 M²</p>
            </div>
        </div>

        
        <div className={styles.card}>
            <div>
                <Image width={120} height={100} src='/iconos/eliptica-icon.svg' alt='sala fitness' className={styles.text} />
                <p>Sala de Fitness</p>
            </div>
        </div>


        <div className={styles.card}>
            <div>
                <Image width={120} height={100} src='/iconos/sala-pilates-icon.svg' alt='sala pilates' className={styles.text} />
                <p>Sala de Pilates</p>
            </div>
        </div>

                <div className={styles.card}>
            <div>
                <Image width={120} height={100} src='/iconos/spinning-icon.svg' alt='spinning' className={styles.text} />
                <p>Sala de Spindir</p>
            </div>
        </div>


        <div className={styles.card}>
            <div>
                <Image width={120} height={100} src='/iconos/sala-fitness-icon.svg' alt='cross training' className={styles.text} />
                <p>Cross Training</p>
            </div>
        </div>

        <div className={styles.card}>
            <div>
                <Image width={120} height={100} src='/iconos/espai-termoludic-icon.svg' alt='zona de aguas' className={styles.text} />
                <p>Zona de Aguas</p>
            </div>
        </div>

        <div className={styles.card}>
            <div>
                <Image width={120} height={100} src='/iconos/wifi-icon.svg' alt='sala fitness' className={styles.text} />
                <p>Zona WI-FI</p>
            </div>
        </div>
    </div> // container

  )
}


