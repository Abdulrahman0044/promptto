import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgVideo from "/assets/background.mp4";

function Hero() {
  const phrases = [
    "Artificial Intelligence",
    "Robotics Systems",
    "Smart Systems",
    "Autonomous Tech",
  ];

  const typingSpeed = 100; // ms per character
  const pauseDuration = 1500; // pause after phrase is fully typed

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: number;

    const currentPhrase = phrases[currentIndex];

    if (typing) {
      if (displayedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, typingSpeed / 2);
      } else {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentIndex, phrases]);

  // Split phrase into two lines if possible
  const words = displayedText.split(" ");
  const firstLine = words[0] || "";
  const secondLine = words.slice(1).join(" ") || "";

  return (
    <div className="pt-20 bg-[#0D1027]">
      <section className="video-container">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-bg pointer-events-none"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* CONTENT LAYER */}
        <div className="relative z-20 min-h-screen bg-[#0D1027]/80 flex flex-col">
          {/* Banner */}
          <div className="bg-blue-600/80 text-white text-center py-3">
            <p className="text-sm font-medium">
              ✨ Novetiv is coming soon – Stay tuned for exciting updates!
            </p>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex  mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
              <h1
                className="text-5xl md:text-7xl font-extrabold  uppercase tracking-wide 
               min-h-[10rem] md:min-h-[12rem] 
               flex flex-col justify-center"
              >
                {/* First line: white */}
                <span className="text-white block leading-tight">
                  {firstLine}
                </span>

                {/* Second line: gradient */}
                {secondLine && (
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-300 leading-tight">
                    {secondLine}
                  </span>
                )}
              </h1>

              <p className="max-w-sm sm:max-w-2xl text-xl text-gray-300 mb-8 mx-auto leading-relaxed">
                Empowering global enterprises with cutting-edge AI training, IoT
                solutions, and human-centered intelligent systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/accelerator"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  Join the Accelerator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
