import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary font-bold text-[10px] tracking-[0.4em] uppercase">
                  <div className="w-8 h-[1px] bg-primary/40" />
                  Inquiry & Strategy
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-[1.1] tracking-tight">
                  Let's discuss your next <span className="text-primary">technical</span> challenge.
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
                Whether you're looking for a Senior Developer to lead your team, a CMS architect for a complex migration, or a strategy session for your next product—I'm available for mission-critical projects.
              </p>

              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajni-saini-25537b16a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-6"
            >
              <a
                href="mailto:ranjisaini001@gmail.com"
                className="group p-10 bg-secondary border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Email Me</p>
                    <p className="text-2xl font-display font-bold">ranjisaini001@gmail.com</p>
                  </div>
                  <div className="w-12 h-12 bg-white/[0.03] flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
              </a>

              <a
                href="tel:+917814334227"
                className="group p-10 bg-secondary border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Direct Call</p>
                    <p className="text-2xl font-display font-bold">+91 7814334227</p>
                  </div>
                  <div className="w-12 h-12 bg-white/[0.03] flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Send className="h-5 w-5" />
                  </div>
                </div>
              </a>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
