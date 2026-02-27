import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const timeline = [
  {
    title: "Executive Profitability Dashboard",
    description: "Designed and deployed real-time executive dashboards for margin analysis and profitability tracking across multi-region retail operations",
    period: "2024"
  },
  {
    title: "Profit Kill Zones & Margin Analysis",
    description: "Developed analytical frameworks to identify profit erosion zones and discount sensitivity patterns using advanced SQL modeling",
    period: "2024"
  },
  {
    title: "Snowflake + Tableau Integration",
    description: "Architected enterprise data pipeline connecting Snowflake data warehouse with Tableau for scalable BI visualization",
    period: "2024"
  },
  {
    title: "SQL KPI Modeling & Validation",
    description: "Built robust KPI calculation engines with comprehensive validation frameworks for data accuracy and consistency",
    period: "2023-2024"
  },
  {
    title: "Streamlit Data Tools & Applications",
    description: "Developed production-ready analytics applications using Python and Streamlit for internal stakeholder use",
    period: "2023-2024"
  },
  {
    title: "Oracle Linux VM Deployment",
    description: "Deployed and maintained analytics applications on Oracle Linux virtual machines with enterprise security protocols",
    period: "2023"
  }
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-[#0a0d1a] via-[#0f172a] to-[#1e293b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

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
                Corporate Experience
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Dharampal Satyapal Limited (DS Group)
              </h3>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Briefcase className="w-5 h-5" />
                <span>IT, Data Analytics & Business Intelligence</span>
              </div>
            </motion.div>
          </div>

          {/* Company Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-12 shadow-lg shadow-cyan-500/10"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Data Analytics & BI Engineer</h4>
                <p className="text-cyan-400 font-medium">DS Group FMCG Analytics</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">2023 - 2025</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading end-to-end analytics initiatives for FMCG operations, designing executive intelligence 
              systems that drive strategic decision-making across multi-region retail channels. Specialized in 
              building scalable data infrastructure, KPI frameworks, and production-grade analytics applications.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-teal-500 transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                    <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full border-4 border-[#0f172a] shadow-lg shadow-cyan-500/50" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
              Key Impact Metrics
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  15+
                </p>
                <p className="text-sm text-gray-400">Executive Dashboards Deployed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  100%
                </p>
                <p className="text-sm text-gray-400">Multi-Region Coverage</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  5
                </p>
                <p className="text-sm text-gray-400">Production Deployments</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
