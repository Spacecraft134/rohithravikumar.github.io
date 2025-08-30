import { ArrowRight, Github } from "lucide-react";

import chefManiaImage from "./assets/chef_Mania_backgroud.png";
import dineFlowImage from "./assets/dineFlowLogo.png";
import chatGPTImage from "./assets/ChatGPT.jpg";

const projects = [
  {
    id: 1,
    title: "Chef Mania - Strategic Web Game",
    description:
      "Built competitive AI opponents using minimax algorithm with alpha-beta pruning. Full-stack game with React frontend and Java Spring Boot backend.",
    image: chefManiaImage,
    tags: [
      "React",
      "Java",
      "Spring Boot",
      "Minimax Algorithm",
      "Alpha-Beta Pruning",
      "Firebase Auth",
    ],
    githubUrl: "https://github.com/NiharSrikakolapu3/Chef_Mania",
  },
  {
    id: 2,
    title: "DineFlow - Restaurant Management System",
    description:
      "Complete restaurant management platform with QR code ordering, real-time notifications, and role-based authentication for actual restaurant operations.",
    image: dineFlowImage,
    tags: ["React", "Spring Boot", "MySQL", "AWS", "JWT", "WebSockets"],
    githubUrl: "https://github.com/Spacecraft134/DineFlow",
  },
  {
    id: 3,
    title: "BadgerChatGPT",
    description:
      "Multi-persona chat interface built with React that streams AI responses in real-time using CS571's AI API (OpenAI GPT-4o mini wrapper). Supports persona switching and localStorage persistence.",
    image: chatGPTImage,
    tags: [
      "React",
      "AI",
      "GPT-4o Mini",
      "Streaming",
      "Personas",
      "localStorage",
    ],
    githubUrl: "https://github.com/Spacecraft134/BadgerChatGPT-AI-",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fade-in 0.6s ease-out forwards",
              }}
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end pt-4 border-t border-border">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-foreground/70">Want to see more of my work?</p>
            <a
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Spacecraft134?tab=repositories"
            >
              <Github className="h-5 w-5" />
              Check My Github
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
