import { Shield, Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-400 border-t border-dark-300">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary-500" />
              <span className="font-display text-lg font-semibold text-white">
                SANJEEVANI
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Your health and safety companion device that integrates GPS tracking, biometric monitoring, 
              AI-based distress detection, and secure tamper-proof mechanisms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Women Safety
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Womens Safety
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Child Tracking
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Outdoor Adventurer Safety
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Law Enforcement
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400 text-sm">contact@sanjeevani.tech</span>
            </div>
            <div className="mt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 py-2 rounded-md border border-primary-500/30 text-sm font-medium text-primary-300 hover:bg-dark-500 hover:border-primary-500/50 hover:text-primary-200 transition-all"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sanjeevani. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;