import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Workflow, Mail, MessageSquare, ArrowRight, ArrowLeft, FileSpreadsheet, Bot, CheckCircle, ChevronLeft, ChevronRight, Brain, Sparkles, Globe, Video, Image, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

import workflowImg1 from "@/assets/automation-workflow-1.png";
import workflowImg2 from "@/assets/automation-workflow-2.png";
import workflowImg3 from "@/assets/automation-workflow-3.png";
import veo3Workflow from "@/assets/veo3-workflow.png";
import veo3Demo from "@/assets/veo3-demo.mp4";
import hrWorkflow from "@/assets/hr-workflow.png";
import telegramBotWorkflow from "@/assets/telegram-bot-workflow.png";

const workflowImages = [workflowImg1, workflowImg2, workflowImg3];

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

const AutomationProject = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const project = featuredProjects.find(p => p.id === projectId);
  const galleryImages = project?.workflowImages || (project?.workflowImage ? [project.workflowImage] : []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/#automation">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Automation
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link to="/#automation">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <Button asChild className="shadow-glow">
            <Link to="/#contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Project Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-4">
                AI & Automation Project
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-primary font-medium">{project.subtitle}</p>
            </div>

            {/* Main Project Card */}
            <div className="relative p-6 md:p-10 rounded-2xl bg-card border border-border/50 overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      {project.id === 'veo3' ? <Video className="h-7 w-7 text-primary" /> : <Sparkles className="h-7 w-7 text-primary" />}
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/15 text-accent">
                      Featured Project
                    </span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <h3 className="font-display font-semibold text-lg mb-4">Key Features</h3>
                  <div className="space-y-3 mb-8">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3 text-base">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm rounded-lg bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" onClick={() => setShowGallery(true)} className="group">
                      <Workflow className="mr-2 h-4 w-4" />
                      View Workflow
                    </Button>
                    {project.demoVideo && (
                      <Button variant="outline" onClick={() => setShowGallery(true)} className="group">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Demo
                      </Button>
                    )}
                    <Button className="group shadow-glow" asChild>
                      <Link to="/#contact">
                        Automate Your Business
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Workflow Steps */}
                <div className="lg:w-1/3 flex flex-col items-center gap-4 w-full">
                  <h3 className="font-display font-semibold text-lg mb-2 w-full text-center lg:text-left">Workflow Steps</h3>
                  {project.steps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4 w-full"
                    >
                      <div className="w-14 h-14 rounded-xl bg-secondary border border-border/50 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{step.label}</p>
                        <span className="text-sm text-muted-foreground">{step.desc}</span>
                      </div>
                      {i < project.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90 lg:rotate-0" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <div className="text-center">
              <h3 className="font-display font-semibold text-xl mb-6">Explore Other Projects</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {featuredProjects.filter(p => p.id !== projectId).map((p) => (
                  <Button key={p.id} variant="outline" asChild>
                    <Link to={`/automation/${p.id}`}>
                      {p.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Workflow Gallery / Video Modal */}
      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-4xl p-0 bg-card border-border/50 overflow-hidden">
          <div className="relative">
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <h3 className="font-display font-semibold">
                {project.id === 'veo3' ? 'Veo3 Workflow & Demo' : 'Workflow Screenshots'}
              </h3>
              {galleryImages.length > 1 && (
                <span className="text-sm text-muted-foreground">
                  {currentImage + 1} / {galleryImages.length}
                </span>
              )}
            </div>

            {project.id === 'veo3' && project.demoVideo && (
              <div className="p-4">
                <video
                  src={project.demoVideo}
                  controls
                  className="w-full rounded-lg"
                  autoPlay
                  muted
                >
                  Your browser does not support the video tag.
                </video>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  AI-generated UGC video ad demo
                </p>
              </div>
            )}

            {galleryImages.length > 0 && (
              <>
                <div className="relative aspect-video bg-secondary/50">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={galleryImages[currentImage]}
                      alt={`Workflow step ${currentImage + 1}`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </AnimatePresence>

                  {galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-background/90 border border-border/50 flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-background/90 border border-border/50 flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>

                {galleryImages.length > 1 && (
                  <div className="flex gap-2 p-4 justify-center">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AutomationProject;
