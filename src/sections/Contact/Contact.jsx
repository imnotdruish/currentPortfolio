import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form method="POST" action="https://getform.io/f/pamqzgla">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Name" 
            required 
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email" 
            required 
          />
          <input type="hidden" name="_subject" value="Web Development Inquiry" />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea 
            name="message" 
            id="message" 
            placeholder="Message" 
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  )
}

export default Contact