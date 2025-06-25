import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI Research', 'IoT', 'Startups', 'Case Studies', 'Tutorials'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Synthetic Data in AI Training",
      excerpt: "Exploring how synthetic datasets are revolutionizing machine learning while addressing privacy and bias concerns in AI development.",
      category: "AI Research",
      author: "Dr. Adebayo Ogundimu",
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "Data Privacy"],
      featured: true
    },
    {
      id: 2,
      title: "How IoT Transformed a Smart Farm in Lagos",
      excerpt: "A deep dive into our 7FarmScale deployment, showcasing 40% increased crop yield through intelligent monitoring and automation.",
      category: "Case Studies",
      author: "Kemi Adebisi",
      date: "December 10, 2024",
      readTime: "12 min read",
      tags: ["IoT", "Agriculture", "Case Study"],
      featured: true
    },
    {
      id: 3,
      title: "5 Essential Steps for Nigerian Tech Startups",
      excerpt: "Key insights from our accelerator program on building successful tech ventures in the Nigerian market and beyond.",
      category: "Startups",
      author: "Chidi Okafor",
      date: "December 8, 2024",
      readTime: "6 min read",
      tags: ["Startups", "Nigeria", "Entrepreneurship"],
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable IoT Architectures",
      excerpt: "Technical deep-dive into designing IoT systems that can handle thousands of devices while maintaining reliability and security.",
      category: "IoT",
      author: "Fatima Hassan",
      date: "December 5, 2024",
      readTime: "10 min read",
      tags: ["IoT", "Architecture", "Scalability"],
      featured: false
    },
    {
      id: 5,
      title: "AI-Powered Web Development: A New Era",
      excerpt: "How artificial intelligence is transforming web development workflows and enabling faster, smarter application creation.",
      category: "Tutorials",
      author: "Samuel Okonkwo",
      date: "December 3, 2024",
      readTime: "7 min read",
      tags: ["AI", "Web Development", "Tutorial"],
      featured: false
    },
    {
      id: 6,
      title: "Aquaculture Revolution with Smart Technology",
      excerpt: "Examining how our Smart Pond system is transforming fish farming in Nigeria with IoT sensors and predictive analytics.",
      category: "Case Studies",
      author: "Aisha Bello",
      date: "November 28, 2024",
      readTime: "9 min read",
      tags: ["IoT", "Aquaculture", "Innovation"],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights from the Edge of Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Latest thoughts on AI, IoT, startup acceleration, and the future of technology in Nigeria and Africa.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{post.readTime}</span>
                      </div>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tuesdays Section */}
      <section id="ai-tuesdays" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Tuesdays
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our weekly series exploring the latest in artificial intelligence, machine learning, and emerging technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
              Subscribe to AI Tuesdays
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all">
              View Past Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights, case studies, and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;