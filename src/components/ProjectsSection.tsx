import { ExternalLink, Github, ChevronRight, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "HIF Detection & Interruption System",
      description: "Advanced AI system for detecting and interrupting harmful interference patterns using machine learning algorithms and real-time monitoring.",
      techStack: ["Python", "TensorFlow", "OpenCV", "IoT"],
      featured: true
    },
    {
      title: "IoT & AI-Powered Milk Quality Assurance System",
      description: "Smart IoT solution integrating AI models to ensure milk quality through automated testing and real-time monitoring systems.",
      techStack: ["IoT", "Python", "Machine Learning", "Sensors"],
      featured: true
    },
    {
      title: "Orchard Guard",
      description: "Intelligent monitoring system for orchards using computer vision and AI to detect threats and optimize crop management.",
      techStack: ["Computer Vision", "Python", "AI", "Agriculture Tech"],
      featured: false
    },
    {
      title: "InVisiVoice",
      description: "Innovative voice-based interface system leveraging natural language processing and speech recognition technologies.",
      techStack: ["NLP", "Speech Recognition", "Python", "AI"],
      featured: false
    },
    {
      title: "Automated Car Parking Management System",
      description: "Smart parking solution using computer vision and automation to optimize parking space utilization and management.",
      techStack: ["Computer Vision", "Automation", "Python", "IoT"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative AI/ML solutions that solve real-world problems
            </p>
          </div>

          {/* Projects Grid - Enhanced Professional Layout */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-[1.02] animate-fade-in-up fade-in-section ${
                  index < 2 ? 'stagger-1' : index < 4 ? 'stagger-2' : 'stagger-3'
                }`}
              >
                {/* Professional Project Card with Better Spacing */}
                <div className={`glass-card p-6 md:p-8 h-full hover:shadow-glow transition-all duration-700 relative border border-white/30 hover:border-primary/30 backdrop-blur-xl group-hover:bg-white/70 ${
                  project.featured ? 'bg-gradient-to-br from-pink-50/50 to-rose-50/30' : ''
                }`}>
                  
                  {/* Enhanced Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-primary text-white text-xs font-medium rounded-full shadow-soft animate-pulse-soft border border-white/20">
                      <span className="flex items-center gap-1">
                        Featured 
                        <Sparkles size={12} className="animate-pulse" />
                      </span>
                    </div>
                  )}
                  
                  {/* Pinkish Highlight Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-rose-100/10 to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

                  {/* Content Layout */}
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    
                    {/* Project Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack with Pinkish Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-pink-100/60 to-rose-100/60 text-primary rounded-full border border-primary/20 hover:bg-gradient-to-r hover:from-pink-200/80 hover:to-rose-200/80 hover:scale-105 transition-all duration-300 hover:shadow-soft backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Area */}
                    <div className="flex flex-col justify-center items-start md:items-end space-y-3">
                      <button 
                        onClick={() => {
                          let url = '';
                          if (project.title === "IoT & AI-Powered Milk Quality Assurance System") {
                            url = "https://github.com/maheen7860/Milk-Quality-Checker-.git";
                          } else if (project.title === "Orchard Guard") {
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
                        className="btn-outline text-xs px-4 py-2 inline-flex items-center gap-2 group/btn hover:shadow-soft"
                      >
                        <span>View Project</span>
                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {/* Project Status Indicator */}
                      <div className="flex items-center gap-2 text-xs text-foreground/60">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Live Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements with Pink Theme */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-soft" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-rose-200/20 to-pink-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float-gentle" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in-up stagger-4 fade-in-section">
            <button className="btn-outline inline-flex items-center gap-2 group text-sm px-4 py-2">
              View All Projects
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;