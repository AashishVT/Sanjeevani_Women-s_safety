import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  UserCheck, 
  Send 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    useCase: 'personal'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about Sanjeevani? Get in touch with our team or schedule a demo.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <SectionHeading
              title="Get In Touch"
              subtitle="We're here to answer your questions and help you find the right solution for your needs."
            />
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-primary-500 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email Us</h3>
                  <p className="text-gray-400 mb-1">For general inquiries:</p>
                  <a href="mailto:contact@sanjeevani.tech" className="text-primary-400 hover:text-primary-300 transition-colors">
                    contact@sanjeevani.tech
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-accent-500 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Call Us</h3>
                  <p className="text-gray-400 mb-1">Mon-Fri, 9am-6pm IST:</p>
                  <a href="tel:+919876543210" className="text-primary-400 hover:text-primary-300 transition-colors">
                    +91 987 654 3210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-success-500 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Visit Us</h3>
                  <p className="text-gray-400 mb-1">Our headquarters:</p>
                  <address className="text-primary-400 not-italic">
                    142, Vijay Chambers, Tribhuvan Road<br />
                    Mumbai, Maharashtra 400004<br />
                    India
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-warning-500 mr-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Schedule a Demo</h3>
                  <p className="text-gray-400 mb-2">
                    Want to see Sanjeevani in action? Schedule a personalized demo with our team.
                  </p>
                  <Button 
                    variant="outline"
                    size="sm"
                    icon={<Calendar className="h-4 w-4" />}
                  >
                    Book a Time Slot
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.52 1.84-.81 2.91-.81.43 0 .87.04 1.29.13.75.16 1.45.5 2.09.95.16.11.31.24.46.37.01.01.02.01.03.02h2.02c.02 0 .04 0 .05-.01.13-.06.22-.19.22-.34 0-.09-.03-.17-.09-.24-.13-.15-.32-.26-.53-.31C16.36 8.57 14.35 8 12.22 8c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5c3.03 0 5.5-2.47 5.5-5.5v-.71c0-.32-.26-.59-.59-.59h-3.76c-.19 0-.35.14-.37.33-.02.2.12.37.31.41.14.03.22.18.22.33 0 .15-.08.3-.22.33-1.08.82-2.57.96-3.81.31-1.25-.64-2.03-1.94-2.03-3.35 0-2.08 1.69-3.77 3.77-3.77z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1">
                        Your Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserCheck className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="bg-dark-500 border border-dark-200 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="bg-dark-500 border border-dark-200 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="example@email.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="bg-dark-500 border border-dark-200 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="+1 (123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="useCase" className="block text-gray-300 text-sm font-medium mb-1">
                        Use Case
                      </label>
                      <select
                        id="useCase"
                        name="useCase"
                        className="bg-dark-500 border border-dark-200 text-white rounded-md block w-full px-3 py-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        value={formData.useCase}
                        onChange={handleChange}
                      >
                        <option value="personal">Personal Safety</option>
                        <option value="elderly">Elderly Care</option>
                        <option value="child">Child Tracking</option>
                        <option value="outdoor">Outdoor Adventure</option>
                        <option value="law">Law Enforcement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-1">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="bg-dark-500 border border-dark-200 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                        placeholder="How can we help you?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="bg-dark-500 border border-dark-200 text-white rounded-md block w-full px-3 py-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="Please provide details about your inquiry..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      icon={<Send className="h-4 w-4" />}
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500/20 text-success-500 mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for contacting us. Our team will get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        useCase: 'personal'
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to commonly asked questions about Sanjeevani."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <h3 className="text-white font-medium text-lg mb-3">How accurate are the biometric sensors?</h3>
              <p className="text-gray-400">
                Sanjeevani's biometric sensors meet medical-grade standards with accuracy rates of 98% or higher for heart rate, 97% for SpO2, and 0.1°C for temperature measurements under normal conditions.
              </p>
            </div>
            
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <h3 className="text-white font-medium text-lg mb-3">How long does the battery last?</h3>
              <p className="text-gray-400">
                The standard battery life is 72+ hours with normal usage. Power-saving mode can extend this to up to 7 days, while intensive monitoring may reduce it to around 48 hours.
              </p>
            </div>
            
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <h3 className="text-white font-medium text-lg mb-3">Is my data secure and private?</h3>
              <p className="text-gray-400">
                Yes, all data is encrypted end-to-end using AES-256 encryption. We adhere to strict privacy policies and comply with global standards including GDPR. You own your data and control who can access it.
              </p>
            </div>
            
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <h3 className="text-white font-medium text-lg mb-3">Can Sanjeevani work without cellular coverage?</h3>
              <p className="text-gray-400">
                Yes, Sanjeevani uses LoRaWAN technology which provides connectivity in areas with limited or no cellular coverage. The device will also store data locally when out of range and sync once connectivity is restored.
              </p>
            </div>
            
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <h3 className="text-white font-medium text-lg mb-3">What happens if an SOS is triggered?</h3>
              <p className="text-gray-400">
                When an SOS is triggered, immediate notifications are sent to your designated emergency contacts with your real-time location. If configured, direct alerts can also be sent to local emergency services through our integration partners.
              </p>
            </div>
            
            <div className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <h3 className="text-white font-medium text-lg mb-3">Is Sanjeevani waterproof?</h3>
              <p className="text-gray-400">
                Yes, Sanjeevani has an IP68 rating, making it dust-tight and protected against continuous immersion in water. It can be worn while swimming or showering without concern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;