import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2025 Nargiza Kuzybakhova. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
           <a
                href="/resume.pdf"
                download="Nargiza-Kuzybakhova-Resume.pdf"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Download Resume
              </a>
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
