import './Skills.css'

// Skill data — each entry uses a short text glyph as an icon placeholder.
// Swap `icon` for an actual icon component/image when available.
const SKILLS = [
  { name: 'HTML', icon: '</>' },
  { name: 'CSS', icon: '#' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'React', icon: '⚛' },
  { name: 'Git', icon: '⑂' },
  { name: 'GitHub', icon: '◐' },
  { name: 'Python', icon: 'Py' },
  { name: 'Java', icon: '☕' },
]

/**
 * Skills
 * Displays a responsive grid of skill cards, each with a placeholder
 * icon, the skill name, and a hover-lift animation.
 */
function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-eyebrow">What I work with</p>
        <h2 className="section-heading">Skills</h2>
        <p className="section-subtext">
          Technologies and tools I use regularly to design, build, and ship
          projects.
        </p>

        <div className="skills__grid">
          {SKILLS.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card__icon" aria-hidden="true">
                {skill.icon}
              </div>
              <p className="skill-card__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
