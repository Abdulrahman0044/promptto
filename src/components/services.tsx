import {
  Database,
  Cpu,
  Globe,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "ai-training",
    title: "Synthetic Data, AI Training & Research",
    description:
      "Advanced synthetic dataset generation, comprehensive AI training programs for corporations and institutions, plus cutting-edge research support.",
    icon: Database,
    items: [
      "Custom synthetic datasets",
      "Corporate AI training programs",
      "Research collaboration",
    ],
    link: "/services#ai-training",
  },
  {
    id: "iot",
    title: "Embedded IoT for Smart Homes & Offices",
    description:
      "Complete design and deployment of intelligent automation systems. From smart farm monitors to energy-saving technologies.",
    icon: Cpu,
    items: [
      "Smart automation systems",
      "Agricultural IoT solutions",
      "Energy optimization tech",
    ],
    link: "/services#iot",
  },
  {
    id: "web-dev",
    title: "Smart Website Development",
    description:
      "AI-assisted website development for businesses, creators, and startups. Complete with SEO optimization and seamless integrations.",
    icon: Globe,
    items: [
      "AI-powered development",
      "SEO & UX optimization",
      "Advanced integrations",
    ],
    link: "/services#web-dev",
  },
  {
    id: "accelerator",
    title: "Startup Acceleration",
    description:
      "Comprehensive mentorship, MVP development support, and product testing services. Designed for early-stage Nigerian founders.",
    icon: Rocket,
    items: [
      "Expert mentorship program",
      "MVP development support",
      "Product testing & validation",
    ],
    link: "/accelerator",
  },
];

function Services() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Four Pillars of Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform businesses
            and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-md p-8 border border-gray-200 
                           transition-all transform hover:-translate-y-2 
                           hover:shadow-sm group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0D1027] rounded-md flex items-center justify-center 
                                  flex-shrink-0 transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6 text-sm grid grid-cols-2">
                      {service.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
