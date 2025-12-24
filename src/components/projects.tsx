import { Cpu, Database, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "7farmscale",
    name: "7FarmScale",
    headerIcon: Cpu,
    headerType: "icon",
    headerGradient: "from-[#0D1027] to-blue-800",
    title: "Smart Agriculture Platform",
    description:
      "IoT-powered farm monitoring system with real-time data analytics, automated irrigation, and crop health assessment using AI.",
    tags: "Agriculture • IoT",
    link: "/projects",
    status: "live",
  },
  {
    id: "novetiv",
    name: "Novetiv",
    headerIcon: "/novetiv logo.png",
    headerType: "image",
    headerGradient: "from-[#0D1027] to-blue-800",
    title: "AI Innovation Platform",
    description:
      "Next-generation AI platform for creative professionals and businesses. Features advanced prompt engineering and model training capabilities.",
    tags: "AI • Innovation",
    status: "coming-soon",
  },
  {
    id: "smart-pond",
    name: "Smart Pond",
    headerIcon: Database,
    headerType: "icon",
    headerGradient: "from-[#0D1027] to-blue-800",
    title: "Aquaculture Monitoring",
    description:
      "Comprehensive aquaculture management system with water quality monitoring, feeding automation, and fish health analytics.",
    tags: "Aquaculture • IoT",
    link: "/projects",
    status: "live",
  },
];

function Projects() {
  return (
    <section className="py-20 px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects & Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications of our technology solutions driving impact
            across industries
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.headerIcon;

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 
                           shadow-sm hover:shadow-sm transition-all transform hover:-translate-y-2"
              >
                {/* Header */}
                <div
                  className={`h-48 bg-gradient-to-b ${project.headerGradient} 
                              flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    {project.headerType === "icon" ? (
                      <Icon className="w-16 h-16 mx-auto mb-4" />
                    ) : (
                      <img
                        src={Icon}
                        alt={`${project.name} logo`}
                        className="w-16 h-16 mx-auto mb-4 object-contain"
                      />
                    )}
                    <h4 className="text-xl font-bold">{project.name}</h4>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[blue-600] font-medium">
                      {project.tags}
                    </span>

                    {project.status === "live" ? (
                      <Link
                        to={project.link}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span className="text-sm">View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-sm text-orange-500 font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg 
                       hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
