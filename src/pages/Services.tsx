import React from 'react';
import { Database, Cpu, Globe, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform businesses and accelerate growth across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            
            {/* AI Training & Research */}
            <div id="ai-training" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Synthetic Data, AI Training & Research</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We specialize in creating high-quality synthetic datasets and providing comprehensive AI training programs for corporations, institutions, and research organizations.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Custom Synthetic Datasets</h3>
                      <p className="text-gray-600">Generate privacy-compliant synthetic data for training and testing AI models</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Corporate AI Training</h3>
                      <p className="text-gray-600">Comprehensive training programs for teams and organizations</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Research Collaboration</h3>
                      <p className="text-gray-600">Partner with academic institutions and research organizations</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Synthetic Data
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    Train Your Team
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Database className="w-32 h-32 text-blue-600" />
              </div>
            </div>

            {/* IoT Solutions */}
            <div id="iot" className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center lg:order-first">
                <Cpu className="w-32 h-32 text-blue-600" />
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Embedded IoT for Smart Homes & Offices</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Complete design and deployment of intelligent automation systems that transform spaces into efficient, connected environments.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Smart Automation Systems</h3>
                      <p className="text-gray-600">Intelligent home and office automation solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Agricultural IoT Solutions</h3>
                      <p className="text-gray-600">Smart farming systems for crop monitoring and optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Energy Optimization</h3>
                      <p className="text-gray-600">Smart energy management and conservation technologies</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    See IoT Projects
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    Request Solution
                  </button>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div id="web-dev" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Website Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  AI-assisted website development for businesses, creators, and startups with comprehensive SEO optimization and seamless integrations.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">AI-Powered Development</h3>
                      <p className="text-gray-600">Leverage AI tools for faster, smarter web development</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">SEO & UX Optimization</h3>
                      <p className="text-gray-600">Built-in search engine optimization and user experience design</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Advanced Integrations</h3>
                      <p className="text-gray-600">Seamless third-party integrations and API connections</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Build With Us
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    View Portfolio
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Globe className="w-32 h-32 text-blue-600" />
              </div>
            </div>

            {/* Startup Accelerator */}
            <div id="accelerator" className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center lg:order-first">
                <Rocket className="w-32 h-32 text-blue-600" />
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Startup Acceleration</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Comprehensive mentorship, MVP development support, and product testing services specifically designed for early-stage Nigerian founders.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Mentorship</h3>
                      <p className="text-gray-600">One-on-one guidance from experienced entrepreneurs and technologists</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">MVP Development</h3>
                      <p className="text-gray-600">Technical support for building and launching minimum viable products</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Product Testing & Validation</h3>
                      <p className="text-gray-600">Market research and product validation services</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply to Accelerator
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    Success Stories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business or startup.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold inline-flex items-center space-x-2">
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;