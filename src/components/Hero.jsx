import './Hero.css'

/**
 * Hero
 * The landing/intro section. Contains the primary headline, a short
 * introduction, call-to-action buttons, and a profile image placeholder.
 */
function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="section-eyebrow">Welcome to my portfolio</p>
          <h1 className="hero__heading">
            Hi, I'm <span className="hero__highlight">Nishan</span>
          </h1>
          <p className="hero__subtitle">
            Computer Science Student | Frontend Developer | AI Enthusiast
          </p>
          <p className="hero__description">
            I enjoy building clean, user-friendly web applications and
            exploring how artificial intelligence can make everyday tools
            smarter. Currently sharpening my skills in frontend development
            while working on projects that combine solid engineering with
            thoughtful design.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          {/* Placeholder for profile image — replace src with a real photo */}
          <div className="hero__image-placeholder" role="img" aria-label="Profile photo placeholder">
            <span>NS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
