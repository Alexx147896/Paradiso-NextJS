import styles from '../styles/contactAlta.module.css'

export default function Contact() {
  return (
    
    <form>

      <div className={styles.title}>
        <h1>Date de Alta</h1>
        <p>Rellena el siguiente formulario y nos pondremos en contacto contigo</p>
      </div>

      <div className={styles.container}>

        <input className={styles.input} placeholder='Nombre'></input>
        <input className={styles.input} placeholder='Apellidos'></input>
        <input className={styles.input} placeholder='Email'></input>
        <input className={styles.input} placeholder='Teléfono'></input>

        <select className={styles.input}>
            <option value="" disabled selected>Centro</option>
            <option value="barcelona">Barcelona</option>
            <option value="madrid">Madrid</option>
            <option value="bilbao">Bilbao</option>
            <option value="sevilla">Sevilla</option>
            <option value="valencia">Valencia</option>
            <option value="zaragoza">Zaragoza</option>
            <option value="santander">Santander</option>
            <option value="granada">Granada</option>
        </select>

        <textarea className={`${styles.input} ${styles.textarea}`} placeholder='Quiero darme de alta'></textarea>
        <button className={styles.button}>Enviar</button>

      </div>


      </form>

  )
}
