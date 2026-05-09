import { motion } from "framer-motion";
import { CheckCircle, Database, Layout, Server, Cpu, Cloud, GitBranch, Terminal, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        icon: Layout,
        title: "CMS Engineering",
        description: "WordPress Core, Custom Theme Dev, Plugin Architecture, Multi-site setups",
        skills: ["WordPress Custom Hooks", "Theme & Plugin Development", "Gutenberg Integration", "WooCommerce Customization"]
    },
    {
        icon: Server,
        title: "Backend Architecture",
        description: "PHP, Laravel, CodeIgniter, Scalable API Design, Security",
        skills: ["Laravel/CI Frameworks", "RESTful API Development", "Swagger Documentation", "Custom PHP Frameworks"]
    },
    {
        icon: Database,
        title: "Data Management",
        description: "MySQL Optimization, Database Architecture, Real-time Sync",
        skills: ["Relational DB Schema Design", "Query Optimization", "Data Migration Strategies", "MySQL Performance Tuning"]
    },
    {
        icon: Cpu,
        title: "LMS Systems",
        description: "Moodle Implementation, Course Management, Custom LMS Workflows",
        skills: ["Moodle CMS Expertise", "LMS Theme Customization", "Course Enrollment Flows", "Quiz & Assessment Engines"]
    },
    {
        icon: GitBranch,
        title: "DevOps & Deployment",
        description: "Dockerization, CI/CD, Server Management, Microsite Orchestration",
        skills: ["Docker Containerization", "Microsite Management", "Environment Configuration", "Automated Workflows"]
    },
    {
        icon: Users,
        title: "Leadership & Strategy",
        description: "Team Lead of 15+, Project Lifecycle Management, Issue Resolution",
        skills: ["Team Mentorship", "Agile Project Delivery", "Conflict Resolution", "Strategic Planning"]
    }
];

const TechnicalSkills = () => {
    return (
        <section className="py-20 relative bg-white/[0.01]" id="technical-skills">
            <div className="container px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4">
                            <div className="w-8 h-[1px] bg-primary/40" />
                            Core Competencies
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                            Technical <span className="text-primary">Proficiencies</span>
                        </h2>
                    </div>
                    <p className="text-lg text-muted-foreground font-light max-w-sm border-l border-white/10 pl-6">
                        A deep dive into specialized technical abilities honed across hundreds of production environments.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <category.icon className="h-5 w-5 text-primary" />
                                <h3 className="text-xl font-display font-bold text-foreground">{category.title}</h3>
                            </div>

                            <p className="text-[13px] text-muted-foreground/80 leading-relaxed font-light">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-muted-foreground border border-white/5 bg-white/[0.02]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
