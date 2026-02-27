import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                Academic Background
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Education
              </h3>
            </motion.div>
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Bachelor of Technology (B.Tech)
                    </h4>
                    <p className="text-xl text-cyan-400 font-medium mb-1">
                      Computer Science & Engineering (Data Analytics)
                    </p>
                    <p className="text-gray-400">
                      GLA University, Mathura
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 font-medium">2025</span>
                  </div>
                </div>

                {/* Specialization Highlights */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <Award className="w-5 h-5 text-cyan-400 mb-2" />
                    <p className="text-sm font-semibold text-white mb-1">Data Analytics</p>
                    <p className="text-xs text-gray-400">Specialized track</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <Award className="w-5 h-5 text-teal-400 mb-2" />
                    <p className="text-sm font-semibold text-white mb-1">BI Engineering</p>
                    <p className="text-xs text-gray-400">Core competency</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <Award className="w-5 h-5 text-blue-400 mb-2" />
                    <p className="text-sm font-semibold text-white mb-1">Enterprise Systems</p>
                    <p className="text-xs text-gray-400">Production experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Coursework */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                Relevant Coursework & Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Business Intelligence",
                  "Statistical Analysis",
                  "Machine Learning",
                  "Data Warehousing",
                  "Cloud Computing",
                  "Software Engineering"
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 bg-white/5 border border-white/20 rounded-lg text-sm text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
