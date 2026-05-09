import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Product Director at EduTech",
    content: "Rajni's architectural decisions for our Moodle implementation were game-changing. The performance gains we saw were immediate and significant.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    name: "Sarah Chen",
    role: "CEO at GrowthFlow",
    content: "Building our enterprise WordPress ecosystem with Rajni was a seamless experience. The REST API integrations are robust and flawlessly engineered.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Marcus Miller",
    role: "CTO at Nexus Solutions",
    content: "A true professional who understands both the technical depth and the strategic impact of development decisions. Highly recommended for complex builds.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-white/[0.01]">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-6">
            Client Success
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">
            Trust & <span className="text-gradient">Validation</span>
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
            Real feedback from project stakeholders and industry leaders who have experienced the impact of high-end technical engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-10 group relative flex flex-col"
            >
              <div className="absolute top-10 right-10 text-primary opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
                <Quote className="h-12 w-12 rotate-180" />
              </div>

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg text-foreground font-light leading-relaxed mb-10 flex-1 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/5 shadow-sm bg-secondary">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-0.5">{item.name}</h4>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
