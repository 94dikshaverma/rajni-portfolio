import { motion } from "framer-motion";

const experience = [
  {
    company: "Zestard Technologies",
    role: "Senior WordPress Developer",
    period: "Feb 2021 - Present",
    description: "Leading the development of complex CMS ecosystems, managing technical teams, and architecting high-performance enterprise solutions.",
    highlights: ["Led development of 20+ large-scale WordPress sites", "Optimized Core Web Vitals across major clients", "Mentored junior developers and standardized workflows"],
    technologies: ["WordPress", "PHP", "MySQL", "AWS", "CI/CD"],
  },
  {
    company: "Planet Web Solutions Pvt Ltd",
    role: "Senior PHP / WordPress Developer",
    period: "Feb 2018 - Feb 2021",
    description: "Specialized in custom PHP development, API integrations, and advanced plugin architectures for global E-commerce platforms.",
    highlights: ["Built custom Zoho CRM integrations", "Developed high-performance WooCommerce extensions", "Architected headless WordPress solutions"],
    technologies: ["PHP", "Laravel", "WooCommerce", "REST API", "jQuery"],
  },
  {
    company: "Freelance",
    role: "PHP / WordPress Developer",
    period: "Feb 2017 - Feb 2018",
    description: "Provided technical consulting and development services for startups, focusing on scalable WordPress themes and performance optimization.",
    highlights: ["Optimized backend query performance by 40%", "Built custom plugin architectures", "Integrated complex third-party REST APIs"],
    technologies: ["PHP", "WordPress", "MySQL", "JavaScript", "HTML/CSS"],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white/[0.01]">
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <div className="flex items-center gap-4 text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4">
            <div className="w-8 h-[1px] bg-primary/40" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            Career <span className="text-primary">Progression</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl space-y-16">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid md:grid-cols-12 gap-8 items-start group"
            >
              {/* Period */}
              <div className="md:col-span-3 pt-2">
                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
                  {exp.period}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-9 space-y-6 pb-16 border-b border-white/5 group-last:border-none group-last:pb-0">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-3xl font-display font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-primary text-sm font-medium">@ {exp.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-2xl">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground/60">Key Contributions</span>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center gap-3 text-[12px] text-muted-foreground font-medium">
                          <div className="w-1 h-1 bg-primary/40" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground/60">Core Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground px-3 py-1 border border-white/5 bg-white/[0.02]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
