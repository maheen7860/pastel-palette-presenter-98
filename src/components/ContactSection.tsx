import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp, Download, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "No 4/86, Jeeva Street, M A Nagar, Redhills, Chennai – 600052"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "9342180160"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email", 
      value: "mahadiyamaheen@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-16 w-44 h-44 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-16 w-36 h-36 bg-accent/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on exciting AI/ML projects? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif font-semibold text-2xl text-foreground mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-8">
                    I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                    or simply connect with fellow technology enthusiasts. Feel free to reach out!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-4 p-4 glass-card rounded-2xl hover:shadow-glow transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-foreground mb-1">
                          {info.label}
                        </h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Quote */}
                <div className="p-6 glass-card rounded-2xl animate-fade-in-up stagger-4">
                  <blockquote className="text-foreground/80 italic leading-relaxed">
                    "The best way to predict the future is to create it."
                  </blockquote>
                  <cite className="text-primary text-sm font-medium mt-2 block">
                    — Peter Drucker
                  </cite>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="font-serif font-semibold text-2xl text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-foreground/80 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-foreground/40"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-foreground/80 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-foreground/40"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-foreground/80 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-foreground/40 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 btn-hero inline-flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button
  type="button"
  onClick={() => window.open('/MAHI RESUME.docx', '_blank')}
  className="btn-outline inline-flex items-center justify-center gap-2 group px-4"
>
  <Download size={16} className="group-hover:scale-110 transition-transform" />
  <span className="hidden sm:inline">Resume</span>
</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-foreground/10">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                Mahadiya Maheen K F
              </h3>
              <p className="text-foreground/60">
                AI/ML Engineer • Building intelligent applications
              </p>
            </div>

            {/* Social Links & Scroll to Top */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:mahadiyamaheen@gmail.com"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Mail size={16} />
                </a>
                <a 
                  href="tel:+919342180160"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Phone size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mahadiya-maheen-k-f-b236b629a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-soft hover:shadow-glow"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-foreground/10 text-center">
            <p className="text-foreground/50 text-sm">
              © 2024 Mahadiya Maheen K F. Designed with passion and built with modern technologies.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;