import React from "react";
import { Link } from "react-router-dom";

function cta() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of companies and startups who trust PromptTo for their
          AI, IoT, and technology needs.
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
  );
}

export default cta;
