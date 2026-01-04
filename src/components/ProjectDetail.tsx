import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

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

const projects: Project[] = [
  {
    title: "KrishiLink",
    description:
      "Webapp that helps farmers showcase their crops, connect with buyers, and manage agro-trade efficiently.",
    tech: ["React", "Firebase", "Express", "MongoDB"],
    github: "https://github.com/utshomh/krishilink-client",
    live: "https://krishilink.web.app",
    image: "/krishilink.png",
    details: {
      techStack: ["React", "Firebase", "Express.js", "MongoDB", "Tailwind CSS"],
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
    image: "/localchefbazaar.png",
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
    image: "/gamehub.png",
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
    image: "/care-io.png",
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

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 glass py-4"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group hover:scale-105 transition-transform"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">U</span>
            </div>
            <span className="font-semibold text-foreground text-sm">
              Utsho<span className="text-primary">.</span>MH
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12"
      >
        {/* Project Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          variants={itemVariants}
          className="aspect-video bg-secondary/50 rounded-2xl mb-12 overflow-hidden"
        >
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.details.techStack.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Project Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.details.fullDescription}
          </p>
        </motion.div>

        {/* Links */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Links</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-secondary/50 text-foreground rounded-xl hover:bg-secondary transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              View Source Code
            </a>
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Challenges Faced
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.details.challenges}
          </p>
        </motion.div>

        {/* Future Plans */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Future Plans & Improvements
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.details.improvements}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
