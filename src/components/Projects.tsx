import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Category = "all" | "wordpress" | "shopify" | "react" | "php";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  category: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "IT ERP System",
    description: "A comprehensive enterprise resource planning solution designed for IT firms. Manage workforce, projects, and support tickets in a unified ecosystem.",
    technologies: ["Laravel", "PHP", "MySQL", "Livewire"],
    liveUrl: "https://erp-laravel.free.nf/",
    category: "Enterprise Software",
    image: "/assets/projects/it-erp.png",
  },
  {
    title: "WordPress REST API Engine",
    description: "Architected a scalable RESTful API framework for headless WordPress applications, enabling seamless mobile and web integrations.",
    technologies: ["WordPress", "PHP", "REST API", "JSON"],
    liveUrl: "#",
    category: "WordPress Architecture",
    image: "/assets/projects/wordpress-api.png",
  },
  {
    title: "Moodle LMS Implementation",
    description: "Engineered a comprehensive E-learning platform using Moodle CMS, featuring custom themes, course management, and enrollment systems.",
    technologies: ["Moodle", "PHP", "MySQL", "LMS"],
    liveUrl: "#",
    category: "LMS Solutions",
    image: "/assets/projects/moodle-lms.png",
  },
  {
    title: "Zoho CRM Integration Hub",
    description: "Seamlessly integrated Zoho Forms and CRM with WordPress, automating lead capture and synchronization workflows.",
    technologies: ["PHP", "Zoho API", "WordPress", "Automation"],
    liveUrl: "#",
    category: "Enterprise Integration",
    image: "/assets/projects/zoho-integration.png",
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-background" id="projects">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <div className="flex items-center gap-4 text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4">
            <div className="w-8 h-[1px] bg-primary/40" />
            Selected Case Studies
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            Engineering <span className="text-primary">Mastery</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-8 font-light max-w-2xl">
            A curated selection of technical challenges solved through architectural precision and strategic development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group space-y-8"
            >
              {/* Project Image: Clean Architectural Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary border border-white/5 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 px-4 py-1.5 bg-black/60 backdrop-blur-md text-[9px] font-bold tracking-[0.2em] uppercase text-white/90 border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground px-3 py-1 border border-white/5 bg-white/[0.02]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex">
                  <a href={project.liveUrl} className="flex items-center gap-3 text-primary text-[10px] font-bold tracking-[0.2em] uppercase hover:gap-6 transition-all">
                    Explore Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
