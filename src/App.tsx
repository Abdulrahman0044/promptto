import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Learn from './pages/Learn';
import Accelerator from './pages/Accelerator';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/accelerator" element={<Accelerator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;