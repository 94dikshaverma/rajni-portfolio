import { motion, AnimatePresence } from "framer-motion";
import { Workflow, Database, Mail, MessageSquare, Clock, ArrowRight, FileSpreadsheet, Bot, CheckCircle, ChevronLeft, ChevronRight, Brain, Sparkles, Globe, Video, Image, Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

import workflowImg1 from "@/assets/automation-workflow-1.png";
import workflowImg2 from "@/assets/automation-workflow-2.png";
import workflowImg3 from "@/assets/automation-workflow-3.png";
import veo3Workflow from "@/assets/veo3-workflow.png";
import veo3Demo from "@/assets/veo3-demo.mp4";
import hrWorkflow from "@/assets/hr-workflow.png";
import telegramBotWorkflow from "@/assets/telegram-bot-workflow.png";

const workflowImages = [workflowImg1, workflowImg2, workflowImg3];

const services = [
  {
    icon: Brain,
    title: "AI Chatbots & Agents",
    description: "Custom AI chatbots powered by GPT-5, Claude & Gemini with context-aware conversations.",
  },
  {
    icon: Workflow,
    title: "n8n & Make.com",
    description: "End-to-end workflow automation connecting 500+ apps with intelligent triggers.",
  },
  {
    icon: Mail,
    title: "Email & CRM Automation",
    description: "Automated email sequences, lead scoring, and CRM workflows with AI personalization.",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description: "Automated data sync, ETL processes, and real-time analytics dashboards.",
  },
];

const featuredProjects = [
  {
    id: "veo3",
    title: "Veo3 Viral UGC Ads Generator",
    subtitle: "n8n + Veo 3 + Gemini AI",
    description: "An n8n-powered automation that generates viral UGC-style video ads using Veo 3 from a single product image. The workflow starts in n8n, where a product image and basic product details are provided. The system then automatically generates a high-converting UGC video prompt, sends it to Veo 3, and produces short-form UGC-style video ads optimized for social media.",
    highlights: [
      "Single product image to viral video ad",
      "AI-generated high-converting UGC prompts",
      "Veo 3 integration for video generation",
      "Social media optimized short-form content",
    ],
    technologies: ["n8n", "Veo 3", "UGC", "AI Video Generator", "AI Content Creation"],
    workflowImage: veo3Workflow,
    demoVideo: veo3Demo,
    steps: [
      { icon: Image, label: "Input", desc: "Product Image" },
      { icon: Workflow, label: "Process", desc: "n8n Workflow" },
      { icon: Bot, label: "AI Prompt", desc: "Gemini AI" },
      { icon: Video, label: "Generate", desc: "Veo 3 Video" },
    ],
  },
  {
    id: "hr",
    title: "Smart HR Solutions",
    subtitle: "Automated Recruitment Workflow with n8n",
    description: "This workflow automates the early-stage recruiting outreach and scheduling process, streamlining candidate management and communication. It triggers on emails with attached PDF resumes, saves them to Google Drive, analyzes and scores resumes from 1-10 using AI, and sends greeting emails to qualified candidates automatically.",
    highlights: [
      "Automated resume extraction from emails",
      "AI-powered resume scoring (1-10 scale)",
      "Google Drive & Sheets integration",
      "Auto greeting emails to qualified candidates",
    ],
    technologies: ["n8n", "Automation", "HR System Management", "Email Automation", "Gemini AI"],
    workflowImage: hrWorkflow,
    steps: [
      { icon: Mail, label: "Trigger", desc: "Email with PDF" },
      { icon: FileSpreadsheet, label: "Extract", desc: "Resume Data" },
      { icon: Bot, label: "Score", desc: "AI Analysis" },
      { icon: Mail, label: "Outreach", desc: "Auto Email" },
    ],
  },
  {
    id: "telegram",
    title: "AI-Powered Personal Assistant Bot",
    subtitle: "Telegram Bot via n8n + OpenAI",
    description: "A fully automated, AI-powered personal assistant built with n8n and integrated directly with Telegram. The bot can read PDF documents, send emails, and add events to Google Calendar — all triggered by simple chat messages.",
    highlights: [
      "Telegram Bot interface with auto-triggers",
      "PDF processing & document Q&A",
      "Email automation on user request",
      "Google Calendar event integration",
    ],
    technologies: ["n8n", "Automation", "OpenAI API", "Telegram Bot", "Google Calendar"],
    workflowImage: telegramBotWorkflow,
    steps: [
      { icon: MessageSquare, label: "Trigger", desc: "Telegram Message" },
      { icon: FileSpreadsheet, label: "Process", desc: "PDF Extraction" },
      { icon: Bot, label: "AI Agent", desc: "OpenAI + Memory" },
      { icon: Mail, label: "Actions", desc: "Email & Calendar" },
    ],
  },
  {
    id: "report",
    title: "AI Report Automation",
    subtitle: "n8n + Google Sheets + Gemini AI",
    description: "Built an automated reporting workflow connecting Google Sheets, n8n, and Gemini AI to generate weekly performance reports. The system aggregates metrics, calculates KPIs, and creates AI-powered summaries automatically. Each run exports formatted reports to Google Drive and logs results — turning manual reporting into a seamless, one-click process.",
    highlights: [
      "End-to-end workflow automation with n8n",
      "AI-powered weekly summaries using Gemini Pro",
      "Smart report delivery with logging & validation",
      "Automated Google Drive & Slack notifications",
    ],
    technologies: ["n8n", "Make.com", "Google Sheets", "Gemini AI", "OpenAI", "Slack API"],
    workflowImages: workflowImages,
    steps: [
      { icon: FileSpreadsheet, label: "Data Input", desc: "Google Sheets" },
      { icon: Workflow, label: "Process", desc: "n8n Workflow" },
      { icon: Bot, label: "AI Analysis", desc: "Gemini AI" },
      { icon: Globe, label: "Deliver", desc: "Multi-channel" },
    ],
  },
];

const Automation = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const currentProject = featuredProjects.find(p => p.id === activeProject);
  const galleryImages = currentProject?.workflowImages || (currentProject?.workflowImage ? [currentProject.workflowImage] : []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const openGallery = (projectId: string) => {
    setActiveProject(projectId);
    setCurrentImage(0);
    setShowGallery(true);
  };

  return (
    <section className="py-24 bg-background relative" id="automation">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-md bg-accent/10 text-accent mb-4">
            AI & Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Intelligent <span className="text-gradient">Automation</span>
          </h2>
          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto font-light leading-relaxed">
            Architecting high-performance ecosystems that bridge the gap between AI and core business workflows.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 max-w-6xl mx-auto mb-20">
          {featuredProjects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: projectIndex * 0.1 }}
              className="relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-premium"
            >
              <div className="relative flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {project.id === 'veo3' ? <Video className="h-5 w-5 text-primary" /> : <Sparkles className="h-5 w-5 text-primary" />}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-primary uppercase">Expert Flow</p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-primary font-bold text-sm mb-4">{project.subtitle}</p>

                  <p className="text-muted-foreground/80 mb-6 leading-relaxed font-light text-base">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="rounded-xl px-6" onClick={() => openGallery(project.id)}>
                      Explore Workflow
                    </Button>
                    {project.demoVideo && (
                      <Button variant="ghost" size="lg" className="rounded-xl px-6 border border-border" onClick={() => { setActiveProject(project.id); setShowGallery(true); }}>
                        <Play className="mr-2 h-4 w-4" />
                        Watch Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Simplified Architecture Flow */}
                <div className="lg:w-1/3 w-full bg-secondary rounded-2xl p-6 border border-border">
                  <div className="flex flex-col gap-4">
                    {project.steps.map((step, i) => (
                      <div key={step.label} className="relative flex items-center gap-4 bg-background/60 p-3 rounded-xl border border-border">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-xs">{step.label}</p>
                          <span className="text-[10px] text-muted-foreground font-light">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 shadow-premium"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-500">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-3">{service.title}</h4>
              <p className="text-muted-foreground/80 text-[13px] leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-4xl p-0 bg-card backdrop-blur-xl border border-border overflow-hidden rounded-2xl">
          <div className="relative">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-bold text-base">
                {currentProject?.title}
              </h3>
            </div>

            {currentProject?.id === 'veo3' && currentProject.demoVideo && (
              <div className="p-4">
                <div className="rounded-xl overflow-hidden border border-border bg-black">
                  <video src={currentProject.demoVideo} controls className="w-full" autoPlay muted />
                </div>
              </div>
            )}

            {galleryImages.length > 0 && (
              <div className="p-4">
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border border-border">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={galleryImages[currentImage]}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </AnimatePresence>
                  {galleryImages.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <button onClick={prevImage} className="p-2 rounded-lg bg-black/40 hover:bg-primary transition-colors"><ChevronLeft className="h-5 w-5" /></button>
                      <button onClick={nextImage} className="p-2 rounded-lg bg-black/40 hover:bg-primary transition-colors"><ChevronRight className="h-5 w-5" /></button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Automation;
