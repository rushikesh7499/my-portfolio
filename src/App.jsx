import "./App.css";

function App() {
  const projects = [
    {
      title: "Smart Health Monitoring System",
      description:
        "A Smart India Hackathon project focused on early detection and monitoring of water-borne diseases using modern technology.",
      tech: ["TypeScript", "React", "HealthTech", "AI/ML"],
      github: "https://github.com/rushikesh7499/Final-Project",
    },
    {
      title: "Final Project",
      description:
        "A modern web application developed using JavaScript with a focus on creating a responsive and useful user experience.",
      tech: ["JavaScript", "React", "CSS"],
      github: "https://github.com/rushikesh7499/Final-Project-012",
    },
    {
      title: "Wanderlust",
      description:
        "A full-stack web application for exploring and managing travel/property listings.",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/rushikesh7499/Wonderlust",
    },
  ];

  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">
          Welcome to My Profile<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">HELLO, I'M</p>

          <h1>
            Rushikesh <span>👋</span>
          </h1>

          <h2>Full Stack Developer</h2>
            <h2>DSA In Java</h2>

          <p className="hero-text">
            B.Tech student and developer passionate about building
            modern web applications, solving programming problems
            and learning new technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>

          </div>

          
        </div>

        <div className="hero-image">

          <div className="profile-circle">
            <div className="profile-text">
              <img src="My image.jpeg" alt="profile" />
            </div>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <p className="section-title">
          ABOUT ME
        </p>

        <h2 className="heading">
          Who I Am
        </h2>

        <div className="about-content">

          <div className="about-text">

            <p>
              Hi, I'm <strong>Rushi</strong>, a B.Tech student
              at <strong>Samrat Ashok Rajkiya Engineering College Mirzapur</strong>.
            </p>

            <p>
              I enjoy developing web applications and solving
              programming problems. I work with technologies such
              as Java, JavaScript, React, Node.js, Express and MongoDB.
            </p>

            <p>
              I am continuously improving my development and
              problem-solving skills and looking forward to
              building useful real-world applications.
            </p>

          </div>

          <div className="about-card">

            <div className="card-icon">
              🎓
            </div>

            <h3>
              B.Tech Student
            </h3>

            <p>
             Samrat Ashok Rajkiya Engineering College
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <p className="section-title">
          MY SKILLS
        </p>

        <h2 className="heading">
          Technologies I Work With
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-dot"></div>

              {skill}

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <p className="section-title">
          MY WORK
        </p>

        <h2 className="heading">
          Featured Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-top">

                <span className="project-number">
                  0{index + 1}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  GitHub ↗
                </a>

              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tech">

                {project.tech.map((item, i) => (

                  <span key={i}>
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        <div className="all-projects">

          <a
            href="https://github.com/rushikesh7499"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            View All GitHub Projects ↗
          </a>

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section education">

        <p className="section-title">
          EDUCATION
        </p>

        <h2 className="heading">
          My Education
        </h2>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>

            <p className="education-degree">
              Bachelor of Technology
            </p>

            <h3>
              Information Technology
            </h3>

            <p>
              Samrat Ashok Rajkiya Engineering College Mirzapur
            </p>

            <span>
              Engineering Student
            </span>

          </div>

        </div>

      </section>

      {/* CONTACT */}
     {/* CONTACT */}
<section id="contact" className="section contact">

  <p className="section-title">
    GET IN TOUCH
  </p>

  <h2 className="heading">
    Let's Work Together
  </h2>

  <p>
    I'm always interested in learning, building projects
    and connecting with other developers.
  </p>

  <div className="contact-info">

    <div className="contact-item">
      <span>📧</span>

      <div>
        <h3>Email</h3>
        <a href="mailto:rushikeshnemte@gmail.com">
          rushikeshnemte@gmail.com
        </a>
      </div>
    </div>

    <div className="contact-item">
      <span>📱</span>

      <div>
        <h3>Phone</h3>
        <a href="tel:+917499346797">
          +91 7499346797
        </a>
      </div>
    </div>

  </div>

  <div className="contact-buttons">

    <a
      href="mailto:rushikeshnemte@gmail.com"
      className="btn primary"
    >
      Email Me
    </a>

    <a
      href="tel:+917499346797"
      className="btn secondary"
    >
      Call Me
    </a>

    <a
      href="https://github.com/rushikesh7499"
      target="_blank"
      rel="noreferrer"
      className="btn secondary"
    >
      GitHub ↗
    </a>

  </div>

      </section>

      {/* FOOTER */}
      {/* <footer>

        
        

        <div className="footer-links">

          <a
            href="https://github.com/rushikesh7499"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          
          <a
            href="https://www.linkedin.com/in/rushikesh-nemte/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </footer> */}

    </div>
  );
}

export default App;