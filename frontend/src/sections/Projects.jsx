import { Github, ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Spam Detection System",
    description:
      "A full-stack application that detects Spam / Smishing / Offensive content using Machine Learning.",
    tags: ["React", "FastAPI", "Python", "Machine Learning","Nodejs","React Native"],
    github: "https://github.com/Userunknown84/Spam-Detection-System",
  },
  {
    title: "Video Repurposer",
    description:
      "Video Repurposer is an AI-powered video repurposing tool that transforms long-form videos into short, engaging reels/shorts automatically.It combines Speech AI + Computer Vision + Human-Computer Interaction (HCI) to deliver a fast, interactive, and user-friendly experience.",
    tags: ["Python", "Streamlit", "Claude API (Anthropic)"],
    github: "https://github.com/Userunknown84/Video-Repurposer",
  },
  {
    title: "StemoraVideoCall",
    description:
      "Streamora is a real-time video calling and meeting web application built using React.js, Node.js, Express, and WebRTC (or socket-based communication). It allows users to create or join meetings, chat in real-time, and maintain meeting history.",
    tags: ["Reactks", "Nodejs","Expressjs","Mongodb","Material UI","JWT"],
    github: "https://github.com/Userunknown84/StemoraVideoCall",
  },
  {
    title: "Wanderlust",
    description:
      "A full-stack travel listings platform where users can explore destinations, list their own properties, and leave reviews. Built with Node.js, Express, MongoDB, leaflet and Passport.js for authentication.",
    tags: ["Nodejs", "Expressjs", "MongoDb", "Passport.js","Cloudinary"],
    github: "https://github.com/Userunknown84/Wanderlust",
  },
  {
    title: "PulsePoint AI ",
    description:
      "PulsePoint AI is a web application that converts long-form videos into 3–5 short, viral reels using AI. Users can upload a local video or provide a YouTube / Google Drive link, and the app automatically:PulsePoint AI is a web application that converts long-form videos into 3–5 short, viral reels using AI. Users can upload a local video or provide a YouTube / Google Drive link, and the app automatically:",
    tags: ["Python", "Streamlit", "FFmpeg", "Google Gemini (Flash)","OpenAI Whisper"],
    github: "https://github.com/Userunknown84/PulseAi",
  },
   {
    title: "Zerodha Clone",
    description:
      "StockGame is a Zerodha-inspired trading and investment simulation platform. It consists of a React frontend, Node.js + Express backend, and a dashboard to visualize trading and investment data.",
    tags: ["Nodejs", "Expressjs", "Axios", "Reactjs","Tailwind","MongoDB","JWT"],
    github: "https://github.com/Userunknown84/Zerodha",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6
            animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of projects showcasing my expertise in full-stack
            development, backend engineering, and AI-powered applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                glass
                rounded-2xl
                p-8
                border border-primary/20
                hover:border-primary/50
                hover:scale-[1.02]
                transition-all duration-300
                animate-fade-in
              "
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Title */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="
                      px-3 py-1.5
                      rounded-full
                      bg-surface
                      text-xs
                      font-medium
                      border border-border/50
                      text-muted-foreground
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <AnimatedBorderButton>
                  <Github className="w-5 h-5" />
                  View Source Code
                </AnimatedBorderButton>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Userunknown84"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              <Github className="w-5 h-5" />
              View All Projects
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};