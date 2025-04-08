import TimelineItem from '../ui/TimelineItem';

const experiences = [
  {
    title: "Incoming Software Engineering Intern",
    company: "AT&T",
    period: "June 2025",
    description: "Incoming Software Engineering Intern at AT&T in Dallas, TX",
    skills: ["Full Stack", "Machine Learning"],
    logo: "/attlogo.svg.png"
  },
  {
    title: "Machine Learning Intern",
    company: "MISO",
    period: "May 2024 - January 2025",
    description: "Developed a NeuralProphet model to predict future energy demand in the Midwest ISO market using historical time series data and weather patterns.",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    logo: "/miso.png"
  },
  {
    title: "Undergraduate Researcher",
    company: "Purdue University",
    period: "June 2023 - December 2023",
    description: "Recreated neural scene representations and computer image renderings from prior research articles to apply towards autonomous vehicle landscape and trajectory generation.",
    skills: ["Generative Query Network", "PyTorch", "Neural Rendering"],
    logo: "/purdue-boilermakers-8-team-logo-cutout-sign_mainProductImage_Full__81253.jpg"
  }
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
