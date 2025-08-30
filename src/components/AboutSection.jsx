import { Award, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/3 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/2 rounded-full opacity-30"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education & Background
                </h3>
              </div>

              <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-950/20 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      University of Wisconsin–Madison
                    </h4>
                    <p className="text-foreground/70 mb-3 leading-relaxed">
                      Double Major in Computer Science and Data Science. Junior
                      year student focused on full-stack development and machine
                      learning applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Computer Science
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Data Science
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
              <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
                <p>
                  I'm passionate about building intelligent full-stack
                  applications and machine learning models that solve real-world
                  problems. My work bridges the gap between complex data
                  analysis and user-friendly software solutions.
                </p>
                <p>
                  I specialize in developing scalable applications using{" "}
                  <span className="text-primary font-semibold">Java</span>,{" "}
                  <span className="text-primary font-semibold">
                    Spring Boot
                  </span>
                  , <span className="text-primary font-semibold">React</span>,
                  and <span className="text-primary font-semibold">Python</span>
                  , focusing on robust backend architecture and intuitive user
                  experiences.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get In Touch
                <div className="w-2 h-2 bg-primary-foreground rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Certifications & Achievements
              </h3>
            </div>

            <div className="space-y-4">
              <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-950/20 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      AWS Cloud Practitioner
                    </h4>
                    <p className="text-foreground/70 mb-3 leading-relaxed">
                      Validated cloud fluency and foundational AWS knowledge
                      across core services, security, and architecture.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Cloud Computing
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-950/20 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      AWS AI Practitioner
                    </h4>
                    <p className="text-foreground/70 mb-3 leading-relaxed">
                      Demonstrated expertise in artificial intelligence and
                      machine learning services on AWS platform.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      AI & Machine Learning
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-950/20 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      Spring Boot Full Stack
                    </h4>
                    <p className="text-foreground/70 mb-3 leading-relaxed">
                      Certified in building end-to-end applications with Spring
                      Boot and modern web frameworks.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Full-Stack Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
