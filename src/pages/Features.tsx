import SectionHeading from '../components/ui/SectionHeading';
import FeatureCard from '../components/features/FeatureCard';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MapPin, 
  Shield, 
  AlertTriangle, 
  Zap, 
  Battery, 
  Smartphone, 
  Lock,
  Clock,
  CloudRain,
  ThermometerSnowflake,
  Wifi,
  Bell
} from 'lucide-react';

const Features = () => {
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
            Advanced Features
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sanjeevani combines cutting-edge hardware with AI-powered software to create
            a comprehensive health and security monitoring solution.
          </motion.p>
        </div>
        
        <div className="mb-20">
          <SectionHeading
            title="Health Monitoring"
            subtitle="Advanced biometric sensors continuously track vital health metrics with clinical-grade accuracy."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <FeatureCard
              title="Heart Rate Monitoring"
              description="Continuous tracking of heart rate with abnormal rhythm detection and historical trend analysis."
              icon={<Heart className="h-6 w-6" />}
              delay={1}
            />
            
            <FeatureCard
              title="Blood Oxygen (SpO2)"
              description="Real-time monitoring of blood oxygen saturation levels with alerts for dangerous drops."
              icon={<Zap className="h-6 w-6" />}
              delay={2}
            />
            
            <FeatureCard
              title="Body Temperature"
              description="Precise temperature monitoring with fever detection and notification capabilities."
              icon={<ThermometerSnowflake className="h-6 w-6" />}
              delay={3}
            />
            
            <FeatureCard
              title="Fall Detection"
              description="Advanced accelerometer and gyroscope sensors detect falls and automatically trigger SOS alerts."
              icon={<AlertTriangle className="h-6 w-6" />}
              delay={4}
            />
            
            <FeatureCard
              title="Sleep Analysis"
              description="Track sleep patterns including duration, quality, and disturbances for better rest management."
              icon={<Clock className="h-6 w-6" />}
              delay={5}
            />
            
            <FeatureCard
              title="Activity Tracking"
              description="Monitor steps, distance, calories burned, and active minutes throughout the day."
              icon={<Zap className="h-6 w-6" />}
              delay={6}
            />
          </div>
        </div>
        
        <div className="mb-20">
          <SectionHeading
            title="Security Features"
            subtitle="State-of-the-art security and tracking features to ensure user safety in any situation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <FeatureCard
              title="GPS Tracking"
              description="High-precision GPS with real-time location tracking, route history, and customizable geofencing."
              icon={<MapPin className="h-6 w-6" />}
              delay={1}
            />
            
            <FeatureCard
              title="SOS Alert System"
              description="One-touch emergency button that sends location and health data to designated contacts and emergency services."
              icon={<Bell className="h-6 w-6" />}
              delay={2}
            />
            
            <FeatureCard
              title="Tamper Detection"
              description="Advanced sensors detect any unauthorized removal attempts and trigger immediate alerts."
              icon={<Shield className="h-6 w-6" />}
              delay={3}
            />
            
            <FeatureCard
              title="Secure Locking Mechanism"
              description="Dual-layer electronic and mechanical locking system that can only be unlocked via authenticated app access."
              icon={<Lock className="h-6 w-6" />}
              delay={4}
            />
            
            <FeatureCard
              title="Distress Voice Recognition"
              description="AI-powered audio analysis detects signs of distress in voice to automatically activate emergency protocols."
              icon={<Smartphone className="h-6 w-6" />}
              delay={5}
            />
            
            <FeatureCard
              title="Waterproof Design"
              description="IP68 water and dust resistance rating ensures reliability in all weather conditions and environments."
              icon={<CloudRain className="h-6 w-6" />}
              delay={6}
            />
          </div>
        </div>
        
        <div>
          <SectionHeading
            title="Connectivity & Power"
            subtitle="Long-range, low-power communication with extended battery life for reliable operation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <FeatureCard
              title="LoRaWAN Connectivity"
              description="Long-range, low-power wireless network communication with 5+ km range in urban environments."
              icon={<Wifi className="h-6 w-6" />}
              delay={1}
            />
            
            <FeatureCard
              title="72+ Hour Battery Life"
              description="Extended battery operation with power-efficient design and intelligent power management."
              icon={<Battery className="h-6 w-6" />}
              delay={2}
            />
            
            <FeatureCard
              title="Wireless Charging"
              description="Convenient Qi-compatible wireless charging with fast-charge capabilities for minimal downtime."
              icon={<Zap className="h-6 w-6" />}
              delay={3}
            />
            
            <FeatureCard
              title="Offline Operation"
              description="Continues to log vital data even when outside network coverage, with automatic sync when reconnected."
              icon={<Shield className="h-6 w-6" />}
              delay={4}
            />
            
            <FeatureCard
              title="Multi-network Support"
              description="Seamless switching between LoRaWAN, Bluetooth, and WiFi for optimal connectivity in any situation."
              icon={<Wifi className="h-6 w-6" />}
              delay={5}
            />
            
            <FeatureCard
              title="Power Saving Mode"
              description="Intelligent algorithms extend battery life up to 7 days by adjusting monitoring frequency based on activity."
              icon={<Battery className="h-6 w-6" />}
              delay={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;