import { Heart, Coffee, Palette, Code } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Designer",
      description: "I love creating beautiful, user-centered designs that make a difference."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Developer",
      description: "Bringing designs to life with clean, efficient, and scalable code."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Thinker",
      description: "Always exploring new trends and pushing creative boundaries."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Detail Oriented",
      description: "Every pixel matters. I believe in perfection through attention to detail."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up fade-in-section">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Passionate AI/ML Engineer building intelligent, impactful applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-slide-in-left fade-in-section">
              <div className="space-y-5">
                <p className="text-foreground/80 leading-relaxed text-sm">
                  I am a passionate AI/ML Engineer with solid experience in machine learning and deep learning. 
                  Through hackathons, research projects, and internships, I've gained hands-on experience 
                  in solving real-world problems with practical solutions. Proficient in collaboration and 
                  effective communication, I merge technical knowledge with an analytical mind to build 
                  meaningful, intelligent applications.
                </p>
                
                <p className="text-foreground/80 leading-relaxed text-sm">
                  A firm believer in lifelong learning, I stay updated with the latest AI developments 
                  and aim to contribute to cutting-edge, socially impactful technology projects.
                </p>

                {/* Education with Pinkish Highlights */}
                <div className="p-5 glass-card relative group hover:shadow-glow transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-rose-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10">
                    <h4 className="font-serif font-semibold text-primary mb-2 text-base">Education</h4>
                    <p className="text-foreground/80 leading-relaxed text-sm">
                      <strong>B.Tech (AIML)</strong><br />
                      R.M.D Engineering College<br />
                      <span className="text-foreground/60">May 2023 – May 2027</span>
                    </p>
                  </div>
                </div>

                {/* Personal Stats with Pinkish Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 glass-card group hover:shadow-glow transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="text-xl font-bold text-primary mb-1">6+</div>
                      <div className="text-xs text-foreground/60">Major Projects</div>
                    </div>
                  </div>
                  <div className="text-center p-4 glass-card group hover:shadow-glow transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="text-xl font-bold text-primary mb-1">10+</div>
                      <div className="text-xs text-foreground/60">Certifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background & Content */}
            <div className="relative animate-slide-in-right fade-in-section">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-200/20 rounded-full blur-3xl" />
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-rose-200/20 rounded-full blur-2xl" />
              
              {/* Floating Decorative Lines */}
              <div className="absolute top-1/4 right-1/4 w-12 h-0.5 bg-gradient-primary rounded-full opacity-30 animate-float" />
              <div className="absolute bottom-1/3 left-1/3 w-10 h-0.5 bg-gradient-secondary rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }} />
              
              {/* Main Content Card with Pinkish Highlights */}
              <div className="relative glass-card p-6 rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 bg-white/50 rounded-2xl hover:shadow-glow transition-all duration-500 group animate-fade-in-up stagger-${index + 1} hover:scale-105 relative`}
                    >
                      {/* Pinkish highlight effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h3 className="font-serif font-semibold text-foreground mb-2 text-base group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
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

export default AboutSection;