import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { 
  Users, 
  Baby, 
  Mountain, 
  Building2,
  Heart,
  MapPin,
  Shield,
  BellRing,
  ChevronRight,
  Check
} from 'lucide-react';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  const tabs = [
    { id: 'personal', label: 'Womens Safety', icon: <Users className="h-5 w-5" /> },
    { id: 'elderly', label: 'Elderly Care', icon: <Users className="h-5 w-5" /> },
    { id: 'child', label: 'Child Tracking', icon: <Baby className="h-5 w-5" /> },
    { id: 'outdoor', label: 'Outdoor Adventure', icon: <Mountain className="h-5 w-5" /> },
    { id: 'law', label: 'Law Enforcement', icon: <Building2 className="h-5 w-5" /> },
  ];
  
  const tabContent = {
    personal: {
      title: "Women's Safety",
      description: "For women's concerned about their personal safety in various situations, from walking alone at night to traveling in unfamiliar areas.",
      image: "/WomensSafety2.png",
      features: [
        "One-touch SOS alert with immediate notification to emergency contacts",
        "Real-time location sharing with trusted individuals",
        "Automatic distress detection based on biometric and audio signals",
        "Tamper-proof band ensures the device cannot be removed forcibly",
        "Path recording for evidence collection in case of incidents"
      ],
      benefits: [
        "Peace of mind when in potentially unsafe situations",
        "Rapid response capability in emergency situations",
        "Deterrent effect against potential assailants",
        "Independent living with added layer of security",
        "Evidence documentation for potential legal proceedings"
      ]
    },
    elderly: {
      title: "Elderly Care",
      description: "Provides continuous monitoring for elder individuals living independently, offering peace of mind to both them and their caregivers.",
      image: "/ElderlySafety.png",
      features: [
        "Continuous heart rate and vital sign monitoring",
        "Fall detection with automatic alerts to caregivers",
        "Location tracking to help locate confused or wandering individuals",
        "Medication reminder notifications",
        "Long battery life requiring minimal maintenance"
      ],
      benefits: [
        "Extended independent living for elderly individuals",
        "Reduced anxiety for family members and caregivers",
        "Quick response to medical emergencies",
        "Prevention of wandering-related incidents",
        "Data collection for healthcare providers to improve care plans"
      ]
    },
    child: {
      title: "Child Tracking",
      description: "Helps parents keep their children safe by providing location tracking and establishing safe boundaries through geofencing.",
      image: "/KidsCare.png",
      features: [
        "Real-time GPS tracking visible through parent's mobile app",
        "Geofencing capabilities to set safe boundaries",
        "SOS button that children can press in emergency situations",
        "Tamper-resistant design that notifies parents if removed",
        "Two-way communication functionality"
      ],
      benefits: [
        "Peace of mind for parents during school and play activities",
        "Immediate alerts when children leave designated safe areas",
        "Teaching children responsibility while maintaining safety",
        "Quick location identification if a child is lost",
        "Building independence while maintaining appropriate supervision"
      ]
    },
    outdoor: {
      title: "Outdoor Adventure",
      description: "Perfect for hikers, climbers, and outdoor enthusiasts who venture into remote areas with limited connectivity.",
      image: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Long-range connectivity through LoRaWAN network",
        "Offline GPS tracking that works without cellular coverage",
        "Extreme weather resistance (IP68 rated)",
        "Automatic incident detection based on sudden changes in acceleration",
        "Extended battery life optimized for multi-day expeditions"
      ],
      benefits: [
        "Safety net for solo adventurers in remote locations",
        "Ability to call for help even without cellular service",
        "Route tracking for performance analysis and sharing",
        "Reduced anxiety for family members during expeditions",
        "Potential life-saving capability in emergency situations"
      ]
    },
    law: {
      title: "Law Enforcement",
      description: "Assists in monitoring individuals under house arrest or probation with tamper-proof tracking capabilities.",
      image: "https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Advanced tamper detection with immediate alerts",
        "Highly secure, tamper-evident band construction",
        "Real-time location tracking with historical path recording",
        "Geofencing capabilities to enforce movement restrictions",
        "Secure web portal for authorized law enforcement personnel"
      ],
      benefits: [
        "More humane alternative to incarceration",
        "Reduced corrections system costs",
        "Enhanced public safety through continuous monitoring",
        "Auditable records for compliance verification",
        "Integration with existing criminal justice systems"
      ]
    }
  };
  
  const content = tabContent[activeTab as keyof typeof tabContent];
  
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Use Cases
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sanjeevani adapts to a wide range of scenarios where personal safety
            and health monitoring are essential. Explore how our solution can be
            tailored to your specific needs.
          </motion.p>
        </div>
        
        <div className="mb-16">
          <div className="flex overflow-x-auto space-x-2 pb-4 mb-8 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50'
                    : 'bg-dark-400 text-gray-400 hover:bg-dark-300 hover:text-white border border-dark-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div>
              <div className="rounded-lg overflow-hidden mb-6 aspect-video bg-dark-400">
                <img 
                  src={content.image} 
                  alt={content.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-3xl font-display font-bold text-white mb-4">{content.title}</h2>
              <p className="text-gray-300 mb-6">
                {content.description}
              </p>
              
              <Button variant="primary" size="md" className="mb-8">
                Learn More
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark-400/50 backdrop-blur-sm rounded-lg p-4 border border-dark-300">
                  <div className="flex items-center text-primary-500 mb-3">
                    <Heart className="h-5 w-5 mr-2" />
                    <span className="font-medium">Health Features</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Continuous monitoring of vital signs with personalized alerts based on individual needs.
                  </p>
                </div>
                
                <div className="bg-dark-400/50 backdrop-blur-sm rounded-lg p-4 border border-dark-300">
                  <div className="flex items-center text-accent-500 mb-3">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-medium">Location Services</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Real-time GPS tracking with customizable geofencing and path history recording.
                  </p>
                </div>
                
                <div className="bg-dark-400/50 backdrop-blur-sm rounded-lg p-4 border border-dark-300">
                  <div className="flex items-center text-success-500 mb-3">
                    <BellRing className="h-5 w-5 mr-2" />
                    <span className="font-medium">Alert System</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Multi-channel notification system targeting appropriate contacts based on alert type.
                  </p>
                </div>
                
                <div className="bg-dark-400/50 backdrop-blur-sm rounded-lg p-4 border border-dark-300">
                  <div className="flex items-center text-warning-500 mb-3">
                    <Shield className="h-5 w-5 mr-2" />
                    <span className="font-medium">Security</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Tamper-resistant design with immediate alerts if unauthorized removal is attempted.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-dark-400/30 backdrop-blur-md rounded-lg border border-dark-200 p-6 mb-6">
                <h3 className="text-xl font-medium text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mt-0.5 mr-3">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-dark-400/30 backdrop-blur-md rounded-lg border border-dark-200 p-6">
                <h3 className="text-xl font-medium text-white mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-500/20 flex items-center justify-center text-success-500 mt-0.5 mr-3">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg p-6 border border-primary-500/30">
                <h3 className="text-xl font-medium text-white mb-2">Ready to explore this use case?</h3>
                <p className="text-gray-300 mb-4">
                  Contact our team to discuss how Sanjeevani can be customized for your specific {content.title.toLowerCase()} needs.
                </p>
                <Button 
                  to="/contact" 
                  variant="primary"
                  className="group"
                  icon={<ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div>
          <SectionHeading 
            title="Customer Success Stories"
            subtitle="Real-world examples of how Sanjeevani has made a difference."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg overflow-hidden border border-dark-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Women's Safety" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium mb-4">
                  Women's Safety
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  "Peace of mind for our whole family"
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                "Since my sister started wearing Sanjeevani, I sleep peacefully knowing I’ll be instantly alerted if anything happens. It already saved her once during a dangerous fall. This smart band has truly eased all my worries for her safety."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                      <span className="font-display">R</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Ravi S.</p>
                    <p className="text-gray-500 text-xs">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg overflow-hidden border border-dark-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6896223/pexels-photo-6896223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Outdoor Adventure" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-success-500/20 text-success-400 rounded-full text-xs font-medium mb-4">
                  Outdoor Adventure
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  "A lifesaver on remote trails"
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  "As a solo hiker in remote areas, Sanjeevani gives me confidence. When I sprained my ankle 15km from the trailhead, the SOS feature connected me to rescue services with my exact coordinates."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                      <span className="font-display">A</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Aarti M.</p>
                    <p className="text-gray-500 text-xs">Pune, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg overflow-hidden border border-dark-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5853487/pexels-photo-5853487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Child Safety" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-warning-500/20 text-warning-400 rounded-full text-xs font-medium mb-4">
                  Child Safety
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  "Perfect balance of security and independence"
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  "My 10-year-old son can now walk to school with friends while I can discreetly monitor his location. The geofencing alerts let me know when he arrives safely."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                      <span className="font-display">P</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Priya T.</p>
                    <p className="text-gray-500 text-xs">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;