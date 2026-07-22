import './About.css'

// Data for the "at a glance" cards — keeping content as data makes the
// section easy to extend without touching the JSX structure.
const ABOUT_CARDS = [
  {
    title: 'Education',
    body: "Pursuing a Bachelor's degree in Computer Science, with a focus on web development, data structures, and artificial intelligence.",
  },
  {
    title: 'Interests',
    body: 'Frontend engineering, machine learning experiments, open-source contributions, and building small tools that solve everyday problems.',
  },
  {
    title: 'Career Goals',
    body: 'To grow into a well-rounded software engineer who builds accessible, performant products, and eventually specialize in applied AI.',
  },
]

/**
 * About
 * Introduces who Nishan is with a short biography and a set of
 * supporting info cards (education, interests, goals).
 */
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-eyebrow">Get to know me</p>
        <h2 className="section-heading">About Me</h2>
        <p className="section-subtext">
          A quick look at my background, what drives me, and where I'm
          headed next.
        </p>

        <div className="about__content">
          <p className="about__bio">
            I'm Nishan, a computer science student who loves turning ideas
            into working software. My journey started with curiosity about
            how websites are built, and it has grown into a genuine passion
            for frontend development and artificial intelligence. I enjoy the
            process of learning new tools, breaking down complex problems,
            and writing code that's both functional and easy to read.
            Outside of academics, I like experimenting with side projects
            that push me to learn something new — whether that's a UI
            framework, a machine learning model, or a developer workflow.
          </p>

          <div className="about__cards">
            {ABOUT_CARDS.map((card) => (
              <div className="about__card" key={card.title}>
                <h3 className="about__card-title">{card.title}</h3>
                <p className="about__card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
