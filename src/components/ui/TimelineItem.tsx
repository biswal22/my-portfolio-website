import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  logo?: string;
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const logoSrc = experience.logo || "/placeholder-logo.png";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gray-400">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-gray-100" />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 ml-6 hover:shadow-lg transition-shadow flex">
        {/* Company Logo */}
        <div className="flex-shrink-0 mr-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center bg-white">
            <img 
              src={logoSrc} 
              alt={`${experience.company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
          <p className="font-medium text-gray-700">{experience.company}</p>
          <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          
          {experience.skills && (
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;