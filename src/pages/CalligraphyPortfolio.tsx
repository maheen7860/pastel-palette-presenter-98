import { useState, useEffect } from 'react';
import { Instagram, ArrowLeft, ExternalLink, Sparkles, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';

const CalligraphyPortfolio = () => {
  const [activeStyle, setActiveStyle] = useState('all');

  useEffect(() => {
    // Add scroll fade effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const calligraphyStyles = [
    { id: 'modern', name: 'Modern Script', count: 12 },
    { id: 'traditional', name: 'Traditional', count: 8 },
    { id: 'decorative', name: 'Decorative', count: 15 },
    { id: 'minimalist', name: 'Minimalist', count: 6 }
  ];

  const featuredWorks = [
    {
      title: "Elegant Wedding Invitations",
      style: "modern",
      description: "Custom calligraphy for special occasions with delicate flourishes"
    },
    {
      title: "Inspirational Quotes",
      style: "decorative", 
      description: "Motivational typography with artistic embellishments"
    },
    {
      title: "Corporate Branding",
      style: "minimalist",
      description: "Clean, professional lettering for business applications"
    },
    {
      title: "Artistic Compositions",
      style: "traditional",
      description: "Classical calligraphy with timeless appeal"
    }
  ];

  const goHome = () => {
    window.location.href = '/';
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/__.dreamydairy.__?igsh=aTAyeGl4czAzZXpz', '_blank');
  };

  const filteredWorks = activeStyle === 'all' 
    ? featuredWorks 
    : featuredWorks.filter(work => work.style === activeStyle);

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-rose-50/20 to-pink-100/30" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-rose-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <button 
              onClick={goHome}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </button>
            
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white text-xs font-medium rounded-full shadow-soft">
                <Sparkles size={14} />
                Calligraphy Artist
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Dreamy Dairy
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-medium">Calligraphy & Hand Lettering</span>
            </h1>
            
            <p className="text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Creating beautiful, personalized calligraphy that tells your story through elegant letterforms and artistic expression
            </p>
            
            <button 
              onClick={openInstagram}
              className="btn-hero inline-flex items-center gap-3 group"
            >
              <Instagram size={18} />
              <span>View Instagram Gallery</span>
              <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Style Categories */}
      <section className="py-16 fade-in-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-8">
              Calligraphy Styles
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveStyle('all')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeStyle === 'all'
                    ? 'bg-gradient-primary text-white shadow-soft'
                    : 'bg-white/50 text-foreground/70 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                All Styles
              </button>
              {calligraphyStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeStyle === style.id
                      ? 'bg-gradient-primary text-white shadow-soft'
                      : 'bg-white/50 text-foreground/70 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {style.name} ({style.count})
                </button>
              ))}
            </div>

            {/* Featured Works Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 group"
                >
                  {/* Mock Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-card rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="relative z-10 text-center">
                      <Heart className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                      <p className="text-xs text-foreground/50 font-medium">Calligraphy Sample</p>
                    </div>
                    {/* Pinkish highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-rose-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {work.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                        {calligraphyStyles.find(s => s.id === work.style)?.name}
                      </span>
                      <button className="text-primary hover:text-primary/80 transition-colors group/btn">
                        <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 fade-in-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Calligraphy Services
              </h2>
              <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Wedding Invitations", description: "Elegant hand-lettered wedding stationery" },
                { name: "Corporate Branding", description: "Professional calligraphy for business identity" },
                { name: "Custom Quotes", description: "Personalized motivational and inspirational pieces" },
                { name: "Event Signage", description: "Beautiful hand-lettered signs and displays" }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="glass-card p-5 rounded-2xl hover:shadow-glow transition-all duration-300 group border border-white/20 hover:border-primary/20"
                >
                  <div className="relative">
                    <h3 className="font-serif font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                    {/* Pinkish highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={openInstagram}
                className="btn-outline inline-flex items-center gap-2 group"
              >
                <Instagram size={16} />
                <span>Follow on Instagram</span>
                <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalligraphyPortfolio;