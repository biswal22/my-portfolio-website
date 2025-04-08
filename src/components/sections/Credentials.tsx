import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaCertificate, FaTrophy } from 'react-icons/fa';

// Updated skills data without proficiency values
const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C/C++", "SQL", "TypeScript", "JavaScript", "HTML/CSS"]
  },
  {
    category: "Frameworks and Libraries",
    skills: ["Tensorflow", "PyTorch", "Flask", "NodeJS", "NextJS", "React"]
  },
  {
    category: "Cloud Platforms and Databases",
    skills: ["Microsoft Azure", "Jupyter", "Google Firebase",  "MongoDB", "PostgresSQL"]
  },
  {
    category: "Soft Skills",
    skills: ["Great Communicator", "Problem Solver", "Creative Thinker"]
  }
];

const certificationsData = [
  {
    title: "Akuna Capital Options 201",
    issuer: "Akuna Capital",
    date: "November 2024",
    image: "/akuna201.png"
  },
  {
    title: "Akuna Capital Options 101",
    issuer: "Akuna Capital",
    date: "August 2024",
    image: "/akuna101.png"
  }
  // Add more certifications
];

const awardsData = [
  {
    title: "Intern Data Challenge Winner",
    organization: "MISO",
    description: "Led a group of 4 interns to win MISO's Intern Data Challenge where we were tasked with presenting unique predictive models utilizing given datasets to a panel of judges.",
    date: "July 2024"
  },
  {
    title: "5-time AIME Qualifier",
    organization: "Mathematical Association of America",
    description: "2 time AMC Honor Roll with Distinction, highest AIME score of 10",
    date: "2018-2022"
  },
  {
    title: "National Mathcounts Qualifier",
    organization: "Mathcounts",
    description: "3rd place overall in Indiana State Mathcounts Competition to become a national qualifier",
    date: "2018"
  }
  // Add more awards
];

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Credentials = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
    { id: 'awards', label: 'Awards', icon: FaTrophy }
  ];

  return (
    <section id="credentials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Credentials
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 space-x-1 bg-gray-200 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                } flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 ease-in-out`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'awards' && (
              <div className="space-y-6">
                {awardsData.map((award, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaTrophy className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {award.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {award.organization}
                        </p>
                        <p className="text-gray-500 mt-2 text-sm">
                          {award.description}
                        </p>
                        <p className="text-primary mt-2 text-sm">
                          {award.date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Credentials; 
