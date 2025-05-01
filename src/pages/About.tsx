import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Users, MapPin, Zap } from 'lucide-react';

const About = () => {
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
            About Sanjeevani
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our mission is to create innovative safety and health monitoring solutions that
            provide peace of mind and save lives.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="The journey behind Sanjeevani and our mission to revolutionize personal safety."
            />
            
            <div className="space-y-6 mt-8 text-gray-300">
              <p>
                Sanjeevani was born from a personal experience that highlighted the critical need for better personal safety technology. When one of our founders experienced a family emergency where a loved one couldn't be located for several hours during a medical crisis, the idea for a comprehensive monitoring solution began to take shape.
              </p>
              <p>
                Founded in 2023 by a team of engineers and healthcare professionals, Sanjeevani (meaning "life-giving" in Sanskrit) was developed to address the gaps in existing personal safety and health monitoring solutions. We recognized that most products on the market addressed either health tracking OR security concerns, but rarely both in an integrated way.
              </p>
              <p>
                After two years of research and development, we've created a revolutionary wearable device that combines advanced biometric monitoring with tamper-proof security features and AI-powered analytics. Our solution is designed to serve multiple use cases, from elderly care to personal safety, outdoor adventures, and law enforcement.
              </p>
              <p>
                Today, Sanjeevani is committed to continuous innovation in the personal safety space, with a focus on creating technology that respects privacy while providing comprehensive protection. Our team is dedicated to the vision that everyone deserves to feel safe and secure, with the confidence that help is available when needed.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative h-full flex items-center">
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-5 transform hover:-translate-y-2 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/20 text-primary-500 mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Safety First</h3>
                  <p className="text-gray-400 text-sm">
                    Our core principle is that personal safety should never be compromised.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-5 transform hover:-translate-y-2 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-500/20 text-accent-500 mb-3">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Innovation</h3>
                  <p className="text-gray-400 text-sm">
                    Continuously pushing technological boundaries to improve our solutions.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-5 transform hover:-translate-y-2 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-success-500/20 text-success-500 mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Inclusivity</h3>
                  <p className="text-gray-400 text-sm">
                    Designing solutions that are accessible and useful for everyone.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-5 transform hover:-translate-y-2 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-warning-500/20 text-warning-500 mb-3">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Reliability</h3>
                  <p className="text-gray-400 text-sm">
                    Building technology that works when it matters most—every time.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The visionaries and experts behind Sanjeevani's innovative technology."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div 
              className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">A</span>
                </div>
              </div>
              <h3 className="text-white font-medium text-lg mb-1">Aashish</h3>
              <p className="text-gray-400 mb-3">Founder & CEO</p>
              <p className="text-gray-500 text-sm mb-4">
                Former security consultant with expertise in IoT and embedded systems. Visionary behind Sanjeevani's core technology.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">B</span>
                </div>
              </div>
              <h3 className="text-white font-medium text-lg mb-1">Bhavesh</h3>
              <p className="text-gray-400 mb-3">CTO</p>
              <p className="text-gray-500 text-sm mb-4">
                Hardware expert with previous experience at leading wearable technology companies. Leads product development and engineering.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">A</span>
                </div>
              </div>
              <h3 className="text-white font-medium text-lg mb-1">Aayush</h3>
              <p className="text-gray-400 mb-3">Head of Product</p>
              <p className="text-gray-500 text-sm mb-4">
                Healthcare technology specialist with a background in medical devices. Ensures Sanjeevani meets real-world user needs.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center text-primary-500">
                  <span className="font-display text-2xl">J</span>
                </div>
              </div>
              <h3 className="text-white font-medium text-lg mb-1">Jayesh</h3>
              <p className="text-gray-400 mb-3">Lead Engineer</p>
              <p className="text-gray-500 text-sm mb-4">
                AI and machine learning specialist who developed Sanjeevani's predictive health algorithms and alert system.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div>
          <SectionHeading
            title="Our Partnerships & Certifications"
            subtitle="We collaborate with leading organizations to ensure our technology meets the highest standards."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center justify-center bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <Award className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-white font-medium text-lg mb-2">Medical Device Certification</h3>
              <p className="text-gray-400 text-sm text-center">
                Our biometric sensors meet medical-grade standards for accuracy and reliability in health monitoring.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <Shield className="h-12 w-12 text-accent-500 mb-4" />
              <h3 className="text-white font-medium text-lg mb-2">Data Security Compliance</h3>
              <p className="text-gray-400 text-sm text-center">
                All data transmission and storage follows strict encryption and privacy standards, including GDPR compliance.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-dark-400/50 backdrop-blur-md rounded-lg border border-dark-200 p-6">
              <MapPin className="h-12 w-12 text-success-500 mb-4" />
              <h3 className="text-white font-medium text-lg mb-2">Emergency Services Integration</h3>
              <p className="text-gray-400 text-sm text-center">
                Partnered with regional emergency response services for direct alert integration and rapid response protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;