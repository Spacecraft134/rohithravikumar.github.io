import { Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 relative">
      {/* Subtle background shapes */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-primary/5 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full opacity-30"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <div className="text-center border-border pt-10">
          <div className="inline-flex flex-col items-center gap-3">
            <p className="text-foreground/70 text-base">Reach me at:</p>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a
                href="https://www.linkedin.com/in/rohith-ravikumar-206a87319/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground font-medium rounded-full hover:shadow-md hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                @RohithRavikumar
              </a>
              <span className="text-foreground/50 hidden sm:block">or</span>
              <a
                href="mailto:rravikumar3@wisc.edu"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground font-medium rounded-full hover:shadow-md hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-4 w-4 text-primary" />
                rravikumar3@wisc.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
