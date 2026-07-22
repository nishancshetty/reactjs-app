import { useState } from 'react'
import './Contact.css'

// Direct contact details shown alongside the form
const CONTACT_LINKS = [
  { label: 'Email', value: 'nishan@example.com', href: 'mailto:nishan@example.com' },
  { label: 'GitHub', value: 'github.com/nishan', href: 'https://github.com/nishan' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nishan', href: 'https://linkedin.com/in/nishan' },
]

/**
 * Contact
 * A controlled contact form (name, email, message) using the useState
 * hook, plus a list of direct contact channels.
 */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  // Update form state as the user types, keyed by input `name`
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  // NOTE: this currently just simulates sending — wire this up to an
  // email service (e.g. EmailJS, Formspree) or your own backend API.
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Contact form submitted:', formData)
    setStatus('sent')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-eyebrow">Let's connect</p>
        <h2 className="section-heading">Contact Me</h2>
        <p className="section-subtext">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>

        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <label className="contact__label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact__input"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="contact__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__input"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="contact__label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="contact__input contact__textarea"
              placeholder="Tell me about your project or just say hello..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary contact__submit">
              Send Message
            </button>

            {status === 'sent' && (
              <p className="contact__success" role="status">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>

          <div className="contact__info">
            <h3 className="contact__info-title">Other ways to reach me</h3>
            <ul className="contact__info-list">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <span className="contact__info-label">{link.label}</span>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
