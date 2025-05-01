import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0, ...props }: FeatureCardProps) => {
  return (
    <Card 
      className="h-full"
      delay={delay}
      {...props}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-primary-500">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </Card>
  );
};

export default FeatureCard;