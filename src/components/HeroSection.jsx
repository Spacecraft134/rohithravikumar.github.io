import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const titles = [
    "Software Developer",
    "Full-Stack Engineer",
    "Backend Developer",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setCurrentText(currentTitle.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
          }
        } else {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));

          if (currentText === currentTitle) {
            setIsPaused(true);
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isPaused, titles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in block mb-2">
              Hi, I'm
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Rohith
            </span>
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent ml-2 opacity-0 animate-fade-in-delay-2">
              Ravikumar
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center opacity-0 animate-fade-in-delay-3">
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Aspiring{" "}
              <span className="text-primary font-bold relative">
                {currentText}
                <span className="animate-pulse ml-1 text-primary">|</span>
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View My Projects
              <div className="w-2 h-2 bg-primary-foreground rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
