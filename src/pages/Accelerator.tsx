import React from 'react';
import { Rocket, Users, Target, TrendingUp, CheckCircle, ArrowRight, Calendar, Award } from 'lucide-react';

const Accelerator = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "One-on-one guidance from successful entrepreneurs and industry experts"
    },
    {
      icon: Target,
      title: "MVP Development",
      description: "Technical support and resources to build your minimum viable product"
    },
    {
      icon: TrendingUp,
      title: "Market Validation",
      description: "Research and testing to validate your product-market fit"
    },
    {
      icon: Award,
      title: "Funding Support",
      description: "Assistance with investor pitches and funding opportunities"
    }
  ];

  const program = [
    {
      phase: "Phase 1",
      title: "Ideation & Validation",
      duration: "4 weeks",
      activities: ["Market Research", "Customer Interviews", "Problem Validation", "Business Model Canvas"]
    },
    {
      phase: "Phase 2",
      title: "MVP Development",
      duration: "8 weeks",
      activities: ["Technical Architecture", "Product Development", "User Testing", "Iteration"]
    },
    {
      phase: "Phase 3",
      title: "Launch & Scale",
      duration: "4 weeks",
      activities: ["Go-to-Market Strategy", "Launch Preparation", "Metrics Tracking", "Growth Planning"]
    }
  ];

  const successStories = [
    {
      company: "AgriTech Solutions",
      founder: "Adebayo Ogundimu",
      description: "Developed an AI-powered crop monitoring system that increased farm yields by 35%",
      funding: "₦50M Series A",
      sector: "Agriculture"
    },
    {
      company: "EduConnect",
      founder: "Kemi Adebisi",
      description: "Built a platform connecting students with tutors across Nigeria",
      funding: "₦25M Seed",
      sector: "Education"
    },
    {
      company: "FinFlow",
      founder: "Chidi Okafor",
      description: "Created a digital payment solution for small businesses",
      funding: "₦75M Series A",
      sector: "Fintech"
    }
  ];

  const requirements = [
    "Early-stage startup (pre-seed to seed)",
    "Nigerian founder or Nigeria-focused business",
    "Technology-driven solution",
    "Scalable business model",
    "Committed full-time founder(s)"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PromptTo Startup Accelerator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive mentorship, MVP development support, and product testing services specifically designed for early-stage Nigerian founders ready to scale their innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold">
                Apply Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-600">Startups Accelerated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">₦2B+</div>
              <div className="text-sm text-gray-600">Total Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">16 weeks</div>
              <div className="text-sm text-gray-600">Program Duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support to take your startup from idea to market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              16-Week Program Structure
            </h2>
            <p className="text-lg text-gray-600">
              Structured approach to building and launching your startup
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {program.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-semibold">{phase.phase}</div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    <div className="text-sm text-gray-600">{phase.duration}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Meet some of our successful alumni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {story.sector}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{story.founder}</div>
                      <div className="text-sm text-gray-600">Founder & CEO</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">{story.funding}</div>
                      <div className="text-sm text-gray-600">Raised</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Requirements
            </h2>
            <p className="text-lg text-gray-600">
              We're looking for committed founders with scalable ideas
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Next Cohort Timeline
            </h2>
            <p className="text-lg text-gray-600">
              Cohort 4 - Starting March 2025
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Applications Open</div>
                <div className="text-sm text-gray-600">January 15, 2025</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Interviews</div>
                <div className="text-sm text-gray-600">February 15-28, 2025</div>
              </div>
              <div>
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Selection</div>
                <div className="text-sm text-gray-600">March 5, 2025</div>
              </div>
              <div>
                <Rocket className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-gray-900">Program Starts</div>
                <div className="text-sm text-gray-600">March 15, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Startup?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Nigeria's premier startup accelerator and turn your innovative idea into a thriving business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold inline-flex items-center space-x-2">
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accelerator;