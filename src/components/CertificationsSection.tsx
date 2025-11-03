import { useState } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import tcsIonCert from '@/assets/tcs-ion-cert.png';
import udemyCert from '@/assets/udemy-cert.png';
import awsCert from '@/assets/aws-cert.png';
import oracleCert from '@/assets/oracle-cert.png';
import linkedinCert from '@/assets/linkedin-cert.png';
import googleCert from '@/assets/google-cert.png';
import internshalaCert from '@/assets/internshala-cert.png';
import infosysCert from '@/assets/infosys-cert.png';
import nptelCert from '@/assets/nptel-cert.png';
import Deloittecert from '@/assets/Deloitte-cert.png';
const CertificationsSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

   const showMore = () => setVisibleCount(certifications.length);

  const certifications = [
    {
      title: "Artificial Intelligence Primer",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      year: "2024",
      image: infosysCert,
      link: "https://drive.google.com/file/d/1HEDPx37p9s4KG_4_Ebrn1FUgTTjJfwd7/view?usp=sharing"
    },
    {
      title: "Python Foundation",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      year: "2024",
      image: infosysCert,
      link: "https://drive.google.com/file/d/1x4VWXUFKBeV1f2D74TxJSeQ8s1szKZn4/view?usp=sharing"
    },
    {
      title: "Java Foundation",
      issuer: "Infosys Springboard",
      category: "AI/ML",
      year: "2024",
      image: infosysCert,
      link: "https://drive.google.com/file/d/1aNnQPzlCAl14IEORwFh9W46y0f02xnR9/view?usp=sharing"
    },
    {
      title: "Principles of Generative AI",
      issuer: "Infosys Springboard", 
      category: "AI/ML",
      year: "2024",
      image: infosysCert,
      link: "https://drive.google.com/file/d/1n2HwyMaBCgdWE3qjaV7QksY4X9Ot22sI/view?usp=sharing"
    },
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1kgJc2K9O9QNgrtqROjjdlcq7IiIY0t4c/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1Vy9pL3ifD72MS8J_MZrorEY_J4VSbGKq/view?usp=sharing"
    },
    {
      title: " Oracle Cloud Infrastructure Data Science Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1_yHOSat6RUystWL6NKDh7izO2nwGXHJT/view?usp=sharing"
    },
    {
      title: "Oracle Analytics Cloud 2025 Certified Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1YBMVkM_s0bj5FqfjzLg6tuacYWlA7P5B/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1Ew6-gOzzeUXqQbsKdZA4sLZF4_UceECf/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/18eQW7sQEFCN7XbJyBotkz6KmTCYnkoVV/view?usp=sharing"
    },
    {
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1y3VTxeVLaHMd4yCQv6-vO1QdwtiLR2mY/view?usp=sharing"
    },
    {
      title: "Oracle Database@AWS Certified Architect Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1K61Sufe7uAlZcmeOxNQty66jV3riirZM/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Migration Architect Certified Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/14WTn4q3qRSqdczmGr_2wIAOkZRB2eZkw/view?usp=sharing"
    },
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1KRFu-DTBu6joB29RuVJChC0GxzXtnUf2/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1y6THHnPpXL0v_d_9JA0_6z92gxXsGF_V/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1-bp-DBGecg6iSgnBEX9KK0Ghbk43mq9v/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1QNKlKFgDmGcPR1B-ig8cfl2ipq2v7Xc0/view?usp=sharing"
    },
     {
      title: "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
      issuer: "Oracle", 
      category: "AI/ML",
      year: "2025",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1fmwvPJa2P_mdiYuZqWDQHv4AfWyXIURo/view?usp=sharing"
    },
    {
      title: "Enhancing Soft Skills and Personality",
      issuer: "NPTEL",
      category: "Professional Development",
      year: "2024",
      image: nptelCert,
      link: "https://drive.google.com/file/d/12E8x_kxXwt6Pq_pS-JnTt12KsJstnOU2/view?usp=sharing"
    },
    {
      title: "Computer Networks And Internet Protocol",
      issuer: "NPTEL",
      category: "Professional Development",
      year: "2024",
      image: nptelCert,
      link: "https://drive.google.com/file/d/1PplKpVpDE4K1M3iq6vpWoBJLdQ9FA7Wy/view?usp=sharing"
    },
    {
      title: "Android App Development",
      issuer: "Internshala",
      category: "Mobile Development",
      year: "2024",
      image: internshalaCert,
      link: "https://drive.google.com/file/d/1btDWxrg6hy88RWq1GOpZ1f08yegycRBp/view?usp=sharing"
    },
    {
      title: "Google Analytics",
      issuer: "Google",
      category: "Analytics",
      year: "2024",
      image: googleCert,
      link: "https://drive.google.com/file/d/1Q_ND480TWg0jsXFZUplc_ln5OKNpfPQB/view?usp=sharing"
    },
    {
      title: "Generative AI",
      issuer: "LinkedIn",
      category: "AI/ML",
      year: "2024",
      image: linkedinCert,
      link: "https://drive.google.com/file/d/1YF7mI7HFXiD02rURS_iIZIyqtIEqTspU/view?usp=sharing"
    },
    {
      title: "Solution Architecture",
      issuer: "AWS",
      category: "Cloud Computing",
      year: "2024",
      image: awsCert,
      link: "https://drive.google.com/file/d/1cSNppIrrIAXq5RBRQgOGlZq1cvUPXWz2/view?usp=sharing"
    },
    {
      title: "Database with Python",
      issuer: "Udemy",
      category: "Programming",
      year: "2024",
      image: udemyCert,
      link: "https://drive.google.com/file/d/18-BcraIOFhcttLUcr14pd2fgkPbI_bj7/view?usp=sharing"
    },
    {
      title: "Technology	Job	Simulation",
      issuer: "Deloitte",
      category: "General",
      year: "2024",
      image: Deloittecert,
      link: "https://drive.google.com/file/d/1B0pjsWluiB0SxGIHAo9AKq7wjKhG9CEZ/view?usp=sharing"
    },
     {
      title: " Data	Analytics	Job	Simulation",
      issuer: "Deloitte",
      category: "General",
      year: "2024",
      image: Deloittecert,
      link: "https://drive.google.com/file/d/1hdcw3Hu-kuDO0cEOXhl6Zqwl_hQTdyN6/view?usp=sharing"
    },
    {
      title: "Business Etiquette",
      issuer: "TCS iON",
      category: "Professional Development",
      year: "2024",
      image: tcsIonCert,
      link: "https://drive.google.com/file/d/1O5vuIrDaZr0TU933EasTrakH1JV-Q8Z1/view?usp=sharing"
    }
  ];


  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-16 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-16 left-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          </div>


          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`group glass-card p-6 rounded-3xl hover:shadow-glow hover:scale-105 transition-all duration-500 animate-fade-in-up ${
                  index < 3 ? 'stagger-1' : index < 6 ? 'stagger-2' : 'stagger-3'
                }`}
              >
                {/* Certificate Frame */}
                <div className="relative mb-6">
                  <div className="w-full h-32 bg-gradient-card rounded-2xl border border-white/20 flex items-center justify-center relative overflow-hidden">
                    {/* Certificate Logo */}
                    <img 
                      src={cert.image} 
                      alt={`${cert.issuer} Certificate`}
                      className="h-16 w-auto object-contain"
                    />
                    
                    {/* Verified Badge */}
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-3">
                  <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 font-medium text-sm">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-foreground/50">
                      {cert.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20`}>
                      {cert.category}
                    </span>
                    
                    <button 
                      onClick={() => window.open(cert.link, "_blank")}
                      className="text-primary hover:text-primary/80 transition-colors group/btn">
                      <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

                {/* Show More Button */}
                  {visibleCount < certifications.length && (
            <div className="text-center mt-10">
              <button
                onClick={showMore}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Show More
              </button>
            </div>
          )}

          {/* Special Achievement */}
          <div className="mt-16 text-center animate-fade-in-up stagger-4">
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto border-l-4 border-l-primary">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award size={24} className="text-primary" />
                <h3 className="font-serif font-semibold text-2xl text-foreground">
                  Recent Achievement
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                <strong className="text-primary">Second Place Winner</strong> - Science Project Competition at R.M.K College of Engineering and Technology, Department of Science and Humanities (March 6, 2024)
              </p>
            </div>
          </div>

          {/* Achievement Summary */}
          <div className="mt-8 text-center animate-fade-in-up stagger-5">
            <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
              <h3 className="font-serif font-semibold text-2xl text-foreground mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                With {certifications.length}+ professional certifications across AI/ML, development, and business skills, 
                I continuously invest in learning cutting-edge technologies and industry best practices.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Award size={20} />
                <span className="font-semibold">Lifelong Learner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;