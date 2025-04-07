import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image?: string;
  github?: string;
  live?: string;
  secondaryLive?: string;
  tech: string[];
  isPurdueRobotics?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Function to handle card click
  const handleCardClick = () => {
    if (!project.isPurdueRobotics && project.live) {
      window.open(project.live, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full ${!project.isPurdueRobotics && project.live ? 'cursor-pointer' : ''}`}
      onClick={handleCardClick}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {/* Circular project image */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 border-2 border-gray-700">
              <img
                src={project.image || "/placeholder-project.png"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Project title */}
          <h3 className="text-xl font-bold ml-4 text-white">{project.title}</h3>
        </div>
        
        {/* Project description */}
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* GitHub link with "Source Code" text */}
            {project.github && !project.isPurdueRobotics && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-5 h-5 mr-2" />
                <span>Source Code</span>
              </a>
            )}

            {/* Special case for Purdue Robotics Club project */}
            {project.isPurdueRobotics && (
              <div className="flex space-x-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-primary text-white rounded-md flex items-center text-sm hover:bg-primary/90 transition-colors"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5 mr-1.5" />
                  Main Site
                </a>
                <a
                  href={project.secondaryLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-primary text-white rounded-md flex items-center text-sm hover:bg-primary/90 transition-colors"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5 mr-1.5" />
                  RISE Expo
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;