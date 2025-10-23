import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
  
    {
      emoji: '🏋️',
      title: 'FitAI',
      description: 'AI fitness app with personalized workout and nutrition plans for 950+ users',
      tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Azure'],
      demo: '#',
      github: 'https://github.com/kuznargi',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      emoji: '👥',
      title: 'StudentsHub',
      description: 'Social platform for students with real-time features, serving 500+ users',
      tech: ['Django', 'Python', 'PostgreSQL', 'WebSockets'],
      demo: '#',
      github: 'https://github.com/kuznargi',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      emoji: '🌱',
      title: 'EcoSteps',
      description: 'Eco-activist mobile app with geolocation features, 30% retention increase',
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      demo: '#',
      github: 'https://github.com/kuznargi',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      emoji: '🤖',
      title: 'ML Projects',
      description: 'Portfolio of machine learning projects: Titanic classification, sentiment analysis, image classification',
      tech: ['Scikit-learn', 'PyTorch', 'Pandas', 'NumPy'],
      demo: null,
      github: 'https://github.com/kuznargi',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                <div className={`inline-flex w-16 h-16 items-center justify-center text-4xl rounded-2xl bg-gradient-to-br ${project.gradient} mb-4`}>
                  {project.emoji}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      <span>Demo</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
