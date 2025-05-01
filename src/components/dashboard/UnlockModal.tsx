import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertTriangle } from 'lucide-react';
import Button from '../ui/Button';

type UnlockModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UnlockModal = ({ isOpen, onClose }: UnlockModalProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const correctPassword = '123456'; // In a real app, this would be authenticated securely
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      setError('Please enter the security code');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (password === correctPassword) {
        setSuccess(true);
        setLoading(false);
        // Auto close after successful unlock
        setTimeout(() => {
          onClose();
          setPassword('');
          setSuccess(false);
        }, 3000);
      } else {
        setError('Invalid security code. Please try again.');
        setLoading(false);
      }
    }, 1500);
  };
  
  const handleClose = () => {
    onClose();
    setPassword('');
    setError('');
    setSuccess(false);
  };
  
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'delete'];
  
  const handleKeyPress = (value: string | number) => {
    if (value === 'clear') {
      setPassword('');
    } else if (value === 'delete') {
      setPassword(prev => prev.slice(0, -1));
    } else {
      setPassword(prev => {
        if (prev.length < 6) {
          return prev + value;
        }
        return prev;
      });
    }
    
    if (error) {
      setError('');
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-md w-full bg-dark-400 border border-dark-200 rounded-lg overflow-hidden"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-display text-white">Secure Band Unlock</h2>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {!success ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm mb-3">
                      Enter the 6-digit security code to unlock the band. This will disable the tamper protection.
                    </p>
                    
                    <div className="relative">
                      <div className="flex justify-between mb-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-10 h-14 rounded-md flex items-center justify-center text-xl font-bold border-2 ${
                              password.length > i 
                                ? 'border-primary-500 bg-dark-500 text-white' 
                                : 'border-dark-300 bg-dark-500/50 text-gray-400'
                            }`}
                          >
                            {password.length > i ? '*' : ''}
                          </div>
                        ))}
                      </div>
                      
                      {error && (
                        <div className="flex items-center gap-2 text-error-500 text-sm mb-4">
                          <AlertTriangle className="h-4 w-4" />
                          <span>{error}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {buttons.map((btn, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`h-14 rounded-md font-medium transition-all ${
                          btn === 'clear' || btn === 'delete'
                            ? 'bg-dark-500 text-gray-300 hover:bg-dark-600'
                            : 'bg-dark-500 text-white hover:bg-dark-600 hover:text-primary-400'
                        }`}
                        onClick={() => handleKeyPress(btn)}
                      >
                        {btn === 'delete' ? '←' : btn === 'clear' ? 'Clear' : btn}
                      </button>
                    ))}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={loading}
                    className={`h-12 ${loading ? 'opacity-70' : ''}`}
                  >
                    {loading ? 'Verifying...' : 'Unlock Band'}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500/20 text-success-500 mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Band Unlocked Successfully</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Tamper protection has been temporarily disabled. The band will automatically re-lock after 5 minutes.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UnlockModal;