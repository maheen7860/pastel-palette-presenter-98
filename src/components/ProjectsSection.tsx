import { ExternalLink, Github, ChevronRight, Sparkles, Heart, Flower2, Palette, Crown } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "HIF Detection & Interruption System",
      description: "Advanced AI system for detecting and interrupting harmful interference patterns using machine learning algorithms and real-time monitoring.",
      techStack: ["Python", "TensorFlow", "OpenCV", "IoT"],
      featured: true,
      icon: Sparkles,
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "IoT & AI-Powered Milk Quality Assurance System",
      description: "Smart IoT solution integrating AI models to ensure milk quality through automated testing and real-time monitoring systems.",
      techStack: ["IoT", "Python", "Machine Learning", "Sensors"],
      featured: true,
      icon: Heart,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Orchard Guard",
      description: "Intelligent monitoring system for orchards using computer vision and AI to detect threats and optimize crop management.",
      techStack: ["Computer Vision", "Python", "AI", "Agriculture Tech"],
      featured: false,
      icon: Flower2,
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      title: "InVisiVoice",
      description: "Innovative voice-based interface system leveraging natural language processing and speech recognition technologies.",
      techStack: ["NLP", "Speech Recognition", "Python", "AI"],
      featured: false,
      icon: Palette,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Automated Car Parking Management System",
      description: "Smart parking solution using computer vision and automation to optimize parking space utilization and management.",
      techStack: ["Computer Vision", "Automation", "Python", "IoT"],
      featured: false,
      icon: Crown,
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-rose-50/20 to-purple-50/30" />
      <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100/60 to-rose-100/60 text-primary rounded-full text-xs font-medium mb-4 border border-pink-200/30">
              <Sparkles size={14} className="animate-pulse" />
              Portfolio Showcase
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-400 rounded-full" />
              <div className="w-8 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-rose-400 to-transparent rounded-full" />
            </div>
            <p className="text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative AI/ML solutions with elegance and precision
            </p>
          </div>

          {/* Elegant Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 2).map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02] animate-fade-in-up fade-in-section"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="relative p-8 h-full bg-white/70 backdrop-blur-xl border border-white/40 hover:border-pink-200/60 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-pink-500/10">
                    
                    {/* Elegant Featured Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-medium rounded-full shadow-lg animate-pulse-soft">
                      <span className="flex items-center gap-2">
                        <Sparkles size={12} />
                        Featured
                      </span>
                    </div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.color} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent size={20} className="text-white drop-shadow-sm" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-16 space-y-6">
                      <div>
                        <h3 className="font-serif font-bold text-xl md:text-2xl text-foreground mb-4 group-hover:text-pink-600 transition-colors duration-500 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                          {project.description}
                        </p>
                      </div>

                      {/* Elegant Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-pink-100/80 to-rose-100/80 text-pink-700 rounded-full border border-pink-200/40 hover:from-pink-200/80 hover:to-rose-200/80 hover:scale-105 transition-all duration-300 hover:shadow-sm backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-between pt-4">
                        <button 
                          onClick={() => {
                            let url = '';
                            if (project.title === "IoT & AI-Powered Milk Quality Assurance System") {
                              url = "https://github.com/maheen7860/Milk-Quality-Checker-.git";
                            }
                            if (url) {
                              window.open(url, '_blank');
                            }
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-medium rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group/btn"
                        >
                          <span>Explore Project</span>
                          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        
                        <div className="flex items-center gap-2 text-xs text-pink-600">
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                          <span className="font-medium">Live & Active</span>
                        </div>
                      </div>
                    </div>

                    {/* Elegant Decorative Elements */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Other Projects - Compact Elegant Layout */}
          <div className="space-y-4">
            {projects.slice(2).map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={index + 2}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.01] animate-fade-in-up fade-in-section"
                  style={{animationDelay: `${(index + 2) * 0.1}s`}}
                >
                  <div className="p-6 bg-white/60 backdrop-blur-sm border border-white/30 hover:border-pink-200/40 transition-all duration-500 group-hover:shadow-lg">
                    <div className="flex items-center gap-6">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={18} className="text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-pink-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 text-xs font-medium bg-pink-100/60 text-pink-700 rounded-lg border border-pink-200/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-1 text-xs text-pink-600/70">
                              +{project.techStack.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action */}
                      <button 
                        onClick={() => {
                          let url = '';
                          if (project.title === "Orchard Guard") {
                            url = "https://github.com/Mohxmd-01/ORCHARD_GUARD.git";
                          } else if (project.title === "Automated Car Parking Management System") {
                            url = "https://drive.google.com/file/d/1R62MByK2XHZm1sPKy0hPF4TNAwe3mX3b/view?usp=sharing";
                          } else if (project.title === "InVisiVoice") {
                            url = "https://drive.google.com/file/d/1QsEbCblRKgxxFJ3Ey1pGNx0Co6aveRHq/view?usp=sharing";
                          }
                          if (url) {
                            window.open(url, '_blank');
                          }
                        }}
                        className="px-4 py-2 text-sm text-pink-600 hover:text-white hover:bg-pink-500 border border-pink-200 hover:border-pink-500 rounded-full transition-all duration-300 group/btn"
                      >
                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Call to Action */}
          <div className="flex justify-center mt-16 animate-fade-in-up fade-in-section">
            <button className="btn-hero inline-flex items-center gap-3 group px-8 py-4 text-base font-medium">
              <Sparkles size={18} />
              <span>Discover More Projects</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;