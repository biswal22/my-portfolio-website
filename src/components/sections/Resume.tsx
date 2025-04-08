import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  // You can also import the PDF using Vite's import.meta.url
  const resumePath = '/Biswal_Aniket_Resume_.docx.pdf';

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Resume</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-[8.5/11] w-full">
            <object
              data={resumePath}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex items-center justify-center h-full bg-gray-800 text-white">
                <p>Unable to display PDF. Please download to view.</p>
              </div>
            </object>
          </div>
          <div className="p-4 flex justify-center">
            <motion.a
              href={resumePath}
              download="Aniket_Biswal_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
