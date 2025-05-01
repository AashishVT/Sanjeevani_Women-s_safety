import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Shield } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-primary-500/10 blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent-500/10 blur-3xl -bottom-48 -right-48"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="max-w-2xl mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-dark-500/50 text-primary-400 text-sm font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></div>
              <span>Advanced Personal Safety Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Her Safety. <br />
              Her Strength. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                In Real-Time.
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Sanjeevani is an all-in-one safety and health companion device that keeps you protected anywhere, anytime with AI-powered monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                to="/dashboard"
                variant="primary"
                size="lg"
                className="group"
                icon={<ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              >
                View Dashboard
              </Button>
              <Button 
                to="/features"
                variant="outline"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6 text-gray-400">
              <span className="text-primary-500 font-medium">Security</span>
              <span className="text-gray-600">•</span>
              <span className="text-success-500 font-medium">Health</span>
              <span className="text-gray-600">•</span>
              <span className="text-accent-500 font-medium">AI Monitoring</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Glowing circle */}
                  <div className="absolute inset-0 rounded-full bg-primary-500/20 animate-pulse"></div>
                  
                  {/* Rotating orbit */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 animate-spin" style={{ animationDuration: '20s' }}></div>
                  
                  {/* Sanjeevani band placeholder */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-400 rounded-xl p-5 shadow-neon border border-primary-500/50 backdrop-blur-sm"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <Shield className="w-24 h-24 text-primary-500" />
                  </motion.div>
                  
                  {/* Floating data points */}
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-accent-500/50 text-accent-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                  >
                    Heart Rate: 74 BPM
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-dark-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-success-500/50 text-success-500"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.8 }}
                  >
                    SpO2: 98%
                  </motion.div>
                  
                  <motion.div 
                    className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 bg-dark-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-warning-500/50 text-warning-500"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
                  >
                    GPS Active
                  </motion.div>
                  
                  <motion.div 
                    className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 bg-dark-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-primary-500/50 text-primary-500"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.2 }}
                  >
                    Secure: Locked
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;