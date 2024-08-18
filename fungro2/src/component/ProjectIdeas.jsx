import React from 'react';

const ProjectIdeas = () => {
  const projects = [
    {
      title: 'Build your brand',
      price: '₹2000',
      description: 'Get your logos, brochure designed professionally - 5 Samples',
      linkText: 'Start Now →',
    },
    {
      title: 'Customize your website',
      price: '₹5000–₹15000',
      description: 'Get a professional website designed to increase business growth.',
      linkText: 'Start Now →',
    },
    {
      title: 'Reach more customers',
      price: '₹5000',
      description: 'Get Teenlancers to manage your social media handles',
      linkText: 'Start Now →',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Project ideas</h2>
        <p className="text-lg mb-8">
          Cost-effective, innovative and timely delivery of projects by smartest talent on planet (Teenlancers)
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-green-500 mb-2">{project.title}</h3>
              <p className="text-green-400 mb-2">{project.price}</p>
              <p className="mb-4">{project.description}</p>
              <a href="#" className="text-green-300 font-semibold hover:underline">
                {project.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeas;
