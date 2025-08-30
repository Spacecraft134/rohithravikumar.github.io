import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Database, Settings, Sparkles } from "lucide-react";

const skills = [
  { name: "Java", level: 90, category: "languages" },
  { name: "Python", level: 75, category: "languages" },
  { name: "JavaScript", level: 85, category: "languages" },
  { name: "R", level: 60, category: "languages" },
  { name: "HTML", level: 80, category: "languages" },
  { name: "CSS", level: 80, category: "languages" },

  { name: "Spring Framework", level: 85, category: "frameworks" },
  { name: "Spring Boot", level: 85, category: "frameworks" },
  { name: "React", level: 75, category: "frameworks" },
  { name: "Spring Security", level: 65, category: "frameworks" },
  { name: "Spring Data JPA", level: 85, category: "frameworks" },
  { name: "Hibernate", level: 85, category: "frameworks" },
  { name: "Spring MVC", level: 90, category: "frameworks" },
  { name: "Scikit-Learn", level: 70, category: "frameworks" },
  { name: "Pandas", level: 50, category: "frameworks" },
  { name: "NumPy", level: 50, category: "frameworks" },
  { name: "Tailwind CSS", level: 65, category: "frameworks" },

  { name: "AWS EC2", level: 75, category: "tools" },
  { name: "AWS S3", level: 75, category: "tools" },
  { name: "AWS RDS", level: 70, category: "tools" },
  { name: "MySQL", level: 80, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "JWT", level: 75, category: "tools" },
  { name: "Maven", level: 70, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Eclipse", level: 90, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Firebase", level: 45, category: "tools" },
  { name: "Jupyter Notebooks", level: 75, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
];

const categories = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "languages", label: "Languages", icon: Code2 },
  { id: "frameworks", label: "Frameworks", icon: Database },
  { id: "tools", label: "Tools", icon: Settings },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getCategoryIcon = (category) => {
    const categoryData = categories.find((cat) => cat.id === category);
    return categoryData ? categoryData.icon : Code2;
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(30deg,theme(colors.primary)_12%,transparent_12.5%,transparent_87%,theme(colors.primary)_87.5%,theme(colors.primary))] bg-[length:20px_35px]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card text-foreground hover:bg-primary/5 border-border hover:border-primary/30"
                )}
              >
                <Icon className="h-4 w-4" />
                {category.label}
                {activeCategory === category.id && (
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = getCategoryIcon(skill.category);
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: "fade-in 0.6s ease-out forwards",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>

                <div className="relative">
                  <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/80 origin-left transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>

                  <div className="flex justify-between text-xs text-foreground/60 mt-2">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
