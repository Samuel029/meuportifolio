function Contact() {
    return (
      <section
        id="contact"
        aria-labelledby="contact-title"
        style={styles.section}
      >
        <h2 id="contact-title" style={styles.title}>Contato</h2>
  
        <p style={styles.paragraph}>
          Estou sempre aberto a conversar, colaborar ou simplesmente trocar uma ideia.
        </p>
  
        <p style={styles.paragraph}>
          E-mail:{" "}
          <a href="mailto:eusamuelaugusto@email.com" style={styles.link}>
            eusamuelaugusto@email.com
          </a>
        </p>
  
        <p style={styles.paragraph}>
          LinkedIn:{" "}
          <a
            href="www.linkedin.com/in/samuel-augusto-8277b5326"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            www.linkedin.com/in/samuel-augusto-8277b5326

          </a>
        </p>
      </section>
    );
  }
  
  const styles = {
    section: {
      padding: "2rem",
      backgroundColor: "#0077cc", // fundo azul
      borderRadius: "8px",
      color: "#ffffff",
      maxWidth: "700px",
      margin: "2rem auto",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
    },
    title: {
      color: "#ffffff",
      marginBottom: "1.5rem",
      fontSize: "2rem",
    },
    paragraph: {
      fontSize: "1.125rem",
      lineHeight: "1.6",
      marginBottom: "1.2rem",
      color: "#e0e0e0",
    },
    link: {
      color: "#ffffff",
      textDecoration: "underline",
    },
  };
  
  export default Contact;