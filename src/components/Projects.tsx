import { ExternalLink, Github, Folder, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = [
    {
      title: "KrishiLink",
      description:
        "Webapp that helps farmers showcase their crops, connect with buyers, and manage agro-trade efficiently.",
      tech: ["React", "Firebase", "Express", "MongoDB"],
      github: "https://github.com/utshomh/krishilink-client",
      live: "https://krishilink.web.app",
      image: "/placeholder-project1.jpg", // TODO: Add actual project image
      details: {
        techStack: [
          "React",
          "Firebase",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
        ],
        fullDescription:
          "KrishiLink is a comprehensive agricultural marketplace platform that connects farmers directly with buyers. The application features real-time crop listings, secure payment processing, and an intuitive dashboard for managing transactions.",
        challenges:
          "Implementing real-time notifications for price updates and ensuring secure payment processing were major challenges. We also faced difficulties in optimizing image uploads for crop photos.",
        improvements:
          "Planning to add AI-powered crop disease detection, weather integration, and mobile app development. Also considering blockchain for transparent transactions.",
      },
    },
    {
      title: "LocalChefBazaar",
      description:
        "Modern online platform designed to connect home cooks with customers looking for fresh, healthy, and affordable homemade meals.",
      tech: ["React", "Firebase", "Express", "MongoDB"],
      github: "https://github.com/utshomh/LocalChefBazaarClient",
      live: "localchefbazaarclient.onrender.com/",
      image: "/placeholder-project2.jpg", // TODO: Add actual project image
      details: {
        techStack: [
          "React",
          "Firebase",
          "Express.js",
          "MongoDB",
          "Stripe",
          "Tailwind CSS",
        ],
        fullDescription:
          "LocalChefBazaar revolutionizes the food industry by connecting passionate home cooks with health-conscious customers. Features include meal planning, subscription services, and direct communication between chefs and customers.",
        challenges:
          "Managing complex state for meal customization options and implementing real-time order tracking were significant challenges. Food safety compliance integration also required careful planning.",
        improvements:
          "Adding video cooking classes, nutrition analysis, and partnership with local grocery delivery services. Mobile app development is also in the pipeline.",
      },
    },
    {
      title: "Gamehub",
      description:
        "An engaging online library for discovering and supporting indie game developers.",
      tech: ["React", "Firebase", "Express", "MongoDB"],
      github: "https://github.com/utshomh/gamehub",
      live: "https://gamehub-by-utsho.web.app/",
      image: "/placeholder-project3.jpg", // TODO: Add actual project image
      details: {
        techStack: [
          "React",
          "Firebase",
          "Express.js",
          "MongoDB",
          "Framer Motion",
          "Tailwind CSS",
        ],
        fullDescription:
          "Gamehub is a vibrant community platform for indie game developers and gamers. It features game showcases, developer profiles, review systems, and direct purchase integration for supporting creators.",
        challenges:
          "Creating an engaging UI for game previews and implementing a fair review system were challenging. Handling large game files and optimizing loading times was also complex.",
        improvements:
          "Planning to add live streaming integration, tournament hosting, and AI-powered game recommendations. Expanding to mobile platforms is also considered.",
      },
    },
    {
      title: "CareIO",
      description: "Baby Sitting & Elderly Care Service Platform",
      tech: ["React", "Firebase", "Express", "MongoDB"],
      github: "https://github.com/utshomh/care-io",
      live: "https://care-io.vercel.app/",
      image: "/placeholder-project4.jpg", // TODO: Add actual project image
      details: {
        techStack: [
          "React",
          "Firebase",
          "Express.js",
          "MongoDB",
          "Socket.io",
          "Tailwind CSS",
        ],
        fullDescription:
          "CareIO provides a trusted platform for finding and booking caregivers for children and elderly family members. Features include caregiver verification, real-time booking, and emergency contact systems.",
        challenges:
          "Implementing robust background check integration and real-time availability tracking were major hurdles. Ensuring user privacy and data security was paramount.",
        improvements:
          "Adding telemedicine integration, emergency response features, and partnership with insurance providers. Expanding service categories is also planned.",
      },
    },
  ];

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors duration-300"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Project Image */}
              <div className="aspect-video bg-secondary/50 border-b border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/50 flex items-center justify-center">
                  {/* TODO: Replace with actual project image */}
                  <Folder className="w-12 h-12 text-primary/50" />
                </div>
              </div>

              <div className="relative p-6 flex flex-col h-full">
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
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 w-full px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-sm hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View More
                </motion.button>
              </div>
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Project Image */}
                <div className="aspect-video bg-secondary/50 rounded-xl mb-6 flex items-center justify-center">
                  {/* TODO: Replace with actual project image */}
                  <Folder className="w-16 h-16 text-primary/50" />
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Description
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details.fullDescription}
                  </p>
                </div>

                {/* Links */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Links
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Project
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 text-foreground rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Challenges Faced
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details.challenges}
                  </p>
                </div>

                {/* Future Plans */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Future Plans & Improvements
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details.improvements}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
