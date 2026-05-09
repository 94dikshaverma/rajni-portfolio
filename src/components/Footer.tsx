import { Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
            {/* Brand Column */}
            <div className="flex-1 max-w-sm space-y-8">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl transition-transform duration-500 group-hover:rotate-6">
                  R
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-display font-bold tracking-tight text-foreground uppercase">Rajni Bala</span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Senior Developer</span>
                </div>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Architecting high-performance digital ecosystems with a focus on CMS engineering and technical leadership.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/rajni-saini-25537b16a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground">Navigation</h4>
                <ul className="space-y-4">
                  <li><a href="#services" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">Expertise</a></li>
                  <li><a href="#skills" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">Skills</a></li>
                  <li><a href="#projects" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">Projects</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground">Experience</h4>
                <ul className="space-y-4">
                  <li><a href="#experience" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">Career Path</a></li>
                  <li><a href="#contact" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a></li>
                  <li><a href="#" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">CV / Resume</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground">Contact</h4>
                <ul className="space-y-4">
                  <li><a href="mailto:ranjisaini001@gmail.com" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">Email Me</a></li>
                  <li><a href="tel:+917814334227" className="text-[12px] text-muted-foreground hover:text-primary transition-colors font-medium">+91 7814334227</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
