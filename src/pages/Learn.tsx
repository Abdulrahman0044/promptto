import React from 'react';
import { BookOpen, Play, Award, Calendar, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Learn = () => {
  const courses = [
    {
      id: 1,
      title: "AI Fundamentals Bootcamp",
      description: "Comprehensive introduction to artificial intelligence, machine learning, and deep learning concepts.",
      duration: "8 weeks",
      level: "Beginner",
      students: "500+",
      rating: 4.9,
      price: "₦150,000",
      features: ["Live Sessions", "Hands-on Projects", "Certificate", "Job Support"],
      nextStart: "January 15, 2025"
    },
    {
      id: 2,
      title: "IoT Development Masterclass",
      description: "Learn to build and deploy IoT solutions from sensors to cloud platforms.",
      duration: "10 weeks",
      level: "Intermediate",
      students: "300+",
      rating: 4.8,
      price: "₦200,000",
      features: ["Hardware Kit", "Real Projects", "Mentorship", "Certificate"],
      nextStart: "February 1, 2025"
    },
    {
      id: 3,
      title: "Full-Stack Web Development",
      description: "Master modern web development with React, Node.js, and cloud deployment.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: "800+",
      rating: 4.9,
      price: "₦180,000",
      features: ["Portfolio Projects", "Industry Mentors", "Job Placement", "Certificate"],
      nextStart: "January 22, 2025"
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      description: "Learn data analysis, visualization, and machine learning with Python and R.",
      duration: "10 weeks",
      level: "Intermediate",
      students: "400+",
      rating: 4.7,
      price: "₦170,000",
      features: ["Real Datasets", "Industry Tools", "Capstone Project", "Certificate"],
      nextStart: "February 8, 2025"
    }
  ];

  const onDemandCourses = [
    {
      title: "Introduction to Machine Learning",
      duration: "4 hours",
      lessons: 12,
      price: "₦25,000"
    },
    {
      title: "IoT Sensor Programming",
      duration: "3 hours",
      lessons: 8,
      price: "₦20,000"
    },
    {
      title: "React Development Basics",
      duration: "6 hours",
      lessons: 15,
      price: "₦30,000"
    },
    {
      title: "Python for Data Analysis",
      duration: "5 hours",
      lessons: 10,
      price: "₦28,000"
    }
  ];

  const certifications = [
    {
      title: "Certified AI Practitioner",
      description: "Industry-recognized certification in AI and machine learning",
      duration: "3 months",
      price: "₦100,000"
    },
    {
      title: "IoT Solutions Architect",
      description: "Professional certification for IoT system design and implementation",
      duration: "4 months",
      price: "₦120,000"
    },
    {
      title: "Full-Stack Developer",
      description: "Comprehensive web development certification",
      duration: "6 months",
      price: "₦150,000"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn & Train with PromptTo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive training programs, bootcamps, and certification courses designed to advance your career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold">
              Browse Courses
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
              Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured learning programs designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Intensive Bootcamps</h3>
              <p className="text-sm text-gray-600 mb-4">8-12 week immersive programs</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                View Bootcamps
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <Play className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">On-demand Courses</h3>
              <p className="text-sm text-gray-600 mb-4">Learn at your own pace</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Start Learning
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Certifications</h3>
              <p className="text-sm text-gray-600 mb-4">Industry-recognized credentials</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Get Certified
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">AI Tuesdays</h3>
              <p className="text-sm text-gray-600 mb-4">Weekly insights & tutorials</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intensive Bootcamps</h2>
            <p className="text-lg text-gray-600">Comprehensive programs with live instruction and hands-on projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                      <div className="text-sm text-gray-600">Total cost</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold">{course.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                    <div>
                      <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold">{course.students}</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div>
                      <Award className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold">{course.rating}</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Next Start Date:</span>
                      <span className="text-blue-600">{course.nextStart}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Enroll Now
                    </button>
                    <button className="px-6 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">On-Demand Courses</h2>
            <p className="text-lg text-gray-600">Self-paced learning with lifetime access</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onDemandCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{course.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Start Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-lg text-gray-600">Industry-recognized credentials to advance your career</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{cert.price}</div>
                  <div className="text-sm text-gray-600">{cert.duration} program</div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Certified
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have advanced their careers with PromptTo's training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold inline-flex items-center space-x-2">
              <span>Browse All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all">
              Talk to Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;