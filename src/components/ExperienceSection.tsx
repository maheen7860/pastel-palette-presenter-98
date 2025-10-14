import { MapPin, Calendar, Building2 } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    title: "Frontend Developer Intern",
    company: "Celstream Technologies Private Limited",
    period: "JUN 2025 – JULY 2025",
    location: "Banglore, India",
    description: "Intern at Celstream Technologies – Successfully completed a one-month internship from 4 June 2025 to 4 July 2025, where I worked on the project titled \"Task Management System.\" During this internship, I developed a dynamic task management system using React, applying core concepts such as component-based architecture, React Hooks, Redux Toolkit for global state management, and React Router for protected routing. I also implemented advanced features including code splitting with lazy loading, session timeout handling, and drag-and-drop task workflows. This experience significantly strengthened my skills in scalable frontend application development, while providing real-world exposure to modern web technologies and enhancing my ability to deliver efficient, production-ready solutions within a professional environment.",
    achievements: [
      "Developed a comprehensive Task Management System using React",
      "Implemented advanced state management with Redux Toolkit",
      "Created secure routing systems with authentication",
      "Built drag-and-drop interfaces for enhanced user experience",
      "Optimized performance with code splitting and lazy loading"
    ]
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-16 w-36 h-36 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-16 w-28 h-28 bg-secondary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Real-world experience building scalable applications
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Decorative Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block" />
            
            {/* Experience Card */}
            <div className="relative animate-fade-in-up">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-white shadow-soft hidden md:block" />
              
              {/* Main Content */}
              <div className="md:ml-20 glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500">
                {/* Header Info */}
                <div className="mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <button 
                      onClick={() => window.open("https://drive.google.com/file/d/1xCMR0mt-pL8VOkplf_ndMFYb1i80eOIs/view?usp=sharing", '_blank')}
                      className="font-serif font-bold text-2xl text-foreground mb-2 lg:mb-0 hover:text-primary transition-colors cursor-pointer"
                    >
                      {experience.title}
                    </button>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Calendar size={14} />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Building2 size={14} />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-foreground/80 leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-serif font-semibold text-lg text-foreground mb-4">
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {experience.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className={`flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/10 rounded-full blur-xl opacity-50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-primary/10 rounded-full blur-lg opacity-60" />
              </div>
            </div>

            {/* Future Goals Section */}
            <div className="mt-12 text-center animate-fade-in-up stagger-2">
              <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
                <h4 className="font-serif font-semibold text-lg text-foreground mb-3">
                  Looking Forward
                </h4>
                <p className="text-foreground/70 leading-relaxed">
                  Eager to apply my growing expertise in AI/ML and frontend development to contribute to innovative projects 
                  that create meaningful impact in technology and society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;