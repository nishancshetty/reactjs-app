import './Projects.css'

// Project data — update links/descriptions as real projects are ready.
const PROJECTS = [
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio built with React and Vite, featuring smooth scrolling, reusable components, and a dark, modern UI.',
    tech: ['React', 'Vite', 'CSS Grid'],
    github: 'https://github.com/your-username/portfolio-website',
    demo: 'https://your-portfolio-demo.example.com',
  },
  {
    title: 'E-commerce Website',
    description:
      'A full-featured storefront with product listings, a shopping cart, and a checkout flow, built with attention to performance and usability.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/your-username/ecommerce-website',
    demo: 'https://your-ecommerce-demo.example.com',
  },
  {
    title: 'AI Viva Chatbot',
    description:
      'An AI-powered chatbot that helps students prepare for viva examinations by generating and evaluating subject-specific questions.',
    tech: ['Python', 'Flask', 'OpenAI API'],
    github: 'https://github.com/your-username/ai-viva-chatbot',
    demo: 'https://your-chatbot-demo.example.com',
  },
]

/**
 * Projects
 * Showcases featured work as a responsive grid of cards. Each card
 * lists the tech stack used and links to the repo and live demo.
 */
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-eyebrow">Featured work</p>
        <h2 className="section-heading">Projects</h2>
        <p className="section-subtext">
          A selection of projects that reflect what I've been building and
          learning lately.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__tech" aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-card__actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
