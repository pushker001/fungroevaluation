import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 p-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        {isOpen ? <FaMinus className="text-white" /> : <FaPlus className="text-white" />}
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQList = () => {
  return (
    <div className="max-h-[60vh] overflow-y-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <FAQItem 
        question="How can I start earning money?" 
        answer="Simple 5 step process – (1) download funngro and register for earning, (2) complete your evaluation project, (3) apply to projects of your interest, (4) submit completed projects, (5) Get paid!" 
      />
      <FAQItem 
        question="Why should Teens work?" 
        answer="Working as a teen helps in developing skills, building confidence, and gaining experience." 
      />
      <FAQItem 
        question="What kind of work can I do?" 
        answer="You can work on various projects depending on your skills and interests, such as graphic design, content writing, and more." 
      />
      {/* Add more FAQItems here as needed */}
    </div>
  );
};

export default FAQList;
