import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import { Heart, Thermometer, Activity, Zap } from 'lucide-react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Filler, 
  Legend 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

type BiometricCardProps = {
  title: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  type: 'heart' | 'oxygen' | 'temperature' | 'activity';
  delay?: number;
};

const BiometricCard = ({ title, value, unit, status, type, delay = 0 }: BiometricCardProps) => {
  const [historicalData, setHistoricalData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  
  useEffect(() => {
    // Generate some random historical data
    const generateData = () => {
      const baseValue = value;
      const variance = type === 'heart' ? 10 : type === 'oxygen' ? 2 : type === 'temperature' ? 0.5 : 20;
      
      const newData = Array.from({ length: 20 }, () => {
        return baseValue + (Math.random() - 0.5) * variance;
      });
      
      const timeLabels = Array.from({ length: 20 }, (_, i) => {
        const minutes = 20 - i;
        return minutes === 0 ? 'Now' : `${minutes}m ago`;
      }).reverse();
      
      setHistoricalData(newData);
      setLabels(timeLabels);
    };
    
    generateData();
    
    // Update data periodically
    const interval = setInterval(() => {
      const newValue = value + (Math.random() - 0.5) * 2;
      setHistoricalData(prev => [...prev.slice(1), newValue]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [value, type]);
  
  const getIcon = () => {
    switch(type) {
      case 'heart':
        return <Heart className="h-6 w-6 text-error-500" />;
      case 'oxygen':
        return <Zap className="h-6 w-6 text-primary-500" />;
      case 'temperature':
        return <Thermometer className="h-6 w-6 text-warning-500" />;
      case 'activity':
        return <Activity className="h-6 w-6 text-success-500" />;
    }
  };
  
  const getStatusColor = () => {
    switch(status) {
      case 'normal':
        return 'text-success-500';
      case 'warning':
        return 'text-warning-500';
      case 'critical':
        return 'text-error-500';
    }
  };
  
  const getGradientColor = () => {
    switch(type) {
      case 'heart':
        return ['rgba(229, 62, 62, 0.3)', 'rgba(229, 62, 62, 0)'];
      case 'oxygen':
        return ['rgba(0, 190, 239, 0.3)', 'rgba(0, 190, 239, 0)'];
      case 'temperature':
        return ['rgba(250, 167, 2, 0.3)', 'rgba(250, 167, 2, 0)'];
      case 'activity':
        return ['rgba(25, 229, 116, 0.3)', 'rgba(25, 229, 116, 0)'];
    }
  };
  
  const getLineColor = () => {
    switch(type) {
      case 'heart':
        return 'rgb(229, 62, 62)';
      case 'oxygen':
        return 'rgb(0, 190, 239)';
      case 'temperature':
        return 'rgb(250, 167, 2)';
      case 'activity':
        return 'rgb(25, 229, 116)';
    }
  };
  
  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: title,
        data: historicalData,
        borderColor: getLineColor(),
        backgroundColor: function(context: any) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          
          if (!chartArea) {
            return;
          }
          
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          const colors = getGradientColor();
          gradient.addColorStop(0, colors[1]);
          gradient.addColorStop(1, colors[0]);
          
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      }
    ]
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(148, 163, 184, 0.2)',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      }
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };
  
  return (
    <Card 
      className="h-full"
      glowEffect={
        type === 'heart' ? 'purple' : 
        type === 'oxygen' ? 'blue' : 
        type === 'temperature' ? 'purple' : 
        'green'
      }
      delay={delay}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="text-white font-medium">{title}</h3>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()} bg-dark-500`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      
      <div className="mb-4 flex items-end">
        <span className="text-3xl font-display font-bold text-white">{value}</span>
        <span className="ml-1 text-gray-400">{unit}</span>
      </div>
      
      <div className="h-32">
        <Line data={chartData} options={chartOptions as any} />
      </div>
    </Card>
  );
};

export default BiometricCard;