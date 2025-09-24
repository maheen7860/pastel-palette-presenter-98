import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Enhanced scroll fade effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      <div className="fade-in-section"><HeroSection /></div>
      <div className="fade-in-section"><AboutSection /></div>
      <div className="fade-in-section"><ProjectsSection /></div>
      <div className="fade-in-section"><SkillsSection /></div>
      <div className="fade-in-section"><ExperienceSection /></div>
      <div className="fade-in-section"><CertificationsSection /></div>
      <div className="fade-in-section"><ContactSection /></div>
    </div>
  );
};

export default Index;
