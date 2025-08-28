import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 hero-gradient">
      <div className="container mx-auto text-center text-white">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Pujan Patel
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/90">
            Software Developer & Computer Engineering Student
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/80">
            Passionate about creating innovative solutions with Python, JavaScript, and modern web technologies. 
            Currently pursuing Computer Engineering with hands-on experience in software development.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="secondary" size="lg" className="group">
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:patelpujan2564@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <Mail className="w-6 h-6 transition-transform group-hover:scale-110" />
          </a>
          <a 
            href="https://linkedin.com/in/patelpujan64"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
          </a>
          <a 
            href="https://github.com/Pujan64"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <Github className="w-6 h-6 transition-transform group-hover:scale-110" />
          </a>
          <a 
            href="tel:+917984360610"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <Phone className="w-6 h-6 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;