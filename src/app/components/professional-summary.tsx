import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function ProfessionalSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="summary"
      className="py-24 bg-gradient-to-br from-[#0a0d1a] via-[#0f172a] to-[#1e293b] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                
                {/* Decorative Glow */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />

                {/* Image Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 aspect-square">
                  
                  <img
                    src="src/assets/me.jpg"
                    alt="Abhay - Enterprise Business Intelligence Engineer"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0d1a] to-transparent p-6">
                    <p className="text-white font-bold text-xl">
                      Strategic BI & Analytics Engineer
                    </p>
                    <p className="text-cyan-400 text-sm">
                      Enterprise Data Strategy & Decision Systems
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right: Executive Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                  Professional Overview
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Enterprise Business Intelligence Engineer
                </h3>
                <p className="text-xl text-gray-400">
                  Designing scalable analytics ecosystems that transform complex operational data into strategic executive intelligence
                </p>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Specialized in building 
                  <span className="text-cyan-400 font-semibold">
                    {" "}enterprise-grade analytics platforms
                  </span>{" "}
                  that convert raw multi-source datasets into high-impact decision systems. 
                  Focused on profitability visibility, pricing intelligence, KPI architecture, 
                  and scalable BI infrastructure deployment.
                </p>

                <div className="grid md:grid-cols-2 gap-3 my-6">
                  {[
                    "Executive-Level Profitability Dashboards",
                    "Margin Optimization & Leakage Diagnostics",
                    "Discount Elasticity & Pricing Intelligence",
                    "Customer Loyalty & Rewards Analytics",
                    "Strategic KPI Architecture Design",
                    "Advanced SQL Data Modeling",
                    "Snowflake Cloud Data Warehousing",
                    "Python-Based Data Engineering",
                    "Production-Ready Streamlit Applications",
                    "Oracle Linux Virtual Machine Deployment",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <p>
                  Expertise across the 
                  <span className="text-teal-400 font-semibold">
                    {" "}complete analytics lifecycle
                  </span>
                  : Data Ingestion → Data Warehousing → SQL Engineering → Python Processing → Interactive Visualization → Executive Decision Enablement.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">15+</div>
                  <div className="text-xs text-gray-400">
                    Enterprise Dashboards Delivered
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-teal-400 mb-1">16+</div>
                  <div className="text-xs text-gray-400">
                    Advanced Analytics Components
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-xs text-gray-400">
                    Pan-Regional Data Coverage
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">5+</div>
                  <div className="text-xs text-gray-400">
                    Live Production Deployments
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}