import { CheckCircle, ArrowRight } from "lucide-react";

import { Database, Cpu, Globe, Rocket } from "lucide-react";

export const SERVICES = [
  {
    id: "ai-training",
    title: "Synthetic Data & AI Research Systems",
    description:
      "We design privacy-safe synthetic datasets and train teams to build, evaluate, and deploy AI systems at production scale.",
    icon: Database,
    bullets: [
      {
        title: "Custom Synthetic Datasets",
        desc: "High-fidelity, privacy-compliant data for training and testing",
      },
      {
        title: "Corporate AI Training",
        desc: "Hands-on programs for engineers, analysts, and teams",
      },
      {
        title: "Research Collaboration",
        desc: "Applied AI research with institutions and labs",
      },
    ],
    primaryCta: "Get Synthetic Data",
    secondaryCta: "Train Your Team",
  },
  {
    id: "iot",
    title: "Embedded IoT & Smart Environments",
    description:
      "We design connected hardware-software systems for homes, agriculture, and energy that work in real-world conditions.",
    icon: Cpu,
    bullets: [
      {
        title: "Smart Automation Systems",
        desc: "Homes and offices that adapt intelligently",
      },
      {
        title: "Agricultural IoT",
        desc: "Monitoring, control, and optimization for farming",
      },
      {
        title: "Energy Optimization",
        desc: "Smarter consumption and cost control",
      },
    ],
    primaryCta: "See IoT Projects",
    secondaryCta: "Request a Solution",
  },
  {
    id: "web-dev",
    title: "Intelligent Web Platforms",
    description:
      "High-performance websites and platforms built with modern stacks, AI-assisted workflows, and SEO baked in.",
    icon: Globe,
    bullets: [
      {
        title: "AI-Assisted Development",
        desc: "Faster builds with smarter tooling",
      },
      {
        title: "SEO & UX Optimization",
        desc: "Designed for visibility and conversion",
      },
      {
        title: "Advanced Integrations",
        desc: "APIs, payments, analytics, and automation",
      },
    ],
    primaryCta: "Build With Us",
    secondaryCta: "View Portfolio",
  },
  {
    id: "accelerator",
    title: "Startup Acceleration & MVP Engineering",
    description:
      "We help early-stage founders move from idea to validated product with technical depth and real mentorship.",
    icon: Rocket,
    bullets: [
      {
        title: "Expert Mentorship",
        desc: "Direct access to experienced builders",
      },
      {
        title: "MVP Development",
        desc: "Rapid, scalable product foundations",
      },
      {
        title: "Product Validation",
        desc: "Testing assumptions before scaling",
      },
    ],
    primaryCta: "Apply to Accelerator",
    secondaryCta: "Success Stories",
  },
];

const Services = () => {
  return (
    <div className="pt-20 px-10">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Capabilities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent systems, modern software, and deep technical support
            designed to move businesses forward.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-28">
          {SERVICES.map((service, index) => {
            const isVisualLeft = index % 2 !== 0;
            const Icon = service.icon;
            const reversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid lg:grid-cols-2 gap-14 items-center"
              >
                {/* Visual */}
                <div
                  className={`relative bg-priColor  rounded-xl h-96 flex items-center justify-center overflow-hidden
        ${isVisualLeft ? "lg:order-1" : "lg:order-2"}
      `}
                >
                  <Icon className="w-32 h-32 text-blue-300 relative z-10" />
                </div>

                {/* Content */}
                <div
                  className={`${isVisualLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.bullets.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-6">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium">
                      {service.primaryCta}
                    </button>
                    <button className="text-blue-600 inline-flex items-center gap-2 hover:gap-3 transition-all">
                      {service.secondaryCta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
