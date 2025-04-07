import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-2xl font-bold text-gray-800">Aniket Biswal</h3>
          
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/aniketbiswal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/biswal22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="mailto:biswal@purdue.edu"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aniket Biswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;