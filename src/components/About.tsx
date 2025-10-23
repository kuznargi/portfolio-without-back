import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Briefcase, Code2 } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-8xl">👩‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Fullstack developer with 2+ years of experience building scalable applications for{' '}
              <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-semibold">
                950+ users
              </span>
              .
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Currently transitioning into{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold">
                Machine Learning
              </span>{' '}
              through intensive coursework (Outpeer Data Science).
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Strong engineering background in Python, FastAPI, PostgreSQL, Docker, and cloud technologies.
            </p>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default About;
