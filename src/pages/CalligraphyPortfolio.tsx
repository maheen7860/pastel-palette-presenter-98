import { useState, useEffect } from 'react';
import { Instagram, ArrowLeft, ExternalLink, Sparkles, Heart, Palette, Quote, Crown, Flower2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import calligraphy1 from '@/assets/calligraphy-1.jpg';
import calligraphy2 from '@/assets/calligraphy-2.jpg';
import calligraphy3 from '@/assets/calligraphy-3.jpg';
import calligraphy4 from '@/assets/calligraphy-4.jpg';
import calligraphy5 from '@/assets/calligraphy-5.jpg';

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
      title: "hello ju ne 🌚🤌🏻",
      style: "modern",
      description: "Beautiful floral calligraphy with delicate pink roses and green accents",
      image: calligraphy1
    },
    {
      title: "Let's be authentic 🪄🖇️",
      style: "decorative", 
      description: "Playful bee-themed artwork with vibrant colors and whimsical design",
      image: calligraphy2
    },
    {
      title: "Peace begins with a smile 💜🪽",
      style: "minimalist",
      description: "Serene purple-themed calligraphy with elegant floral elements",
      image: calligraphy3
    },
    {
      title: "~ Keep calm, let ur crown shine🌜✨",
      style: "traditional",
      description: "Colorful motivational artwork with bold geometric patterns",
      image: calligraphy4
    },
    {
      title: "~ you are what you manifest 🪷🌙",
      style: "modern",
      description: "Inspirational quote with delicate pink florals and elegant script",
      image: calligraphy5
    }
  ];

  const goHome = () => {
    window.location.href = '/';
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/__.dreamydairy.__/?igsh=aTAyeGl4czAzZXpz#', '_blank');
  };

  const filteredWorks = activeStyle === 'all' 
    ? featuredWorks 
    : featuredWorks.filter(work => work.style === activeStyle);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Simplified Navigation - Only back button */}
      
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
                  className="glass-card rounded-3xl hover:shadow-glow hover:scale-105 transition-all duration-500 group overflow-hidden"
                >
                  {/* Actual Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={openInstagram}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ExternalLink size={16} className="text-pink-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {work.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {work.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-pink-100/80 to-rose-100/80 text-pink-700 rounded-full border border-pink-200/40">
                        {calligraphyStyles.find(s => s.id === work.style)?.name}
                      </span>
                      <button 
                        onClick={openInstagram}
                        className="text-pink-600 hover:text-pink-500 transition-colors group/btn"
                      >
                        <Instagram size={16} className="group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About The Artist Section */}
      <section className="py-16 fade-in-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                About the Artist
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-400 rounded-full" />
                <Heart size={16} className="text-pink-500" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 to-transparent rounded-full" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-3xl border border-pink-200/30 hover:shadow-glow transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center">
                      <Palette className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Artistic Vision</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Creating beautiful, meaningful pieces that capture emotions and inspire joy through elegant lettering and thoughtful design.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-3xl border border-purple-200/30 hover:shadow-glow transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                      <Quote className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Personal Touch</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Every piece is crafted with love and attention to detail, ensuring each creation tells a unique story and resonates with the soul.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 rounded-3xl border border-rose-200/30 hover:shadow-glow transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                      <Crown className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Empowerment</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Believing in the power of positive affirmations and self-love, each piece aims to uplift and empower through beautiful words.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-3xl border border-green-200/30 hover:shadow-glow transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                      <Flower2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Natural Beauty</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Drawing inspiration from nature's beauty, incorporating floral elements and organic flows into every artistic creation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={openInstagram}
                className="btn-hero inline-flex items-center gap-3 group"
              >
                <Instagram size={18} />
                <span>Follow My Journey</span>
                <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalligraphyPortfolio;