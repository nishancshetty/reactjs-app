# Nishan — Personal Portfolio

A modern, fully responsive personal portfolio built with **React 18** and **Vite**.

## Tech Stack
- React 18 (functional components + hooks)
- Vite (build tool / dev server)
- Plain CSS (Flexbox & Grid, no framework)

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Hero.jsx / Hero.css
│   ├── About.jsx / About.css
│   ├── Skills.jsx / Skills.css
│   ├── Projects.jsx / Projects.css
│   ├── Contact.jsx / Contact.css
│   └── Footer.jsx / Footer.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Then open the local URL Vite prints (usually `http://localhost:5173`).

3. Build for production:
   ```bash
   npm run build
   ```
   The optimized site is output to the `dist/` folder.

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Customizing
- Replace the placeholder profile initials in `Hero.jsx` with a real photo (`<img src="..." />`).
- Update project links/details in `Projects.jsx`.
- Update contact email/social links in `Contact.jsx` and `Footer.jsx`.
- Wire the contact form in `Contact.jsx` up to a real email service (e.g. Formspree, EmailJS) or your own backend.
- Adjust the accent color and other design tokens at the top of `src/index.css`.
