import HeroSection from '../components/home/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Heart, 
  MapPin, 
  Shield, 
  BadgeAlert, 
  Brain, 
  Wifi, 
  Battery, 
  BellRing,
  MessageSquare,
  Users,
  Baby,
  Mountain,
  Building2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      {/* Features Overview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-primary-500/10 blur-3xl top-1/4 -right-48 opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Core Features"
            subtitle="Sanjeevani combines advanced hardware with AI-powered software to provide comprehensive health and security monitoring."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card glowEffect="blue" delay={1}>
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-primary-500">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Health Monitoring</h3>
              <p className="text-gray-400 text-sm">
                Continuous tracking of vital signs including heart rate, blood oxygen, and body temperature.
              </p>
            </Card>
            
            <Card glowEffect="purple" delay={2}>
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-accent-500">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">GPS Tracking</h3>
              <p className="text-gray-400 text-sm">
                Real-time location monitoring with historical paths and geofencing capabilities.
              </p>
            </Card>
            
            <Card glowEffect="green" delay={3}>
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-success-500">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Tamper Protection</h3>
              <p className="text-gray-400 text-sm">
                Advanced tamper detection with instant alerts and secure band locking mechanism.
              </p>
            </Card>
            
            <Card glowEffect="blue" delay={4}>
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-warning-500">
                <BadgeAlert className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">SOS Alert</h3>
              <p className="text-gray-400 text-sm">
                One-touch emergency alert system with automatic notification to predefined contacts.
              </p>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <Button to="/features" variant="outline">
              Explore All Features
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-dark-400 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="How It Works"
            subtitle="Seamless integration of hardware, connectivity, and cloud services for real-time monitoring and alerts."
            centered
          />
          
          <div className="mt-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-300 border-2 border-primary-500 z-10"></div>
                <Card className="text-center relative z-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-primary-500 mb-4 mx-auto">
                    <Wifi className="h-8 w-8" />
                  </div>
                  <h3 className="text-white font-medium mb-2">Sanjeevani Band</h3>
                  <p className="text-gray-400 text-sm">
                    Collects biometric data and location information through advanced sensors.
                  </p>
                </Card>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-300 border-2 border-primary-500 z-10"></div>
                <Card className="text-center relative z-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-primary-500 mb-4 mx-auto">
                    <Wifi className="h-8 w-8" />
                  </div>
                  <h3 className="text-white font-medium mb-2">LoRaWAN Gateway</h3>
                  <p className="text-gray-400 text-sm">
                    Receives data from the band through long-range, low-power wireless network.
                  </p>
                </Card>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-300 border-2 border-primary-500 z-10"></div>
                <Card className="text-center relative z-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-accent-500 mb-4 mx-auto">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-white font-medium mb-2">Cloud Processing</h3>
                  <p className="text-gray-400 text-sm">
                    Analyzes data using AI to detect anomalies and trigger alerts when necessary.
                  </p>
                </Card>
              </div>
              
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-300 border-2 border-primary-500 z-10"></div>
                <Card className="text-center relative z-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-success-500 mb-4 mx-auto">
                    <BellRing className="h-8 w-8" />
                  </div>
                  <h3 className="text-white font-medium mb-2">User Dashboard</h3>
                  <p className="text-gray-400 text-sm">
                    Provides real-time monitoring and alerts through web and mobile interfaces.
                  </p>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button to="/how-it-works" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      {/* Hardware Components */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-accent-500/10 blur-3xl bottom-1/4 -left-48 opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Advanced Hardware"
            
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card>
              <h3 className="text-white font-medium mb-3">Communication</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-primary-500 mr-3">
                    <Wifi className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">LoRaWAN Module</p>
                    <p className="text-gray-400 text-xs">RAK811 - Long range, low power</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-primary-500 mr-3">
                    <Wifi className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">LoRaWAN Gateway</p>
                    <p className="text-gray-400 text-xs">RAK7243 - High sensitivity reception</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-primary-500 mr-3">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">GNSS Antenna</p>
                    <p className="text-gray-400 text-xs">Taoglas MA.161 - High precision</p>
                  </div>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-white font-medium mb-3">Processing</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-accent-500 mr-3">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Microcontroller</p>
                    <p className="text-gray-400 text-xs">ESP32-S3 - Dual-core 240MHz</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-accent-500 mr-3">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">AI Processing Unit</p>
                    <p className="text-gray-400 text-xs">STM32H7 - ML acceleration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-accent-500 mr-3">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">BLE/WiFi</p>
                    <p className="text-gray-400 text-xs">ESP32-S3 - Dual-mode connectivity</p>
                  </div>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-white font-medium mb-3">Power & Sensors</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-success-500 mr-3">
                    <Battery className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Battery</p>
                    <p className="text-gray-400 text-xs">SparkFun 1000mAh - 72hr operation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-success-500 mr-3">
                    <Battery className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Battery Management</p>
                    <p className="text-gray-400 text-xs">TP4056 - Safe charging circuit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-success-500 mr-3">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Sensors</p>
                    <p className="text-gray-400 text-xs">Heart rate, SpO2, motion, temperature</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-dark-400 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Use Cases"
            subtitle="Sanjeevani is designed to serve a wide range of personal safety and health monitoring needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-primary-500 mb-4 mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-white font-medium mb-2">Personal Safety</h3>
              <p className="text-gray-400 text-sm mb-4">
                For individuals concerned about personal safety, especially when traveling alone or in unfamiliar areas.
              </p>
              <Link to="/use-cases" className="text-primary-400 text-sm hover:text-primary-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-accent-500 mb-4 mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-white font-medium mb-2">Elderly Care</h3>
              <p className="text-gray-400 text-sm mb-4">
                Helps monitor the health and location of elderly family members, providing peace of mind to caregivers.
              </p>
              <Link to="/use-cases" className="text-primary-400 text-sm hover:text-primary-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-warning-500 mb-4 mx-auto">
                <Baby className="h-8 w-8" />
              </div>
              <h3 className="text-white font-medium mb-2">Child Tracking</h3>
              <p className="text-gray-400 text-sm mb-4">
                Ensures children's safety by allowing parents to monitor their location and receive alerts if they leave designated areas.
              </p>
              <Link to="/use-cases" className="text-primary-400 text-sm hover:text-primary-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-success-500 mb-4 mx-auto">
                <Mountain className="h-8 w-8" />
              </div>
              <h3 className="text-white font-medium mb-2">Outdoor Adventures</h3>
              <p className="text-gray-400 text-sm mb-4">
                Perfect for hikers, climbers, and outdoor enthusiasts who venture into remote areas with limited connectivity.
              </p>
              <Link to="/use-cases" className="text-primary-400 text-sm hover:text-primary-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-300 text-error-500 mb-4 mx-auto">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-white font-medium mb-2">Law Enforcement</h3>
              <p className="text-gray-400 text-sm mb-4">
                Assists in monitoring individuals under house arrest or probation with tamper-proof tracking capabilities.
              </p>
              <Link to="/use-cases" className="text-primary-400 text-sm hover:text-primary-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <div className="text-center flex flex-col items-center justify-center p-6">
              <motion.div 
                className="text-gray-300 mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover how Sanjeevani can be customized for your specific needs.
              </motion.div>
              <Button to="/contact" variant="primary" className="mx-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Meet Our Team"
            subtitle="Dedicated professionals working to advance personal safety and health monitoring technology."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">A</span>
                </div>
              </div>
              <h3 className="text-white font-medium mb-1">Aashish</h3>
              <p className="text-gray-400 text-sm">Founder & CEO</p>
            </Card>
            
            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">B</span>
                </div>
              </div>
              <h3 className="text-white font-medium mb-1">Bhavesh</h3>
              <p className="text-gray-400 text-sm">CTO</p>
            </Card>
            
            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">A</span>
                </div>
              </div>
              <h3 className="text-white font-medium mb-1">Aayush</h3>
              <p className="text-gray-400 text-sm">Head of Product</p>
            </Card>
            
            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">J</span>
                </div>
              </div>
              <h3 className="text-white font-medium mb-1">Jayesh</h3>
              <p className="text-gray-400 text-sm">Lead Engineer</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-dark-400 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-96 bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-3xl top-1/2 transform -translate-y-1/2 opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Experience Advanced Personal Security?
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Take the first step towards enhanced personal safety and health monitoring with Sanjeevani.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button to="/dashboard" variant="primary" size="lg">
                View Dashboard Demo
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Request a Live Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;