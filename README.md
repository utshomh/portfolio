# Utsho MH - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Powered by Framer Motion
- **React Router**: Client-side routing for project details
- **Modern UI**: Clean design with professional color scheme
- **SEO Friendly**: Proper meta tags and structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with theme toggle
│   ├── Hero.tsx            # Hero section with introduction
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills showcase with progress bars
│   ├── Projects.tsx        # Projects grid with routing
│   ├── ProjectDetail.tsx   # Individual project detail pages
│   ├── Contact.tsx         # Contact form and information
│   ├── Footer.tsx          # Site footer
│   ├── NotFound.tsx        # 404 page
│   └── ErrorPage.tsx       # Error boundary page
├── App.tsx                 # Main app component
├── main.tsx               # App entry point with routing
└── index.css              # Global styles and Tailwind imports
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/utshomh/portfolio.git
cd portfolio
```

1. Install dependencies:

```bash
pnpm install
```

1. Start the development server:

```bash
pnpm run dev
```

1. Open [http://localhost:5174](http://localhost:5174) in your browser.

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

### Lint Code

```bash
pnpm run lint
```

## 📱 Sections

### 🏠 Home

- Professional introduction
- Tech stack showcase
- Call-to-action buttons
- Social media links

### 👨‍💻 About

- Personal journey in programming
- Work preferences and interests
- Hobbies and personality insights

### 🛠️ Skills

- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, MongoDB, PostgreSQL
- Tools: Git, Docker, AWS, Firebase

### 💼 Projects

- 4 featured projects with detailed pages
- Each project includes:
  - Technology stack
  - Full description
  - Live demo links
  - GitHub repository
  - Challenges faced
  - Future plans

### 📞 Contact

- Contact form
- Direct contact information
- Social media links

## 🎨 Design Philosophy

- **Minimalist**: Clean, uncluttered design
- **Professional**: Corporate color scheme with cyan accents
- **Accessible**: Proper contrast ratios and keyboard navigation
- **Performance**: Optimized animations and lazy loading

## 📝 TODO

- [ ] Add actual project screenshots
- [ ] Add professional headshot
- [ ] Add resume PDF download
- [ ] Update social media links
- [ ] Add more projects
- [ ] Implement contact form backend

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Build Settings**:
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
3. **Deploy**: Vercel will automatically detect the `vercel.json` configuration

The `vercel.json` file handles client-side routing for React Router, so refreshing project detail pages will work correctly.

### Other Platforms

- **Netlify**: Create a `_redirects` file with `/* /index.html 200`
- **GitHub Pages**: Use a custom domain or GitHub Actions for deployment

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and use as inspiration for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Utsho MH**

- Email: <utshomh.dev@gmail.com>
- WhatsApp: +8801301109766
- LinkedIn: [utshomh](https://www.linkedin.com/in/utshomh/)
- GitHub: [utshomh](https://github.com/utshomh)

---

Built with ❤️ using React & TypeScript
