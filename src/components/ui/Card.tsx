import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glowEffect?: 'blue' | 'purple' | 'green' | 'none';
  animated?: boolean;
  delay?: number;
};

const Card = ({ 
  children, 
  className = '', 
  glowEffect = 'none',
  animated = true,
  delay = 0
}: CardProps) => {
  const glowStyles = {
    blue: 'hover:shadow-neon transition-shadow',
    purple: 'hover:shadow-neon-purple transition-shadow',
    green: 'hover:shadow-neon-green transition-shadow',
    none: ''
  };

  if (!animated) {
    return (
      <div className={`rounded-lg border border-dark-200 bg-dark-400/50 backdrop-blur-md p-6 ${glowStyles[glowEffect]} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div 
      className={`rounded-lg border border-dark-200 bg-dark-400/50 backdrop-blur-md p-6 ${glowStyles[glowEffect]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        type: 'spring',
        damping: 12
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;