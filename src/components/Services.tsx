import { motion } from "framer-motion";
import { Brain, Code, Workflow, ShoppingBag, Palette, Layers, ArrowRight } from "lucide-react";

const expertise = [
    {
        icon: Code,
        title: "Full-Stack Engineering",
        description: "Architecting high-performance web applications using modern PHP frameworks like Laravel and CodeIgniter.",
        features: ["Custom Web Applications", "Scalable Architectures", "Real-time Dashboards", "Performance Optimization"]
    },
    {
        icon: Brain,
        title: "CMS & LMS Solutions",
        description: "Specialized engineering for WordPress and Moodle ecosystems, creating complex learning platforms and content hubs.",
        features: ["Moodle LMS Implementation", "WordPress Enterprise Sites", "Custom Theme Frameworks", "Content Strategy & Dev"]
    },
    {
        icon: Workflow,
        title: "Custom API & Plugin Dev",
        description: "Building custom WordPress plugins and robust RESTful APIs to extend platform capabilities and integrate services.",
        features: ["WordPress REST API Design", "Custom Plugin Development", "Swagger Documentation", "Third-party Integrations"]
    },
    {
        icon: ShoppingBag,
        title: "E-commerce Ecosystems",
        description: "Engineered for conversion and scale using deep WooCommerce customizations and secure payment integrations.",
        features: ["WooCommerce Mastery", "Payment Gateway Integration", "Custom Checkout Flows", "Inventory Sync Solutions"]
    },
    {
        icon: Palette,
        title: "Team Leadership",
        description: "Leading multi-disciplinary development teams of 15+ to deliver mission-critical projects on schedule.",
        features: ["Agile Team Management", "Technical Mentorship", "Resource Allocation", "Quality Assurance Strategy"]
    },
    {
        icon: Layers,
        title: "Enterprise Modernization",
        description: "Containerizing legacy applications with Docker and managing microsite architectures for modern deployment.",
        features: ["Docker Containerization", "Microsite Management", "Database Optimization", "Security & Hardening"]
    }
];

const Services = () => {
    return (
        <section className="py-20 relative bg-white/[0.01]" id="services">
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
                        Strategic Expertise
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">
                        Technical <span className="text-primary">Domains</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        Specialized in building mission-critical digital products that require high-performance architecture, complex integrations, and technical leadership.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-8 group"
                        >
                            <div className="w-14 h-14 bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                <item.icon className="h-6 w-6" />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {item.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-[12px] text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                                        <div className="w-1 h-1 bg-primary/40 group-hover:w-3 transition-all" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 text-primary text-[10px] font-bold tracking-[0.2em] uppercase pt-4 border-t border-white/5 w-full hover:gap-6 transition-all"
                            >
                                Inquire Domain
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
