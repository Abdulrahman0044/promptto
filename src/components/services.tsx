import { Database, CheckCircle, ArrowRight, Cpu, Globe, Rocket } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Four Pillars of Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform
              businesses and accelerate growth
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Synthetic Data, AI Training & Research
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Advanced synthetic dataset generation, comprehensive AI
                    training programs for corporations and institutions, plus
                    cutting-edge research support.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Embedded IoT for Smart Homes & Offices
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete design and deployment of intelligent automation
                    systems. From smart farm monitors to energy-saving
                    technologies.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Smart Website Development
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    AI-assisted website development for businesses, creators,
                    and startups. Complete with SEO optimization and seamless
                    integrations.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Startup Acceleration
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive mentorship, MVP development support, and
                    product testing services. Designed for early-stage Nigerian
                    founders.
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
  )
}

export default Services
