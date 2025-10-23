import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
     {
  company: 'Freelance / Independent Project',
  role: 'Full-Stack Developer & ML Engineer',
  period: 'Jun 2024 - Present',
  achievements: [
    'Architected and deployed end-to-end web application',
    'Built scalable microservices architecture using FastAPI, React, PostgreSQL, and Docker deployed on Azure Cloud',
    'Engineered custom recommendation engine using TensorFlow and scikit-learn for personalized content delivery',
    'Optimized backend performance achieving 81% latency reduction (800ms → 150ms) through query optimization and caching',
    'Implemented CI/CD pipeline with automated testing, reducing deployment time by 60% and ensuring zero-downtime releases',
    'Developed real-time analytics dashboard processing 10K+ daily events for user behavior insights and A/B testing'
  ],
},
    {
      company: 'nFactorial Incubator',
      role: 'Founder & Fullstack Developer, FitAI',
      period: 'June 2025 - Aug 2025',
      achievements: [
        'Selected top-75 from 2000+ applicants; Demo Day finalist (top 25)',
        'Built fullstack app (FastAPI, React, PostgreSQL, Docker, Azure) with 950+ users',
        'Designed data pipeline for user metrics (workouts, nutrition, progress)',
        'Optimized latency from 800ms to 150ms, handling 1000+ daily requests',
      ],
    },
    {
      company: 'QP Express',
      role: 'Backend Developer',
      period: 'Dec 2024 - Feb 2025',
      achievements: [
        'Developed RESTful APIs (Java/Kotlin) processing 10,000+ daily transactions',
        'Optimized PostgreSQL queries, reduced response time by 25%',
        'Implemented analytical queries for business reporting',
      ],
    },
    {
      company: 'NeuHarmony',
      role: 'Backend & Mobile Developer',
      period: 'Mar 2024 - May 2024',
      achievements: [
        'Mobile app for children with autism, 100+ users',
        'RESTful API + PostgreSQL data schemas',
        'Optimized queries, 15% faster execution',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
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
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                <div className="md:ml-20 relative">
                  <div className="absolute -left-24 top-4 hidden md:block">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-lg text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center text-slate-400 mt-2 sm:mt-0">
                          <Calendar size={18} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
