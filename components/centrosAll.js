import styles from '../styles/centros.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function CentrosAll() {
  return (
    
    <div className={styles.container}>

        <div>
            <h2 className={styles.h2}>ENCUENTRA TU CENTRO</h2>
        </div>

        <div className={styles.centros}>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/barcelona' className={styles.text}>
                <Image width={400} height={300} src='/images/barcelona.jpg' alt='barcelona' className={styles.text} />
            </Link>
                <div>
                    <Link legacyBehavior href='/centros/barcelona'>
                        <a><h3 className={styles.h3}>BARCELONA</h3></a>
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/madrid' className={styles.text}>
                <Image width={400} height={300} src='/images/madrid.jpg' alt='madrid' className={styles.text} />
            </Link>
                <div>
                    <Link legacyBehavior href='/centros/madrid'>
                        <a><h3 className={styles.h3}>MADRID</h3></a>
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/bilbao' className={styles.text}>
                <Image width={400} height={300} src='/images/bilbao.jpg' alt='bilbao' className={styles.text} />
            </Link>
                <div>
                    <Link legacyBehavior href='/centros/bilbao'>
                        <a><h3 className={styles.h3}>BILBAO</h3></a>
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/sevilla' className={styles.text}>
                <Image width={400} height={300} src='/images/sevilla.jpg' alt='sevilla' className={styles.text} />
            </Link>
                <div className={styles.cardContent}>
                    <Link legacyBehavior href='/centros/sevilla'>
                        <a><h3 className={styles.h3}>SEVILLA</h3></a>
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/valencia' className={styles.text}>
                <Image width={400} height={300} src='/images/valencia.jpg' alt='valencia' className={styles.text} />
            </Link>
                <div className={styles.cardContent}>
                    <Link legacyBehavior href='/centros/valencia'>
                        <a><h3 className={styles.h3}>VALENCIA</h3></a>
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/zaragoza' className={styles.text}>
                <Image width={400} height={300} src='/images/zaragoza.jpg' alt='zaragoza' className={styles.text} />
            </Link>
                <div className={styles.cardContent}>
                    <Link legacyBehavior href='/centros/zaragoza'>
                        <a><h3 className={styles.h3}>ZARAGOZA</h3></a>
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/santander' className={styles.text}>
                <Image width={400} height={300} src='/images/santander.jpg' alt='santander' className={styles.text} />
            </Link>
                <div className={styles.cardContent}>
                    <Link legacyBehavior href='/centros/santander'>
                        <a><h3 className={styles.h3}>SANTANDER</h3></a>
                    </Link>
                </div>
            </div>

            <div className={styles.card}>
            <Link legacyBehavior href='/centros/granada' className={styles.text}>
                <Image width={400} height={300} src='/images/granada.jpg' alt='granada' className={styles.text} />
            </Link>
                <div className={styles.cardContent}>
                    <Link legacyBehavior href='/centros/granada'>
                        <a><h3 className={styles.h3}>GRANADA</h3></a>
                    </Link>
                </div>
            </div>   
        </div>




        <div>
            <h2 className={styles.h2}>PRÓXIMAMENTE</h2>
        </div>


        <div className={styles.centros}>

        <div className={styles.card}>
            <Image width={400} height={300} src='/images/cadiz.jpg' alt='cadiz' />
            <div className={styles.cardContent}>
                <h3 className={styles.h3prox}>CÁDIZ</h3>
                <div>
                    <Link legacyBehavior href='/centros' className={styles.text}>
                        <p className={styles.p}> Marzo 2024 </p>
                    </Link>
                </div>
            </div>
        </div>


        <div className={styles.card}>
            <Image width={400} height={300} src='/images/coruna.jpg' alt='a coruña' />
            <div className={styles.cardContent}>
                <h3 className={styles.h3prox}>A CORUÑA</h3>
                <div>
                    <Link legacyBehavior href='/centros' className={styles.text}>
                        <p className={styles.p}> Junio 2024 </p>
                    </Link>
                </div>
            </div>
        </div>


        <div className={styles.card}>
            <Image width={400} height={300} src='/images/SanSebastian.jpg' alt='san sebastian' />
            <div className={styles.cardContent}>
                <h3 className={styles.h3prox}>SAN SEBASTIÁN</h3>
                <div>
                    <Link legacyBehavior href='/centros' className={styles.text}>
                        <p className={styles.p}> Septiembre 2024 </p>
                    </Link>
                </div>
            </div>
        </div>

        
        <div className={styles.card}>
            <Image width={400} height={300} src='/images/malaga2.jpg' alt='malaga' />
            <div className={styles.cardContent}>
                <h3 className={styles.h3prox}>MÁLAGA</h3>
                <div>
                    <Link legacyBehavior href='/centros' className={styles.text}>
                        <p className={styles.p}> Octubre 2024 </p>
                    </Link>
                </div>
            </div>
        </div>





        </div>
    </div>

  )
}
