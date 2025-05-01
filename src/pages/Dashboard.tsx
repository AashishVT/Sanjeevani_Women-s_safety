import { useState, useEffect, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import BiometricCard from '../components/dashboard/BiometricCard';
import LocationMap from '../components/dashboard/LocationMap';
import AlertStatus from '../components/dashboard/AlertStatus';
import { Bell, Settings, Shield } from 'lucide-react';
import Button from '../components/ui/Button';

type OutletContextType = {
  openUnlockModal: () => void;
};

const Dashboard = () => {
  const { openUnlockModal } = useOutletContext<OutletContextType>();
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">Live Dashboard</h1>
              <p className="text-gray-400">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                icon={<Settings className="h-4 w-4" />}
              >
                Settings
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={openUnlockModal}
                icon={<Bell className="h-4 w-4" />}
              >
                Unlock Band
              </Button>
            </div>
          </div>
          
          <div className="w-full h-2 bg-dark-400 overflow-hidden rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
              animate={{ 
                width: ['0%', '100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <BiometricCard 
            title="Heart Rate" 
            value={74} 
            unit="BPM" 
            status="normal" 
            type="heart"
            delay={1}
          />
          <BiometricCard 
            title="Blood Oxygen" 
            value={98} 
            unit="%" 
            status="normal" 
            type="oxygen"
            delay={2}
          />
          <BiometricCard 
            title="Body Temperature" 
            value={37.2} 
            unit="°C" 
            status="normal" 
            type="temperature"
            delay={3}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 h-[400px]">
            <LocationMap />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <AlertStatus type="sos" delay={4} />
            <AlertStatus type="tamper" delay={5} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-dark-400/50 backdrop-blur-md border border-dark-200 rounded-lg p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary-500" />
                  <h3 className="text-white font-medium">Device Status</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-dark-500 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Battery</span>
                    <span className="text-success-500 text-sm font-medium">Good</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-medium">85%</span>
                    <div className="w-20 h-2 bg-dark-400 rounded-full overflow-hidden">
                      <div className="h-full bg-success-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Est. 68 hours remaining</p>
                </div>
                
                <div className="bg-dark-500 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Signal Strength</span>
                    <span className="text-success-500 text-sm font-medium">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-medium">-67 dBm</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-4 bg-success-500 rounded-sm"></div>
                      <div className="w-2 h-6 bg-success-500 rounded-sm"></div>
                      <div className="w-2 h-8 bg-success-500 rounded-sm"></div>
                      <div className="w-2 h-10 bg-success-500 rounded-sm"></div>
                      <div className="w-2 h-12 bg-success-500 rounded-sm"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">LoRaWAN connection</p>
                </div>
                
                <div className="bg-dark-500 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Band Status</span>
                    <span className="text-primary-500 text-sm font-medium">Locked</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-medium">Secure</span>
                    <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full border-2 border-primary-500"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Tamper protection active</p>
                </div>
                
                <div className="bg-dark-500 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Data Transfer</span>
                    <span className="text-success-500 text-sm font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-medium">10s</span>
                    <div className="relative w-6 h-6">
                      <div className="absolute inset-0 rounded-full border-2 border-success-500 opacity-75 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-success-500"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Update frequency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;