import { ExternalLink, Github, Folder, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectDetails {
  techStack: string[];
  fullDescription: string;
  challenges: string;
  improvements: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  details: ProjectDetails;
}

const projects: Array<Project> = [
  {
    title: "LocalChefBazaar",
    description:
      "Modern online platform designed to connect home cooks with customers looking for fresh, healthy, and affordable homemade meals.",
    tech: ["React", "Firebase", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/utshomh/LocalChefBazaarClient",
    live: "https://localchefbazaar-by-utsho.web.app",
    image: "/localchefbazaar.png",
    details: {
      techStack: [
        "React",
        "Stripe",
        "Firebase",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      fullDescription:
        "LocalChefBazaar is a community-focused marketplace that connects passionate home cooks with health-conscious customers. The platform facilitates a seamless culinary experience, allowing users to discover unique meals, complete secure transactions via Stripe, and share feedback through a comprehensive rating and review system. It features a dual-sided interface where chefs can manage their meal listings and efficiently process incoming meal requests.",
      challenges:
        "Building LocalChefBazaar presented the complex task of managing a multi-sided marketplace with three distinct user roles: Admins, Chefs, and Customers. One of the most significant technical challenges was implementing a robust Role-Based Access Control (RBAC) system using Firebase Admin and custom backend logic to ensure that sensitive actions—such as managing meal schedules or accessing admin dashboards—were strictly restricted to the appropriate users. Synchronizing real-time data, such as chef availability and meal order tracking, required a sophisticated combination of Tanstack Query for efficient client-side caching and MongoDB/Mongoose for structured data persistence. Additionally, creating a high-performance form handling system for chef onboarding and meal listings necessitated the use of React Hook Form to ensure validation was both thorough and user-friendly. Finally, balancing a visually rich experience with performance was a priority; we integrated Lottie animations and SweetAlert2 to provide premium feedback, while utilizing Pino logging on the backend to maintain visibility and simplify debugging across the MERN stack.",
      improvements:
        'The vision for LocalChefBazaar involves evolving from a meal marketplace into a complete community-driven culinary platform. Our primary goal is to integrate a real-time communication system using WebSockets, allowing customers to chat directly with chefs for meal customizations and delivery updates. To enhance the ordering experience, we plan to implement a full-scale secure payment gateway (such as Stripe or SSLCommerz) to handle automated payouts for chefs and instant refunds if necessary. We also aim to introduce an AI-powered recommendation engine that suggests meals based on a user’s dietary preferences and previous ratings. On the logistics side, we intend to develop a dedicated delivery partner interface to streamline the "Real-time order tracking" feature from the kitchen to the customer’s doorstep. Lastly, expanding the platform with a subscription-based meal plan model will allow home cooks to secure recurring income while providing customers with consistent, healthy homemade food options.',
    },
  },
  {
    title: "KrishiLink",
    description:
      "Digital Marketplace for farmers to showcase their crops, connect with buyers, and manage agro-trade efficiently.",
    tech: ["React", "Firebase", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/utshomh/krishilink-client",
    live: "https://krishilink.web.app",
    image: "/krishilink.png",
    details: {
      techStack: [
        "React",
        "Framer Motion",
        "Firebase",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
      ],
      fullDescription:
        'KrishiLink is a modern, full-stack digital ecosystem designed to serve as a "Farmer’s Growth & Connection Platform." It functions as an agro-focused social and trade platform that bridges the gap between rural farmers and potential buyers. By providing a digital storefront for crops, the platform empowers farmers to showcase their harvests and manage trade relationships with transparency and efficiency.',
      challenges:
        "Developing KrishiLink involved navigating the complexities of building a secure, real-time bridge between rural producers and urban markets. One of the primary technical hurdles was implementing a robust authentication flow that seamlessly integrated Firebase Authentication on the client side with Firebase Admin SDK on the server to ensure that only verified users could access sensitive trade data. Beyond security, creating a reliable Interest System required careful synchronization between the React frontend and MongoDB to provide instant feedback to users while maintaining data integrity. We also had to prioritize performance and accessibility; leveraging Tailwind CSS and Framer Motion was essential to create a high-performance, mobile-first interface that remains smooth and intuitive even on lower-end devices or in areas with limited network connectivity. Finally, managing the deployment of a decoupled architecture—hosting the frontend on Firebase and the backend on Vercel—required a meticulous approach to environment configuration and cross-origin communication.",
      improvements:
        "Looking ahead, the roadmap for KrishiLink is focused on transforming it into a comprehensive, end-to-end agricultural ecosystem. Our immediate priority is to enhance user engagement by integrating real-time notifications and offline functionality through Progressive Web App (PWA) technology, ensuring farmers stay connected regardless of their internet stability. As the platform grows, we aim to introduce market intelligence tools, such as price analytics and trend dashboards, to empower farmers with data-driven decision-making. To build greater trust within the community, we plan to implement a peer-review and rating system for both buyers and farmers. In the long term, we envision KrishiLink as a complete trade solution by integrating secure payment gateways and localized logistics support, alongside multilingual capabilities to ensure the platform is accessible to every farmer, regardless of their technical literacy or primary language.",
    },
  },
  {
    title: "CareIO",
    description:
      "professional web-based service platform that simplifies finding and booking trusted caregiving for babies, the elderly, and the sick.",
    tech: ["NextJS", "NextAuth", "Prisma", "PostgreSQL", "TypeScript"],
    github: "https://github.com/utshomh/care-io",
    live: "https://care-io.vercel.app",
    image: "/care-io.png",
    details: {
      techStack: ["NextJS", "NextAuth", "Prisma", "PostgreSQL", "TypeScript"],
      fullDescription:
        'Care-IO is a dedicated caregiving ecosystem built to resolve the logistical challenges of securing reliable home-based support through a modern Next.js and MongoDB architecture. The platform features an intelligent, hierarchical location-based booking system that allows users to find caretakers in specific areas and automatically calculates service costs based on duration. With a focus on professional management, the system includes a "My Bookings" dashboard for real-time status tracking, secure payment processing via Stripe, and automated post-booking email invoices through Nodemailer. By combining secure Google authentication with a mobile-first design and SEO metadata support, Care-IO provides a dependable and user-friendly solution for families managing the health and well-being of their loved ones.',
      challenges:
        "The primary challenge in developing Care-IO was managing the complexity of a multi-step, location-based booking logic that required precise state management in Next.js to ensure data flowed correctly from regional divisions down to specific areas. Implementing a robust booking lifecycle—where status changes from pending to confirmed needed to be reflected in real-time while triggering background tasks like automated email invoicing via Nodemailer—demanded a highly organized backend architecture. Additionally, integrating Stripe for secure payments while maintaining session persistence and protecting routes for sensitive user data necessitated a deep dive into secure authentication and environment variable management to ensure a safe environment for both families and caregivers.",
      improvements:
        "The future of Care-IO centers on enhancing trust and expanding service accessibility by implementing a caretaker verification system where providers can upload certifications to earn verified badges. To improve the user experience, the roadmap includes an in-app messaging feature allowing families to interview caretakers directly and the introduction of recurring subscription-based care plans for long-term support needs. On the technical side, the platform aims to integrate Google Maps API for real-time arrival tracking of caregivers and expand its reach through multilingual support to ensure that every household can easily access high-quality care services regardless of language barriers.",
    },
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const CardGlowEffect = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  );

  const ProjectImage = ({ project }: { project: Project }) => (
    <div className="aspect-[4/2] bg-secondary/50 border-b border-border overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} project screenshot`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  );

  const ProjectContent = ({ project }: { project: Project }) => (
    <div className="relative p-6 flex flex-col flex-grow">
      {/* Header with Links */}
      <div className="flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ rotate: -10, scale: 1.1 }}
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
        >
          <Folder className="w-6 h-6 text-primary" />
        </motion.div>
        <div className="flex gap-3">
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="View source code"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="View live project"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons - Always at bottom */}
      <div className="space-y-2 mt-auto">
        {/* View Details Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to={`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="w-full px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-sm hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Link>
        </motion.div>

        {/* Visit GitHub Button */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-2 bg-secondary/50 text-foreground rounded-lg font-medium text-sm hover:bg-secondary transition-colors flex items-center justify-center gap-2"
        >
          <Github className="w-4 h-4" />
          Visit GitHub
        </motion.a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,hsl(var(--primary)/0.08),transparent)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-primary/20 text-sm text-muted-foreground mb-6"
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in building modern,
            scalable web applications.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 auto-rows-fr place-items-center px-4"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors duration-300 flex flex-col h-full ${
                index === 3 ? "xl:col-span-3 xl:max-w-md xl:mx-auto" : ""
              }`}
            >
              <CardGlowEffect />
              <ProjectImage project={project} />
              <ProjectContent project={project} />
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/utshomh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 text-foreground rounded-xl font-medium border border-border hover:bg-secondary hover:border-primary/30 transition-all"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
