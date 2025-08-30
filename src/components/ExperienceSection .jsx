import {
  Calendar,
  Users,
  Target,
  Github,
  ExternalLink,
  Brain,
} from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Research Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <div className="relative group">
          <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Undergraduate Research Assistant
                  </h3>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full mt-4 md:mt-0 border border-primary/10">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    Sept 2024 – May 2025
                  </span>
                </div>
              </div>

              <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border-l-4 border-primary/80">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      RiverFood-ML-Regression Project
                    </h4>
                  </div>
                  <a
                    href="https://github.com/Spacecraft134/RiverFood-ML-Regression"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 w-fit"
                  >
                    <Github className="h-4 w-4" />
                    View Project
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="group/item flex items-start gap-6 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover/item:scale-110 transition-transform duration-300">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold mb-2 group-hover/item:text-primary transition-colors">
                      ML Development
                    </h5>
                    <p className="text-foreground/70 leading-relaxed">
                      Architected and implemented ensemble learning pipelines
                      using Random Forest and XGBoost regressors with
                      <span className="inline-flex items-center gap-1 mx-1 px-2 py-1 bg-primary/20 text-primary font-bold text-sm rounded-lg">
                        K-Fold cross-validation
                      </span>
                      to analyze donation patterns across 9,800+ records,
                      achieving robust generalization through systematic
                      hyperparameter optimization and addressing the classic
                      overfitting challenges in behavioral prediction models
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-6 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover/item:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold mb-2 group-hover/item:text-primary transition-colors">
                      Feature Selection & Analysis
                    </h5>
                    <p className="text-foreground/70 leading-relaxed">
                      Executed comprehensive feature importance analysis using
                      SelectKBest and statistical significance testing to reduce
                      <span className="text-foreground font-semibold">
                        {" "}
                        51 input variables to the most predictive 10 features
                      </span>
                      , discovering that donor segmentation strategies focusing
                      on
                      <span className="inline-flex items-center gap-1 mx-1 px-2 py-1 bg-primary/20 text-primary font-bold text-sm rounded-lg">
                        campaign lifecycle management
                      </span>
                      could drive exponentially higher conversion rates
                    </p>
                  </div>
                </div>

                <div className="group/item flex items-start gap-6 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover/item:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold mb-2 group-hover/item:text-primary transition-colors">
                      Team Collaboration & Research Impact
                    </h5>
                    <p className="text-foreground/70 leading-relaxed">
                      Worked with a
                      <span className="text-foreground font-semibold">
                        {" "}
                        15-member research team{" "}
                      </span>
                      to turn technical findings into practical recommendations
                      for a food pantry serving
                      <span className="inline-flex items-center gap-1 mx-1 px-2 py-1 bg-primary/20 text-primary font-bold text-sm rounded-lg">
                        2,500+ community members weekly
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h5 className="text-lg font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Technologies & Methodologies
                  </h5>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Python",
                    "Pandas",
                    "Numpy",
                    "XGBoost",
                    "Random Forest",
                    "Statistical Analysis",
                    "SNAP Framework",
                    "K-fold Validation",
                    "Predictive Modeling",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="group/tech relative px-4 py-2 bg-primary/6 hover:bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/15 hover:border-primary/25 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      <span className="relative z-10">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
