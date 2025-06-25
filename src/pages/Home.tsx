import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Cpu, Globe, Rocket, CheckCircle, ExternalLink } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Novetiv Coming Soon Banner */}
      <div className="bg-blue-600 text-white text-center py-3">
        <p className="text-sm font-medium">✨ Novetiv is coming soon - Stay tuned for exciting updates!</p>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovating the Future with
              <span className="text-blue-600"> AI, IoT & Human-Centered Tech</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering Nigerian startups and global enterprises with cutting-edge AI training, IoT solutions, and innovative technology development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/accelerator"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                Join the Accelerator
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">AI Models Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">IoT Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Startups Accelerated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Four Pillars of Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform businesses and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Training & Research */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Synthetic Data, AI Training & Research</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Advanced synthetic dataset generation, comprehensive AI training programs for corporations and institutions, plus cutting-edge research support.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Custom synthetic datasets</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Corporate AI training programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Research collaboration</span>
                    </li>
                  </ul>
                  <Link 
                    to="/services#ai-training"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* IoT Solutions */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Embedded IoT for Smart Homes & Offices</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete design and deployment of intelligent automation systems. From smart farm monitors to energy-saving technologies.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Smart automation systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Agricultural IoT solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Energy optimization tech</span>
                    </li>
                  </ul>
                  <Link 
                    to="/services#iot"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Website Development</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    AI-assisted website development for businesses, creators, and startups. Complete with SEO optimization and seamless integrations.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>AI-powered development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>SEO & UX optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Advanced integrations</span>
                    </li>
                  </ul>
                  <Link 
                    to="/services#web-dev"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Startup Accelerator */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Startup Acceleration</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive mentorship, MVP development support, and product testing services. Designed for early-stage Nigerian founders.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Expert mentorship program</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>MVP development support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Product testing & validation</span>
                    </li>
                  </ul>
                  <Link 
                    to="/accelerator"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects & Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications of our technology solutions driving impact across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 7FarmScale */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Cpu className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold">7FarmScale</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Agriculture Platform</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  IoT-powered farm monitoring system with real-time data analytics, automated irrigation, and crop health assessment using AI.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">Agriculture • IoT</span>
                  <Link to="/projects" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Novetiv */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <img 
                    src="/novetiv logo.png" 
                    alt="Novetiv Logo" 
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                  <h4 className="text-xl font-bold">Novetiv</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Innovation Platform</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Next-generation AI platform for creative professionals and businesses. Features advanced prompt engineering and model training capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">AI • Innovation</span>
                  <span className="text-sm text-orange-500 font-medium">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Smart Pond */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Database className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold">Smart Pond</h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aquaculture Monitoring</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Comprehensive aquaculture management system with water quality monitoring, feeding automation, and fish health analytics.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">Aquaculture • IoT</span>
                  <Link to="/projects" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies and startups who trust PromptTo for their AI, IoT, and technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold"
            >
              Get Started Today
            </Link>
            <Link 
              to="/accelerator"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Join Our Accelerator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;