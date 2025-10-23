import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Server, Palette, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Brain,
      title: 'Learning (ML/DS)',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Statistics'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Go', 'C++', 'Java', 'Kotlin'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Server,
      title: 'Backend/DevOps',
      skills: ['FastAPI', 'Django', 'Docker', 'GitHub Actions', 'REST API', 'Azure'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Palette,
      title: 'Frontend',
      skills: ['React', 'Jetpack Compose', 'HTML/CSS', 'JavaScript'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MS SQL Server', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cloud,
      title: 'Cloud & Tools',
      skills: ['Microsoft Azure', 'Git', 'Linux'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
