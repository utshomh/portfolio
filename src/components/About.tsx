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
                  My programming journey began with curiosity and a passion for creating digital solutions.
                  What started as tinkering with HTML and CSS evolved into a deep dive into full-stack development,
                  where I discovered the joy of building applications that solve real-world problems.
                </p>
                <p>
                  I thrive on challenges that push me to learn new technologies and frameworks.
                  Whether it's crafting intuitive user interfaces with React and Next.js,
                  or building robust backend systems with Node.js and MongoDB, I enjoy the entire development process.
                </p>
                <p>
                  Outside of coding, you'll find me exploring new hiking trails, experimenting with photography,
                  or diving into a good sci-fi novel. I believe in maintaining a healthy work-life balance
                  and bringing creativity from all aspects of life into my development work.
                </p>
                <p>
                  I'm always excited to collaborate on innovative projects and contribute to teams
                  that value clean code, user experience, and continuous learning.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/50 border border-primary/20 overflow-hidden">
                {/* TODO: Add about section image/illustration */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">🚀</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Creative Developer</p>
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