import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Promptto.png" 
                alt="PromptTo Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Innovating the future with AI, IoT, and human-centered technology solutions across Nigeria and Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#ai-training" className="text-gray-600 hover:text-blue-600 transition-colors">AI Training & Research</Link></li>
              <li><Link to="/services#iot" className="text-gray-600 hover:text-blue-600 transition-colors">IoT Solutions</Link></li>
              <li><Link to="/services#web-dev" className="text-gray-600 hover:text-blue-600 transition-colors">Web Development</Link></li>
              <li><Link to="/accelerator" className="text-gray-600 hover:text-blue-600 transition-colors">Startup Accelerator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</Link></li>
              <li><Link to="/learn" className="text-gray-600 hover:text-blue-600 transition-colors">Learning Platform</Link></li>
              <li><Link to="/blog#ai-tuesdays" className="text-gray-600 hover:text-blue-600 transition-colors">AI Tuesdays</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:prompttodev@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  prompttodev@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 PromptTo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;