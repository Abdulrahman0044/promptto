import { Cpu, ExternalLink, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects & Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications of our technology solutions driving impact
              across industries
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Smart Agriculture Platform
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  IoT-powered farm monitoring system with real-time data
                  analytics, automated irrigation, and crop health assessment
                  using AI.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">
                    Agriculture • IoT
                  </span>
                  <Link
                    to="/projects"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                  >
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Innovation Platform
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Next-generation AI platform for creative professionals and
                  businesses. Features advanced prompt engineering and model
                  training capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">
                    AI • Innovation
                  </span>
                  <span className="text-sm text-orange-500 font-medium">
                    Coming Soon
                  </span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Aquaculture Monitoring
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Comprehensive aquaculture management system with water quality
                  monitoring, feeding automation, and fish health analytics.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">
                    Aquaculture • IoT
                  </span>
                  <Link
                    to="/projects"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                  >
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
  )
}

export default Projects
