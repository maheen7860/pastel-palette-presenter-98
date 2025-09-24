import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Machine Learning",
      icon: <Code className="w-6 h-6" />,
      description: "Advanced AI algorithms, deep learning, and neural networks"
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      description: "Creating beautiful, user-centered digital experiences"
    },
    {
      name: "Full Stack Development",
      icon: <Globe className="w-6 h-6" />,
      description: "End-to-end web application development and deployment"
    },
    {
      name: "Data Analysis",
      icon: <Database className="w-6 h-6" />,
      description: "Statistical analysis, data visualization, and insights"
    },
    {
      name: "Calligraphy",
      icon: <Zap className="w-6 h-6" />,
      description: "Beautiful hand lettering and artistic typography"
    },
    {
      name: "Java Programming",
      icon: <Code className="w-6 h-6" />,
      description: "Object-oriented programming and software development"
    },
    {
      name: "VFX & Animation",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Visual effects, motion graphics, and digital artistry"
    },
    {
      name: "Data Science",
      icon: <Database className="w-6 h-6" />,
      description: "Predictive modeling, pattern recognition, and analytics"
    }
  ];

  const languages = [
    { name: "English", flag: "" },
    { name: "Tamil", flag: "" },
    { name: "Hindi", flag: "" },
    { name: "Urdu", flag: "" }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up fade-in-section">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              I'm passionate about learning new technologies and constantly improving my skill set.
            </p>
          </div>

          {/* Skills Grid with Enhanced Pinkish Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 fade-in-section">
            {skillCategories.map((skill, index) => (
              <div 
                key={index}
                className={`group glass-card p-5 rounded-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 animate-fade-in-up stagger-${Math.floor(index / 4) + 1} relative`}
              >
                {/* Enhanced Pinkish highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 to-rose-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto relative z-10">
                  {skill.icon}
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="font-serif font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-foreground/70 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Additional decorative pinkish accent */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-pink-300/30 to-rose-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Languages with Pinkish Theme */}
          <div className="text-center animate-fade-in-up stagger-3 fade-in-section">
            <h3 className="font-serif font-semibold text-xl text-foreground mb-6">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((language, index) => (
                <div 
                  key={index}
                  className="glass-card px-5 py-3 rounded-2xl hover:scale-110 hover:shadow-glow transition-all duration-300 animate-fade-in-up group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Pinkish highlight for language cards */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="flex items-center gap-2 relative z-10">
                    <span className="text-lg">{language.flag}</span>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                      {language.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;