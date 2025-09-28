import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: "SyllabAI",
    description: "SyllabAI is a web application that takes in multiple syllabuses and parses them using the OpenAI API. Users can select which sections of the syllabus they want to include in their final document, and the application will generate a document with the selected sections. Uses Flask to create RESTful API routes to post data to the frontend.",
    image: "/syllablogo.png",
    github: "https://github.com/biswal22/SyllabAI",
    live: "https://syllab-ai.vercel.app",
    tech: ["NextJS", "TailwindCSS", "Typescript", "Flask"],
    isPurdueRobotics: false
  },
  {
    title: "PrepOlympiad (COMING SOON)",
    description: "PrepOlympiad is a web application where students can practice problems, track progress, and find resources for all Olympiads. Uses a PostgreSQL database to store user data and uses React to create a user-friendly interface.",
    image: "/prep-logo.png",
    github: "https://github.com/biswal22/PrepOlympiad-final-main",
    live: "#",
    tech: ["React", "PostgresSQL", "Typescript"],
    isPurdueRobotics: false
  },
  {
    title: "Purdue Robotics Club Website",
    description: "Contributed to comprehensive redesign of Purdue Robotics Club website, using React and HTML/CSS. Created a registration form for club's RISE Expo via a Google Firebase database.",
    image: "/arclogo.png",
    live: "https://purduearc.com",
    secondaryLive: "https://rise.purduearc.com",
    tech: ["React", "Firebase", "HTML/CSS", "JavaScript"],
    isPurdueRobotics: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
