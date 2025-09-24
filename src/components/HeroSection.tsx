import { ArrowDown, Download, MessageCircle, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Light Pinkish Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100" />
      
      {/* Subtle Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 via-transparent to-rose-100/30" />
      
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-20 h-20 bg-rose-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-300/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Professional Frame */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src={profileImage}
                  alt="Mahadiya Maheen K F - AI/ML Engineer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                {/* Professional Ring Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-pink-200/50 scale-105"></div>
              </div>
              {/* Professional Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
                <span>AI/ML Expert</span>
              </div>
            </div>
          </div>

          {/* Main Heading with Professional Typography */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4 animate-fade-in-up stagger-1">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent block md:inline">
              Mahadiya Maheen K F
            </span>
          </h1>

          {/* Professional Tagline */}
          <div className="mb-6 animate-fade-in-up stagger-2">
            <p className="text-lg md:text-xl text-pink-600 font-serif font-medium mb-2">
              AI/ML Engineer
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about building intelligent, impactful applications that bridge 
              the gap between <em className="text-pink-600 font-medium">innovation</em> and <em className="text-rose-600 font-medium">elegance</em>
            </p>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 animate-fade-in-up stagger-3">
            <button onClick={scrollToProjects} className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2.5 rounded-full font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 group text-sm">
              <MessageCircle size={18} />
              <span>View My Work</span>
              <div className="w-0 group-hover:w-3 transition-all duration-300 overflow-hidden">
                <ArrowDown size={14} className="rotate-[-90deg]" />
              </div>
            </button>
            
            <button onClick={scrollToContact} className="border-2 border-pink-500 text-pink-600 px-6 py-2.5 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group text-sm">
              <MessageCircle size={18} />
              <span>Let's Connect</span>
              <div className="w-0 group-hover:w-3 transition-all duration-300 overflow-hidden">
                <ArrowDown size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>

      
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
    </section>
  );
};

export default HeroSection;