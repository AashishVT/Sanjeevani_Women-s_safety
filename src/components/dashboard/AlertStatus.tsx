import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import { AlertTriangle, Shield } from 'lucide-react';
import Button from '../ui/Button';

type AlertStatusProps = {
  type: 'sos' | 'tamper';
  delay?: number;
};

const AlertStatus = ({ type, delay = 0 }: AlertStatusProps) => {
  const [isActive, setIsActive] = useState(false);
  const [lastTriggered, setLastTriggered] = useState<string | null>(null);
  
  useEffect(() => {
    // Randomly decide if alert should be active
    if (Math.random() > 0.7) {
      setIsActive(true);
      setLastTriggered('Just now');
    } else {
      setIsActive(false);
      setLastTriggered(type === 'sos' ? '3 hours ago' : '2 days ago');
    }
  }, [type]);
  
  const handleTest = () => {
    setIsActive(true);
    setLastTriggered('Just now');
    
    // Reset after 10 seconds
    setTimeout(() => {
      setIsActive(false);
      setLastTriggered('Just now');
    }, 10000);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setLastTriggered('Just now');
  };
  
  return (
    <Card 
      className={`h-full overflow-hidden border-2 transition-colors duration-300 ${
        isActive ? (type === 'sos' ? 'border-error-500' : 'border-warning-500') : 'border-dark-200'
      }`}
      glowEffect={type === 'sos' ? 'purple' : 'blue'}
      delay={delay}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          {type === 'sos' ? (
            <AlertTriangle className={`h-6 w-6 ${isActive ? 'text-error-500' : 'text-gray-400'}`} />
          ) : (
            <Shield className={`h-6 w-6 ${isActive ? 'text-warning-500' : 'text-gray-400'}`} />
          )}
          <h3 className="text-white font-medium">
            {type === 'sos' ? 'SOS Alert' : 'Tamper Detection'}
          </h3>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          isActive 
            ? (type === 'sos' ? 'text-error-500 bg-error-500/10 animate-pulse' : 'text-warning-500 bg-warning-500/10 animate-pulse') 
            : 'text-success-500 bg-dark-500'
        }`}>
          {isActive ? 'ACTIVE' : 'Inactive'}
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-400 text-sm">
          {isActive 
            ? (type === 'sos' 
              ? 'Emergency SOS button has been activated. Authorities have been notified.' 
              : 'Tamper attempt detected. Security alert has been triggered.')
            : (type === 'sos'
              ? 'No active SOS alerts. Press the test button to simulate an alert.'
              : 'No tamper attempts detected. The band is secure.')
          }
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Last {type === 'sos' ? 'alert' : 'detection'}: {lastTriggered}
        </p>
      </div>
      
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          size="sm"
          className={`flex-1 ${isActive ? 'hidden' : 'block'}`}
          onClick={handleTest}
        >
          Test {type === 'sos' ? 'Alert' : 'Detection'}
        </Button>
        <Button 
          variant={type === 'sos' ? 'primary' : 'secondary'} 
          size="sm"
          className={`flex-1 ${!isActive ? 'hidden' : 'block'}`}
          onClick={handleReset}
        >
          Reset {type === 'sos' ? 'Alert' : 'Detection'}
        </Button>
      </div>
    </Card>
  );
};

export default AlertStatus;