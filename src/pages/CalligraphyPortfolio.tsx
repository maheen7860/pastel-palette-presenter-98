import { useState, useEffect } from 'react';
import { Instagram, ArrowLeft, ExternalLink, Sparkles, Heart, Palette, Quote, Crown, Flower2, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import calligraphy1 from '@/assets/calligraphy-1.jpg';
import calligraphy2 from '@/assets/calligraphy-2.jpg';
import calligraphy3 from '@/assets/calligraphy-3.jpg';
import calligraphy4 from '@/assets/calligraphy-4.jpg';
import calligraphy5 from '@/assets/calligraphy-5.jpg';
import calligraphy6 from '@/assets/calligraphy-6.png';
import calligraphy7 from '@/assets/calligraphy-7.png';
import calligraphy8 from '@/assets/calligraphy-8.png';
import calligraphy9 from '@/assets/calligraphy-9.png';
import calligraphy10 from '@/assets/calligraphy-10.png';
import calligraphy11 from '@/assets/calligraphy-11.png';
import calligraphy12 from '@/assets/calligraphy-12.png';
import calligraphy13 from '@/assets/calligraphy-13.png';
import calligraphy14 from '@/assets/calligraphy-14.png';
import calligraphy15 from '@/assets/calligraphy-15.png';
import calligraphy16 from '@/assets/calligraphy-16.png';
import calligraphy17 from '@/assets/calligraphy-17.png';
import calligraphy18 from '@/assets/calligraphy-18.png';
import calligraphy19 from '@/assets/calligraphy-19.png';
import calligraphy20 from '@/assets/calligraphy-20.png';
import calligraphy21 from '@/assets/calligraphy-21.png';
import calligraphy22 from '@/assets/calligraphy-22.png';
import calligraphy23 from '@/assets/calligraphy-23.png';
import calligraphy24 from '@/assets/calligraphy-24.png';
import calligraphy25 from '@/assets/calligraphy-25.png';
import calligraphy26 from '@/assets/calligraphy-26.png';
import video1 from '@/assets/video-1.png';
import video2 from '@/assets/video-2.png';
import video3 from '@/assets/video-3.png';
import video4 from '@/assets/video-4.png';
import video5 from '@/assets/video-5.png';
import video6 from '@/assets/video-6.png';
import video7 from '@/assets/video-7.png';
import video8 from '@/assets/video-8.png';
import video9 from '@/assets/video-9.png';
import video10 from '@/assets/video-10.png';
import video11 from '@/assets/video-11.png';
import video12 from '@/assets/video-12.png';
import video13 from '@/assets/video-13.png';

const CalligraphyPortfolio = () => {
  const [activeStyle, setActiveStyle] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6); 
  
  const showMore = () => {
    setVisibleCount((prev) => prev + 6); // 👈 Load 6 more on click
  };
  
 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
          // fade out when leaving viewport
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  const calligraphyStyles = [
    { id: 'gallery', name: 'portraits', count: 26 },
    { id: 'Dreamy-Doodles ', name: 'Glimpses', count: 13 }
  ];

 const featuredWorks = [
  {
    title: "hello june 🌚🤌🏻",
    style: "gallery",
    image: calligraphy1,
    link: "https://www.instagram.com/p/C79GdymS13q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Let's be authentic 🪄🖇️",
    style: "gallery",
    image: calligraphy2,
    link: "https://www.instagram.com/p/C7_jrbnxRx8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Peace begins with a smile 💜🪽",
    style: "gallery",
    image: calligraphy3,
    link: "https://www.instagram.com/p/C8CMkgpSvfS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Keep calm, let ur crown shine🌜✨",
    style: "gallery",
    image: calligraphy4,
    link: "https://www.instagram.com/p/C8EwKngyltx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ you are what you manifest 🪷🌙",
    style: "gallery",
    image: calligraphy5,
    link: "https://www.instagram.com/p/C8HWhZgyJZp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ someone who luvs ur imperfect self👀❤️",
    style: "gallery",
    image: calligraphy6,
    link: "https://www.instagram.com/p/C8J70G9yn7G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ want to be hpy ? Be 🧸💌",
    style: "gallery",
    image: calligraphy7,
    link: "https://www.instagram.com/p/C8Mee9JSCbi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ belive in the magic of new comings 🫴🏻🕊️",
    style: "gallery",
    image: calligraphy8,
    link: "https://www.instagram.com/p/C8PHMTuhHNf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ sang rahiyo 💕🪐",
    style: "gallery",
    image: calligraphy9,
    link: "https://www.instagram.com/p/C8R3gQChk8s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ constant hope 💚☘️",
    style: "gallery",
    image: calligraphy10,
    link: "https://www.instagram.com/p/C8bRlPORy-k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ cotton candy sky ☁️🌈",
    style: "gallery",
    image: calligraphy11,
    link: "https://www.instagram.com/p/C8ejwXkhPyk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Double-tap if you're a dreamer🤍🌿",
    style: "gallery",
    image: calligraphy12,
    link: "https://www.instagram.com/p/C8hPtHBSXWq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ let's touch the sky ☁️🌈",
    style: "gallery",
    image: calligraphy13,
    link: "https://www.instagram.com/p/C8mR0QHSzTb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Embracing the blur 📷🐣",
    style: "gallery",
    image: calligraphy14,
    link: "https://www.instagram.com/p/C8o1u3CBddY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ flawless 🌷🩷",
    style: "gallery",
    image: calligraphy15,
    link: "Yhttps://www.instagram.com/p/C8uIux9S4ct/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Choose to shine 😉✨",
    style: "gallery",
    image: calligraphy16,
    link: "https://www.instagram.com/p/C8zVJVbBnP6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ aspire to inspire before you expire 💜💫",
    style: "gallery",
    image: calligraphy17,
    link: "https://www.instagram.com/p/C9SRS8pToez/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ love urself yaar 💗👀 !!!",
    style: "gallery",
    image: calligraphy18,
    link: "https://www.instagram.com/p/C9Z-yODTZM2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ spread ur wings n flyyy🕊️🍃",
    style: "gallery",
    image: calligraphy19,
    link: "https://www.instagram.com/p/C9-IDgezD2w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Quilling Art🍃",
    style: "gallery",
    image: calligraphy20,
    link: "https://www.instagram.com/p/C-AshT5T9V_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ hpy B'day 💕🪄",
    style: "gallery",
    image: calligraphy21,
    link: "https://www.instagram.com/p/C-VSQqxTCAC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ be proud of who you are!!❤️‍🩹🦋",
    style: "gallery",
    image: calligraphy22,
    link: "https://www.instagram.com/p/C-xjuQBTfv7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ 🦋❤️",
    style: "gallery",
    image: calligraphy23,
    link: "https://www.instagram.com/p/DFFss5DzcfT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ 🌷🩷",
    style: "gallery",
    image: calligraphy24,
    link: "https://www.instagram.com/p/DFIU9PUTrhC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ 🪄🍃",
    style: "gallery",
    image: calligraphy25,
    link: "https://www.instagram.com/p/DFStxyQTshU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ A little rainbow, a little beach, and a lot of heart 💙",
    style: "gallery",
    description: "",
    image: calligraphy26,
    link: "https://www.instagram.com/p/DMonn9vPguw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ bookmark 🔖📑",
    style: "Dreamy-Doodles",
    image: video1,
    link: "https://www.instagram.com/reel/C9xRfg_BjkU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ mudhal nee mudivum nee 📼💜",
    style: "Dreamy-Doodles",
    image: video2,
    link: "https://www.instagram.com/reel/C9fMjohBC57/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ drop a ❤️ !!!",
    style: "Dreamy-Doodles",
    image: video3,
    link: "https://www.instagram.com/reel/C9NGH4ehG5N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ hijab is faith not fashion 🪄❤️",
    style: "Dreamy-Doodles",
    image: video4,
    link: "https://www.instagram.com/reel/C9HKY1lBq2r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ In the embrace of love! Life blossoms🩷🦋",
    style: "Dreamy-Doodles",
    image: video5,
    link: "https://www.instagram.com/reel/C89XDKUhXCS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Find your tribe! love them hard🧸🤎",
    style: "Dreamy-Doodles",
    image: video6,
    link: "https://www.instagram.com/reel/C863-wyBCC8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ drop a ❤️ !!!",
    style: "Dreamy-Doodles",
    image: video7,
    link: "https://www.instagram.com/reel/C84RrgPhwgg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Glory in our heart 🌟💙",
    style: "Dreamy-Doodles",
    image: video8,
    link: "https://www.instagram.com/reel/C81oa8XBNhA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ tag ur hidden ❤️🦋",
    style: "Dreamy-Doodles",
    image: video9,
    link: "https://www.instagram.com/reel/C8wklzrhRvE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Defined by ur exclusivity 🦋💛",
    style: "Dreamy-Doodles",
    image: video10,
    link: "https://www.instagram.com/reel/C8jyf7rBTAz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ give ur brain a break 💛🎬",
    style: "Dreamy-Doodles",
    image: video11,
    link: "https://www.instagram.com/reel/C8b4aaMxyE5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ hugs speak louder than wrds 🫰🏻🐾",
    style: "Dreamy-Doodles",
    image: video12,
    link: "https://www.instagram.com/reel/C8XKFHchY5q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "~ Eid Mubarak 🤎🫂",
    style: "Dreamy-Doodles",
    image: video13,
    link: "https://www.instagram.com/reel/C8S5nU4B62K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50/40 via-rose-50/30 to-purple-50/40">
      <Navigation />
      
      {/* Elegant Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden fade-in-section">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/40 to-purple-100/50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-200/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-200/30 via-transparent to-transparent" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <button 
              onClick={goHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/40 text-pink-700 hover:text-pink-600 hover:bg-white/80 transition-all duration-300 rounded-full mb-8 group shadow-sm"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </button>
            
            {/* Elegant Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
                <Sparkles size={16} className="animate-pulse" />
                Calligraphy Artist & Designer
                <Heart size={16} />
              </span>
            </div>
            
            {/* Beautiful Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                  Dreamy Dairy
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-rose-400 rounded-full" />
                <Flower2 className="w-5 h-5 text-pink-500" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 via-pink-400 to-transparent rounded-full" />
              </div>
              <p className="text-xl md:text-2xl font-serif font-medium text-foreground/80 italic">
                Where Words Bloom Into Beautiful Art
              </p>
            </div>
            
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
              Transforming heartfelt words into stunning visual poetry through the ancient art of calligraphy. 
              Each stroke carries intention, every curve tells a story, and every piece radiates love and authenticity.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={openInstagram}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/25 inline-flex items-center gap-3 group"
              >
                <Instagram size={20} />
                <span>Explore My Gallery</span>
                <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/70 backdrop-blur-sm border border-white/50 text-pink-700 font-medium rounded-full hover:bg-white/90 transition-all duration-300 shadow-md inline-flex items-center gap-3 group">
                <Heart size={18} />
                <span>Commission Art</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Style Categories */}
      <section className="py-20 fade-in-section relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-pink-200/40 text-pink-700 rounded-full text-sm font-medium mb-6">
                <Palette size={16} />
                Art Collection
              </div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Signature Calligraphy Styles
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-pink-400 rounded-full" />
                <div className="w-6 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
                <div className="w-20 h-0.5 bg-gradient-to-r from-rose-400 to-transparent rounded-full" />
              </div>
              <p className="text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Discover the diverse range of calligraphy styles, each crafted with passion and precision
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <button
                onClick={() => setActiveStyle('all')}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm ${
                  activeStyle === 'all'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25'
                    : 'bg-white/70 border border-white/50 text-pink-700 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={14} />
                  All Masterpieces
                </span>
              </button>
              {calligraphyStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style.id)}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm ${
                    activeStyle === style.id
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25'
                      : 'bg-white/70 border border-white/50 text-pink-700 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600'
                  }`}
                >
                  {style.name} ({style.count})
                </button>
              ))}
            </div>

          {/* Elegant Works Gallery */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredWorks.slice(0, visibleCount).map((work, index) => (
    <div 
      key={index}
      className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Premium Card Design */}
      <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-700">
        
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img 
            src={work.image} 
            alt={work.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Action Button */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button 
              onClick={() => window.open(work.link, "_blank")}
              className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
            >
              <ExternalLink size={18} className="text-pink-600 group-hover/btn:scale-110 transition-transform" />
            </button>
          </div>

          {/* Style Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-medium bg-white/90 backdrop-blur-sm text-pink-700 rounded-full border border-white/50 shadow-sm">
              {calligraphyStyles.find(s => s.id === work.style)?.name}
            </span>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-6 space-y-4">
          <h3 className="font-serif font-bold text-xl text-foreground group-hover:text-pink-600 transition-colors duration-300 leading-tight">
            {work.title}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
            {work.description}
          </p>
          
          {/* Action Footer (only once now ✅) */}
          <div className="flex items-center justify-between pt-2 border-t border-pink-100/50">
            <div className="flex items-center gap-2 text-xs text-pink-600/70">
              <Heart size={14} />
              <span className="font-medium">Handcrafted with Love</span>
            </div>
            <button 
              onClick={() => window.open(work.link, "_blank")}
              className="p-2 text-pink-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all duration-300 group/btn"
            >
              <Instagram size={16} className="group-hover/btn:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
    </div>
  ))}
</div>

{/* Show More Button */}
{visibleCount < filteredWorks.length && (
  <div className="text-center mt-10">
    <button
      onClick={showMore}
      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Show More
    </button>
  </div>
)}

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