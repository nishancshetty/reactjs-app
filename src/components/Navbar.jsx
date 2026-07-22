import { useState, useEffect } from 'react'
import './Navbar.css'

// Nav links reused for both desktop and mobile menus
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Navbar
 * Sticky top navigation with a logo, scroll-linked underline styling,
 * and a collapsible hamburger menu for mobile viewports.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add a background/shadow to the navbar once the user scrolls down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever a link is clicked
  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Primary">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
          Nishan<span className="navbar__logo-dot">.</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links navbar__links--desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger toggle button (mobile only) */}
        <button
          className={`navbar__toggle ${isOpen ? 'is-active' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <ul
        id="mobile-menu"
        className={`navbar__links navbar__links--mobile ${isOpen ? 'is-open' : ''}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Navbar
