import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { 
  Heart, 
  Calendar, 
  AlertTriangle, 
  BarChart4,
  ChevronLeft,
  ChevronRight,
  BrainCircuit,
  Activity
} from 'lucide-react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Filler, 
  Legend,
  BarElement
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Insights = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  // Generate mock data
  const generateDailyLabels = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days;
  };
  
  const generateWeeklyLabels = () => {
    const weeks = [];
    for (let i = 4; i >= 0; i--) {
      weeks.push(`Week ${i+1}`);
    }
    return weeks;
  };
  
  const generateMonthlyLabels = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months;
  };
  
  const getLabels = () => {
    switch(timeRange) {
      case 'day':
        return ['12am', '4am', '8am', '12pm', '4pm', '8pm', '11pm'];
      case 'week':
        return generateDailyLabels();
      case 'month':
        return generateWeeklyLabels();
      case 'year':
        return generateMonthlyLabels();
      default:
        return generateDailyLabels();
    }
  };
  
  const heartRateData = {
    labels: getLabels(),
    datasets: [
      {
        fill: true,
        label: 'Heart Rate (BPM)',
        data: [72, 75, 82, 78, 68, 71, 74],
        borderColor: 'rgb(229, 62, 62)',
        backgroundColor: 'rgba(229, 62, 62, 0.2)',
        tension: 0.4,
      },
    ],
  };
  
  const oxygenData = {
    labels: getLabels(),
    datasets: [
      {
        fill: true,
        label: 'Blood Oxygen (%)',
        data: [97, 98, 98, 97, 99, 98, 98],
        borderColor: 'rgb(0, 190, 239)',
        backgroundColor: 'rgba(0, 190, 239, 0.2)',
        tension: 0.4,
      },
    ],
  };
  
  const activityData = {
    labels: getLabels(),
    datasets: [
      {
        label: 'Steps',
        data: [2500, 5600, 4200, 3800, 7200, 6500, 2800],
        backgroundColor: 'rgba(25, 229, 116, 0.5)',
        borderColor: 'rgba(25, 229, 116, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#e2e8f0',
          font: {
            family: "'Exo 2', sans-serif",
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(148, 163, 184, 0.2)',
        borderWidth: 1,
        displayColors: false,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
        ticks: {
          color: '#94a3b8',
          font: {
            family: "'Exo 2', sans-serif",
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
        ticks: {
          color: '#94a3b8',
          font: {
            family: "'Exo 2', sans-serif",
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };
  
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
            Health Insights
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI-powered analysis of your biometric data to provide meaningful health insights and trends.
          </motion.p>
        </div>
        
        {/* AI Warnings */}
        <div className="mb-16">
          <SectionHeading 
            title="AI Health Alerts"
            subtitle="Our artificial intelligence system continuously analyzes your biometric data to identify potential health concerns."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card className="border-l-4 border-l-warning-500 border-dark-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-warning-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium text-lg mb-2">Elevated Heart Rate Detected</h3>
                  <p className="text-gray-400 mb-4">
                    Your heart rate has been consistently above your normal baseline for the past 3 days. 
                    This could be due to increased stress, medication changes, or other factors.
                  </p>
                  <div className="text-xs text-gray-500 mb-2">Detected: Yesterday at 3:45 PM</div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">Dismiss</Button>
                    <Button variant="primary" size="sm">Learn More</Button>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="border-l-4 border-l-success-500 border-dark-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Heart className="h-8 w-8 text-success-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium text-lg mb-2">Sleep Quality Improving</h3>
                  <p className="text-gray-400 mb-4">
                    Your average sleep duration has increased by 45 minutes over the past week, 
                    and your heart rate variability during rest has improved. Keep up the good habits!
                  </p>
                  <div className="text-xs text-gray-500 mb-2">Detected: Today at 9:15 AM</div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">Dismiss</Button>
                    <Button variant="primary" size="sm">View Sleep Data</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Health Trends */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-10">
            <SectionHeading 
              title="Health Trends"
              subtitle="Track your health metrics over time to identify patterns and changes."
            />
            
            <div className="flex items-center space-x-2 bg-dark-400 rounded-lg p-1">
              <button 
                className={`px-3 py-1 rounded-md text-sm ${timeRange === 'day' ? 'bg-dark-300 text-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setTimeRange('day')}
              >
                Day
              </button>
              <button 
                className={`px-3 py-1 rounded-md text-sm ${timeRange === 'week' ? 'bg-dark-300 text-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setTimeRange('week')}
              >
                Week
              </button>
              <button 
                className={`px-3 py-1 rounded-md text-sm ${timeRange === 'month' ? 'bg-dark-300 text-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setTimeRange('month')}
              >
                Month
              </button>
              <button 
                className={`px-3 py-1 rounded-md text-sm ${timeRange === 'year' ? 'bg-dark-300 text-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setTimeRange('year')}
              >
                Year
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-error-500" />
                  <h3 className="text-white font-medium">Heart Rate Trend</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-dark-300">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-gray-400 text-sm">April 2025</span>
                  <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-dark-300">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="h-80">
                <Line options={chartOptions} data={heartRateData} />
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error-500"></div>
                  <span>Average: 74 BPM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                  <span>Peak: 82 BPM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                  <span>Resting: 68 BPM</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary-500" />
                  <h3 className="text-white font-medium">Blood Oxygen</h3>
                </div>
              </div>
              
              <div className="h-60">
                <Line options={chartOptions} data={oxygenData} />
              </div>
            </Card>
            
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart4 className="h-6 w-6 text-success-500" />
                  <h3 className="text-white font-medium">Daily Activity</h3>
                </div>
              </div>
              
              <div className="h-60">
                <Bar options={chartOptions} data={activityData} />
              </div>
            </Card>
          </div>
        </div>
        
        {/* Health Recommendations */}
        <div>
          <SectionHeading 
            title="AI Recommendations"
            subtitle="Personalized health suggestions based on your data trends and patterns."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-primary-500 mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium mb-3">Sleep Schedule</h3>
              <p className="text-gray-400 text-sm mb-4">
                Your sleep pattern shows inconsistency. Try to maintain a regular sleep schedule by going to bed at 10:30 PM and waking up at 6:30 AM.
              </p>
              <div className="text-primary-400 text-sm">Based on your sleep data from the past 14 days</div>
            </Card>
            
            <Card>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-accent-500 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium mb-3">Stress Management</h3>
              <p className="text-gray-400 text-sm mb-4">
                Periodic spikes in your heart rate during non-physical activities suggest potential stress. Consider daily breathing exercises or meditation for 10 minutes.
              </p>
              <div className="text-primary-400 text-sm">Based on heart rate variability analysis</div>
            </Card>
            
            <Card>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-300 text-success-500 mb-4">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium mb-3">Cognitive Performance</h3>
              <p className="text-gray-400 text-sm mb-4">
                Your most alert hours appear to be between 9AM-12PM. Consider scheduling important cognitive tasks during this window for optimal performance.
              </p>
              <div className="text-primary-400 text-sm">Based on activity patterns and vital signs</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;