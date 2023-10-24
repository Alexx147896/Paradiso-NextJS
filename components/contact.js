import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    
    <form>

      <div className={styles.title}>
        <h1>¿Quieres más información?</h1>
        <p>Rellena el siguiente formulario</p>
      </div>

      <div className={styles.container}>

        <input className={styles.input} placeholder='Nombre'></input>
        <input className={styles.input} placeholder='Apellidos'></input>
        <input className={styles.input} placeholder='Email'></input>
        <input className={styles.input} placeholder='Teléfono'></input>
        <textarea className={`${styles.input} ${styles.textarea}`} placeholder='Mensaje'></textarea>
        <button className={styles.button}>Enviar</button>

      </div>


      </form>

  )
}
