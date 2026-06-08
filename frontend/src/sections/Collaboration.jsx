import React from "react";
import { Button } from "@/components/Button";
import { ArrowRight, Mail, MessageSquare, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export default function Collaboration() {
  return (
    <section id="collaboration" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Collaboration background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating dots (same style as Hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Let’s Work Together
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Open to{" "}
            <span className="text-primary glow-text">collaboration</span>
            <br />
            & exciting opportunities
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground">
            I’m always interested in collaborating on innovative projects,
            full-stack applications, and impactful ideas. Let’s build something
            amazing together.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg">
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowRight className="w-5 h-5" />
            </Button>

            <a href="https://github.com/Userunknown84" target="_blank">
              <AnimatedBorderButton>
                <Github className="w-5 h-5" />
                GitHub
              </AnimatedBorderButton>
            </a>

            <a href="#contact">
              <AnimatedBorderButton>
                <MessageSquare className="w-5 h-5" />
                Contact Form
              </AnimatedBorderButton>
            </a>
          </div>

          {/* Footer note */}
          <p className="text-sm text-muted-foreground pt-6">
            Available for internships, and full-time roles
          </p>
        </div>
      </div>
    </section>
  );
}