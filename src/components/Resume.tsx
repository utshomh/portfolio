import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const Resume = () => {
  const personalInfo = {
    name: "Utsho MH",
    title: "Full Stack Developer",
    email: "utshomh.dev@gmail.com",
    phone: "+8801301109766",
    location: "Tejgaon, Dhaka, Bangladesh",
    github: "https://github.com/utshomh",
    linkedin: "https://linkedin.com/in/utshomh",
  };

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
    ],
    tools: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Figma"],
  };

  const projects = [
    {
      title: "KrishiLink",
      description:
        "Agricultural marketplace platform connecting farmers with buyers",
      tech: ["React", "Firebase", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/utshomh/krishilink-client",
      live: "https://krishilink.web.app",
    },
    {
      title: "LocalChefBazaar",
      description:
        "Platform connecting home cooks with customers for homemade meals",
      tech: [
        "React",
        "Firebase",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Tailwind CSS",
      ],
      github: "https://github.com/utshomh/LocalChefBazaarClient",
      live: "localchefbazaarclient.onrender.com/",
    },
    {
      title: "Gamehub",
      description: "Community platform for indie game developers and gamers",
      tech: [
        "React",
        "Firebase",
        "Express.js",
        "MongoDB",
        "Framer Motion",
        "Tailwind CSS",
      ],
      github: "https://github.com/utshomh/gamehub",
      live: "https://gamehub-by-utsho.web.app/",
    },
    {
      title: "CareIO",
      description: "Caregiver booking platform for children and elderly care",
      tech: [
        "React",
        "Firebase",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      github: "https://github.com/utshomh/care-io",
      live: "https://care-io.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center border-b border-border pb-8"
        >
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">
            {personalInfo.title}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a
                href={`tel:${personalInfo.phone}`}
                className="hover:text-primary transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* About */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
            About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Passionate Full Stack Developer with expertise in the MERN stack and
            modern web technologies. My programming journey began with curiosity
            and evolved into a deep dive into full-stack development. I thrive
            on challenges that push me to learn new technologies and enjoy
            building applications that solve real-world problems. Outside of
            coding, I explore hiking trails, photography, and sci-fi novels,
            bringing creativity from all aspects of life into my development
            work.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-primary">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
            Projects
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-border rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/50 text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Print Button */}
        <motion.div
          variants={itemVariants}
          className="text-center pt-8 border-t border-border"
        >
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Print/Save as PDF
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
