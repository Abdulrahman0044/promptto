import React from "react";
import { Link } from "react-router-dom";

interface ctaInterface {
  title?: string;
  subtitle?: string;
  action1?: string;
  action2?: string;
  showTwoActions?: boolean;
}

function cta({
  title = "Ready to Transform Your Business?",
  subtitle = "Join hundreds of companies and startups who trust PromptTo for their AI, IoT, and technology needs.",
  action1 = "Get Started Today",
  action2 = " Join Our Accelerator",
  showTwoActions = true,
}: ctaInterface) {
  return (
    <section className="py-20 bg-[#0D1027] bg-bg-pattern bg-right bg-contain bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold"
          >
            {action1}
          </Link>
          {showTwoActions && (
            <Link
              to="/accelerator"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white  transition-all"
            >
              {action2}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default cta;
