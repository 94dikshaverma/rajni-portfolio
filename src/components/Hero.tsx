import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Code2, Layers, Zap, CheckCircle, MapPin, Bot, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/rajni-headshot.png";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Team Led" },
  { value: "100%", label: "Project Success" },
];

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative bg-background pt-32 pb-20">
      {/* Clean Architectural Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Content: Technical Authority */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary font-bold text-[10px] tracking-[0.4em] uppercase">
                  <div className="w-8 h-[1px] bg-primary/40" />
                  Senior Software Architect
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight">
                  Building the <span className="text-primary">backbone</span> of modern digital ecosystems.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                With 8+ years of experience in <span className="text-foreground font-medium">CMS Engineering</span> and <span className="text-foreground font-medium">Backend Architecture</span>, I lead technical teams to deliver mission-critical web applications and high-performance API frameworks.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="rounded-none h-14 px-10 text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm" asChild>
                  <a href="#contact">Inquire Domain</a>
                </Button>
                <Button variant="outline" className="rounded-none h-14 px-10 text-[10px] font-bold tracking-[0.2em] uppercase border-white/10 hover:bg-white/5" asChild>
                  <a href="/Rajni-resume.pdf" download="Rajni_Bala_Resume.pdf">
                    Download CV
                    <ArrowRight className="ml-3 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Muted Stats Grid */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5 max-w-lg">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl font-display font-bold text-foreground tracking-tighter">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profile: Professional Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                {/* Clean Geometric Frame */}
                <div className="aspect-[4/5] bg-secondary relative z-10 overflow-hidden shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Rajni Bala"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Technical Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Available for Strategy & Dev</span>
                    </div>
                  </div>
                </div>
                
                {/* Architectural Accent */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-primary/20 -z-10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-primary/20 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Grounded Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-muted-foreground rotate-90">Scroll</span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
