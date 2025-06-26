import React from "react";

function About() {
  return (
    <section id="about" aria-labelledby="about-title" style={styles.section}>
      <h2 id="about-title" style={styles.title}>Sobre Mim</h2>
      <p style={styles.paragraph}>
        Olá! Eu sou <strong>Samuel Augusto</strong>, um desenvolvedor Front-End
        apaixonado por tecnologia e por criar experiências digitais que façam a
        diferença na vida das pessoas.
      </p>
      <p style={styles.paragraph}>
        Adoro aprender coisas novas, enfrentar desafios e transformar ideias em
        soluções práticas e elegantes.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem",
    backgroundColor: "#0077cc", // fundo azul
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    maxWidth: "700px",
    margin: "2rem auto",
    color: "#ffffff", // textos brancos por padrão
  },
  title: {
    color: "#ffffff",
    marginBottom: "1rem",
    fontSize: "2rem",
  },
  paragraph: {
    color: "#e0e0e0", // cor mais suave para leitura
    fontSize: "1.125rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
};

export default About;
