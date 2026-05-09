import { motion } from "framer-motion";

const techStack = [
  { name: "WordPress", category: "CMS", slug: "wordpress" },
  { name: "WooCommerce", category: "E-commerce", slug: "woocommerce" },
  { name: "PHP", category: "Backend", slug: "php" },
  { name: "Moodle", category: "LMS", slug: "moodle" },
  { name: "Laravel", category: "Framework", slug: "laravel" },
  { name: "CodeIgniter", category: "Framework", slug: "codeigniter" },
  { name: "MySQL", category: "Database", slug: "mysql" },
  { name: "Docker", category: "DevOps", slug: "docker" },
  { name: "jQuery", category: "Frontend", slug: "jquery" },
  { name: "JavaScript", category: "Language", slug: "javascript" },
  { name: "Swagger", category: "API Docs", slug: "swagger" },
  { name: "GIT", category: "Version Control", slug: "git" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4">
            <div className="w-8 h-[1px] bg-primary/40" />
            Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            The <span className="text-primary">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 max-w-7xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm border border-white/5 relative">
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}`} 
                  alt={tech.name}
                  className="w-7 h-7 object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-[11px] font-bold tracking-widest uppercase text-foreground">
                  {tech.name}
                </h3>
                <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-muted-foreground/60">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
