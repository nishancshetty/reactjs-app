import './Footer.css'

// Social links reused as simple text/letter icon placeholders
const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/nishan', icon: 'Gh' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nishan', icon: 'In' },
  { label: 'Email', href: 'mailto:nishan@example.com', icon: '@' },
]

/**
 * Footer
 * Displays the copyright line, social media icon links, and a
 * small "Made with React" credit.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copyright">&copy; {currentYear} Nishan. All rights reserved.</p>

        <ul className="footer__socials" aria-label="Social media links">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        <p className="footer__credit">Made with React</p>
      </div>
    </footer>
  )
}

export default Footer
