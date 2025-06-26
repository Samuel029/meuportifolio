const projetos = [
    {
      id: 1,
      nome: "Site Institucional",
      descricao:
        "Um site moderno e responsivo para apresentação da empresa, com design clean e navegação intuitiva.",
      link: "#",
    },
    {
      id: 2,
      nome: "Aplicativo de Tarefas",
      descricao:
        "App para organização pessoal com funcionalidades de criação, edição e conclusão de tarefas.",
      link: "#",
    },
  ];
  
  function Projects() {
    return (
      <section
        id="projects"
        aria-labelledby="projects-title"
        style={styles.section}
      >
        <h2 id="projects-title" style={styles.title}>Projetos</h2>
        <ul style={styles.list}>
          {projetos.map(({ id, nome, descricao, link }) => (
            <li key={id} style={styles.item}>
              <h3 style={styles.projectName}>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    {nome}
                  </a>
                ) : (
                  nome
                )}
              </h3>
              <p style={styles.description}>{descricao}</p>
            </li>
          ))}
        </ul>
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
    list: {
      listStyleType: "none",
      paddingLeft: 0,
    },
    item: {
      marginBottom: "1.5rem",
    },
    projectName: {
      margin: 0,
      fontSize: "1.25rem",
      color: "#ffffff",
    },
    description: {
      marginTop: "0.3rem",
      fontSize: "1rem",
      color: "#e0e0e0", // texto com contraste mais suave
    },
    link: {
      color: "#ffffff",
      textDecoration: "underline",
    },
  };
  
  export default Projects;