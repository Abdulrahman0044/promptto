import React from 'react';

function Starts() {
const partners = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'WHO', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/WHO_logo.svg' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
{ name: 'GeeksforGeeks', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg' },    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Akamai', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Akamai_logo.svg' },
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-5xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600 mt-2">AI Models Trained</div>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-5xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600 mt-2">IoT Deployments</div>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-5xl font-bold text-blue-600">10+</div>
            <div className="text-sm text-gray-600 mt-2">Websites Built</div>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-5xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600 mt-2">Startups Accelerated</div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center pt-16">
          <h3 className="text-xl font-sans font-semibold text-gray-500 mb-10 uppercase tracking-wider">Trusted by Industry Leaders</h3>
          
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="w-20 md:w-28 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="w-full h-auto object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Starts;