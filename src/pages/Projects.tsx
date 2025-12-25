import React from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import Cta from "../components/cta";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "7FarmScale",
      category: "Agriculture • IoT",
      description:
        "IoT-powered farm monitoring system with real-time data analytics, automated irrigation, and crop health assessment using AI. Deployed across multiple farms in Nigeria with 40% increased crop yield.",
      image: "agriculture",
      icon: "/farm.svg",
      technologies: [
        "IoT Sensors",
        "Machine Learning",
        "React",
        "Node.js",
        "MongoDB",
      ],
      status: "Live",
      metrics: {
        farms: "15+",
        yield: "+40%",
        water: "-30%",
      },
    },
    {
      id: 2,
      title: "Novetiv",
      category: "AI • Innovation",
      description:
        "Next-generation AI platform for creative professionals and businesses. Features advanced prompt engineering, model training capabilities, and collaborative AI workflows.",
      image: "ai",
      icon: "novlogo.svg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      status: "Coming Soon",
      metrics: {
        models: "50+",
        users: "Beta",
        accuracy: "95%",
      },
    },
    {
      id: 3,
      title: "Smart Pond",
      category: "Aquaculture • IoT",
      description:
        "Comprehensive aquaculture management system with water quality monitoring, feeding automation, and fish health analytics. Optimizes fish farming operations.",
      image: "aquaculture",
      icon: "/agric.svg",
      technologies: ["IoT Sensors", "Python", "Vue.js", "InfluxDB", "Grafana"],
      status: "Live",
      metrics: {
        ponds: "8+",
        mortality: "-25%",
        efficiency: "+35%",
      },
    },
    // {
    //   id: 4,
    //   title: "EduTech Platform",
    //   category: "Education • Web",
    //   description: "AI-powered learning management system for Nigerian educational institutions. Features adaptive learning, progress tracking, and automated assessment.",
    //   image: "education",
    //   icon: Globe,
    //   technologies: ["React", "Node.js", "AI/ML", "MongoDB", "WebRTC"],
    //   status: "Live",
    //   metrics: {
    //     students: "1000+",
    //     schools: "12",
    //     completion: "+60%"
    //   }
    // },
    // {
    //   id: 5,
    //   title: "FinTech Dashboard",
    //   category: "Finance • Analytics",
    //   description: "Real-time financial analytics dashboard for Nigerian fintech companies. Provides insights into transaction patterns, risk assessment, and customer behavior.",
    //   image: "fintech",
    //   icon: Database,
    //   technologies: ["React", "D3.js", "Python", "Redis", "PostgreSQL"],
    //   status: "Live",
    //   metrics: {
    //     transactions: "1M+",
    //     accuracy: "99.2%",
    //     latency: "<100ms"
    //   }
    // },
    // {
    //   id: 6,
    //   title: "Smart Energy Grid",
    //   category: "Energy • IoT",
    //   description: "Intelligent energy management system for residential and commercial buildings. Optimizes energy consumption and integrates renewable energy sources.",
    //   image: "energy",
    //   icon: Cpu,
    //   technologies: ["IoT", "Machine Learning", "React", "Python", "MQTT"],
    //   status: "Pilot",
    //   metrics: {
    //     buildings: "5",
    //     savings: "25%",
    //     efficiency: "+40%"
    //   }
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-blue-200 text-blue-600";
      case "Coming Soon":
        return "bg-orange-100 text-orange-400";
      case "Pilot":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getGradientClass = (image: string) => {
    const gradients = {
      agriculture: "from-green-400 to-blue-600",
      ai: "from-purple-500 to-blue-700",
      aquaculture: "from-blue-400 to-cyan-600",
      education: "from-indigo-400 to-purple-600",
      fintech: "from-blue-500 to-indigo-700",
      energy: "from-yellow-400 to-orange-600",
    };
    return (
      gradients[image as keyof typeof gradients] || "from-blue-400 to-blue-600"
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects & Innovations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real-world applications of our technology solutions driving impact
            across industries in Nigeria and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              AI & Machine Learning
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              IoT Solutions
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Web Development
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Data Analytics
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  {/* Project Image/Icon */}
                  <div
                    className={`h-48 bg-priColor flex items-center justify-center relative`}
                  >
                    <img
                      src={IconComponent}
                      alt={`${project.id} logo`}
                      className="w-16 h-16 mx-auto mb-4 object-contain"
                    />{" "}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-lg p-2">
                          <div className="text-sm font-bold text-blue-600">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors text-sm">
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      {project.status === "Live" && (
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors text-sm">
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Impact
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results from our technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
              <Cta />?
      
      {/* <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your innovative ideas to life with
            cutting-edge technology solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
            Start Your Project
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Projects;
