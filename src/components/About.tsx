import { motion } from "framer-motion";

const About = () => {
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
    <section id="about" className="relative py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--primary)/0.08),transparent)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full glass border border-primary/20 text-sm text-muted-foreground mb-6"
            >
              About Me
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get to know <span className="gradient-text">me</span>
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Full Stack Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My programming journey began with curiosity and a passion for
                  creating digital solutions. What started as tinkering with
                  HTML and CSS evolved into a deep dive into full-stack
                  development, where I discovered the joy of building
                  applications that solve real-world problems.
                </p>
                <p>
                  I thrive on challenges that push me to learn new technologies
                  and frameworks. Whether it's crafting intuitive user
                  interfaces with React and Next.js, or building robust backend
                  systems with Node.js and MongoDB, I enjoy the entire
                  development process.
                </p>
                <p>
                  Outside of coding, you'll find me exploring new hiking trails,
                  experimenting with photography, or diving into a good sci-fi
                  novel. I believe in maintaining a healthy work-life balance
                  and bringing creativity from all aspects of life into my
                  development work.
                </p>
                <p>
                  I'm always excited to collaborate on innovative projects and
                  contribute to teams that value clean code, user experience,
                  and continuous learning.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/50 border border-primary/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary/30 rounded-lg rotate-12"></div>
                    <div className="absolute top-16 right-12 w-12 h-12 border-2 border-primary/20 rounded-full"></div>
                    <div className="absolute bottom-16 left-12 w-20 h-20 border-2 border-primary/25 rounded-xl -rotate-6"></div>
                    <div className="absolute bottom-8 right-8 w-14 h-14 border-2 border-primary/30 rounded-lg rotate-45"></div>
                  </div>

                  {/* Main Content */}
                  <div className="text-center space-y-6 relative z-10">
                    {/* Floating Icons */}
                    <div className="relative">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="inline-block"
                      >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center shadow-lg">
                          <span className="text-3xl">💻</span>
                        </div>
                      </motion.div>

                      {/* Orbiting elements */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                      >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-3 bg-primary/40 rounded-full"></div>
                        <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-2 h-2 bg-primary/30 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-3 h-3 bg-primary/50 rounded-full"></div>
                        <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-2 h-2 bg-primary/35 rounded-full"></div>
                      </motion.div>
                    </div>

                    {/* Text */}
                    <div className="space-y-2">
                      <motion.p
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-lg font-semibold text-primary"
                      >
                        Full Stack Developer
                      </motion.p>
                      <p className="text-sm text-muted-foreground">
                        Building the future, one line at a time
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {["React", "Node.js", "TypeScript"].map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
