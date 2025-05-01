import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Brain, 
  Database, 
  ServerCrash,
  Bell,
  Smartphone,
  Building,
  Wifi,
  Globe
} from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Data Collection",
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      description: "The Sanjeevani band continuously collects biometric data including heart rate, blood oxygen, temperature, and motion through its integrated sensors. GPS location data is also tracked in real-time.",
      details: [
        "Multiple sensors work in parallel to ensure accuracy",
        "Data is sampled at optimized intervals to balance accuracy and power consumption",
        "On-device preprocessing filters noise and anomalies",
        "Encrypted storage ensures data security even before transmission"
      ]
    },
    {
      title: "Data Transmission",
      icon: <Wifi className="h-8 w-8 text-accent-500" />,
      description: "Collected data is securely transmitted via LoRaWAN to the nearest gateway. The low-power, long-range capabilities of LoRaWAN ensure reliable connectivity even in areas with limited cellular coverage.",
      details: [
        "AES-128 encryption secures all transmitted data",
        "Adaptive data rates optimize power usage based on signal strength",
        "Mesh network capabilities extend range through nearby devices",
        "Redundant transmission protocols ensure data delivery"
      ]
    },
    {
      title: "Cloud Processing",
      icon: <Database className="h-8 w-8 text-success-500" />,
      description: "Data received by the gateway is forwarded to AWS IoT Core, where it's processed, analyzed, and stored. Advanced algorithms monitor for anomalies in vital signs and detect potential security threats.",
      details: [
        "Scalable cloud infrastructure handles millions of data points",
        "Data is stored in both raw and processed formats for analysis",
        "Compliance with HIPAA and other data protection regulations",
        "Redundant storage across multiple geographic regions"
      ]
    },
    {
      title: "AI Analysis",
      icon: <Brain className="h-8 w-8 text-warning-500" />,
      description: "Machine learning models analyze the incoming data to detect patterns and anomalies. The AI system can identify health concerns, potential emergency situations, or security breaches that require immediate attention.",
      details: [
        "Personalized baseline establishment for each user",
        "Continuous learning improves detection accuracy over time",
        "Contextual analysis considers environmental factors",
        "Multi-modal data fusion for comprehensive insights"
      ]
    },
    {
      title: "Alert Generation",
      icon: <Bell className="h-8 w-8 text-error-500" />,
      description: "When the AI detects an emergency situation, such as abnormal vital signs, a fall, or a tamper attempt, it generates appropriate alerts. Critical alerts are immediately dispatched to emergency contacts and relevant authorities.",
      details: [
        "Tiered alert system based on severity and urgency",
        "Geo-aware notifications to nearest emergency services",
        "False positive mitigation through verification protocols",
        "Automated escalation for unacknowledged critical alerts"
      ]
    },
    {
      title: "User Dashboard",
      icon: <Smartphone className="h-8 w-8 text-primary-500" />,
      description: "Users can access their data through a web or mobile dashboard, which displays real-time health metrics, location information, and alert history. The dashboard also allows users to manage device settings and emergency contacts.",
      details: [
        "Real-time data visualization with historical comparison",
        "Customizable alert thresholds and notification preferences",
        "Secure authentication with multi-factor options",
        "Cross-platform availability (web, iOS, Android)"
      ]
    }
  ];
  
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
            How Sanjeevani Works
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From biometric sensing to real-time alerts, discover the end-to-end workflow 
            of the Sanjeevani health and security monitoring system.
          </motion.p>
        </div>
        
        {/* Workflow diagram */}
        <div className="mb-20">
          <div className="bg-dark-400/50 backdrop-blur-md border border-dark-200 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-display text-white mb-6">System Workflow</h3>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex cursor-pointer transition-all duration-300 ${
                        activeStep === index 
                          ? 'opacity-100 scale-105' 
                          : 'opacity-70 hover:opacity-90'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={`
                        relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4
                        ${activeStep === index ? 'bg-dark-300 border-2 border-primary-500 shadow-neon' : 'bg-dark-300'}
                      `}>
                        {step.icon}
                        {index < steps.length - 1 && (
                          <div className={`absolute top-full h-full w-0.5 left-1/2 transform -translate-x-1/2 ${
                            activeStep === index || activeStep === index + 1 ? 'bg-primary-500' : 'bg-dark-200'
                          }`}></div>
                        )}
                      </div>
                      <div>
                        <h4 className={`font-medium text-lg ${
                          activeStep === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-gray-400 text-sm line-clamp-2">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-dark-500 rounded-lg p-6 border border-dark-200 h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center mr-4">
                      {steps[activeStep].icon}
                    </div>
                    <h3 className="text-xl font-medium text-white">{steps[activeStep].title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{steps[activeStep].description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Key Aspects:</h4>
                    <ul className="space-y-2">
                      {steps[activeStep].details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-3 mt-0.5">
                            <span className="text-xs">•</span>
                          </div>
                          <span className="text-gray-400 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <SectionHeading
            title="Technology Stack"
            subtitle="Sanjeevani leverages cutting-edge technologies across hardware, connectivity, and software layers."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <Card>
              <h3 className="text-white font-medium mb-4">Hardware Layer</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-primary-500 mr-3">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Biometric Sensors</p>
                    <p className="text-gray-400 text-xs">Advanced sensors for heart rate, SpO2, temperature, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-primary-500 mr-3">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">GPS Module</p>
                    <p className="text-gray-400 text-xs">High-precision location tracking with low power consumption</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-primary-500 mr-3">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Microcontrollers</p>
                    <p className="text-gray-400 text-xs">ESP32-S3 and STM32H7 for efficient processing and ML tasks</p>
                  </div>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-white font-medium mb-4">Connectivity</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-accent-500 mr-3">
                    <Wifi className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">LoRaWAN Network</p>
                    <p className="text-gray-400 text-xs">Long-range, low-power connectivity for reliable data transmission</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-accent-500 mr-3">
                    <Building className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Gateway Infrastructure</p>
                    <p className="text-gray-400 text-xs">Distributed network of gateways for comprehensive coverage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-accent-500 mr-3">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">Secure Protocols</p>
                    <p className="text-gray-400 text-xs">End-to-end encryption and secure authentication measures</p>
                  </div>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-white font-medium mb-4">Cloud & Software</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-success-500 mr-3">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">AWS IoT Core</p>
                    <p className="text-gray-400 text-xs">Cloud infrastructure for device management and data processing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-success-500 mr-3">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">AI/ML Platform</p>
                    <p className="text-gray-400 text-xs">Machine learning models for pattern recognition and anomaly detection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center text-success-500 mr-3">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-sm">User Interfaces</p>
                    <p className="text-gray-400 text-xs">Web and mobile applications with real-time data visualization</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        
        <div>
          <SectionHeading
            title="Integration Capabilities"
            subtitle="Sanjeevani's open platform enables seamless integration with external systems and services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card>
              <h3 className="text-white font-medium mb-4">Healthcare Systems</h3>
              <p className="text-gray-400 mb-4">
                Sanjeevani integrates with electronic health records (EHR) and telehealth platforms,
                allowing healthcare providers to access patient data for more informed care.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">HIPAA-compliant data sharing</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">HL7 FHIR standard support</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Secure API access for authorized providers</span>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-white font-medium mb-4">Emergency Services</h3>
              <p className="text-gray-400 mb-4">
                Direct integration with emergency response systems ensures rapid assistance
                in critical situations by providing real-time location and health information.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Automated 911 dispatch compatibility</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Emergency responder data portal</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Priority alert routing based on severity</span>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-white font-medium mb-4">Smart Home Ecosystems</h3>
              <p className="text-gray-400 mb-4">
                Connect with popular smart home platforms to enable automated responses
                based on health metrics or security events detected by Sanjeevani.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-500/20 flex items-center justify-center text-success-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Compatible with major smart home platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-500/20 flex items-center justify-center text-success-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Customizable automation triggers</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-500/20 flex items-center justify-center text-success-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Voice assistant integration</span>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="text-white font-medium mb-4">Law Enforcement Systems</h3>
              <p className="text-gray-400 mb-4">
                Authorized law enforcement agencies can access Sanjeevani data for
                monitoring individuals under electronic supervision, with strict privacy controls.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-warning-500/20 flex items-center justify-center text-warning-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Secure portal for authorized personnel</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-warning-500/20 flex items-center justify-center text-warning-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Comprehensive audit logging</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-warning-500/20 flex items-center justify-center text-warning-500 mr-3 mt-0.5">
                    <span className="text-xs">•</span>
                  </div>
                  <span className="text-gray-400 text-sm">Court-admissible records and reports</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;