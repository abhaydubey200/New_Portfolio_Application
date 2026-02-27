import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Database, Code, BarChart3, Brain } from "lucide-react";

const pipelineSteps = [
  {
    id: 1,
    title: "Enterprise Data Sources",
    subtitle: "Multi-Format Data Ingestion Layer",
    description: "Structured and semi-structured ingestion from CSV, Excel, and Microsoft SQL Server ecosystems",
    icon: Database,
    color: "cyan"
  },
  {
    id: 2,
    title: "Snowflake Cloud Platform",
    subtitle: "Scalable Data Warehouse Infrastructure",
    description: "Elastic compute architecture with secure RBAC governance and end-to-end audit visibility",
    icon: Database,
    color: "blue"
  },
  {
    id: 3,
    title: "Advanced SQL Engineering",
    subtitle: "KPI Modeling & Transformation",
    description: "CTEs, analytical window functions, dimensional modeling, and performance-optimized KPI computation",
    icon: Code,
    color: "teal"
  },
  {
    id: 4,
    title: "Python Analytics Engine",
    subtitle: "Processing & Analytical Intelligence",
    description: "Pandas, NumPy, and production-ready Streamlit applications for scalable data workflows",
    icon: Code,
    color: "indigo"
  },
  {
    id: 5,
    title: "Tableau Executive Dashboards",
    subtitle: "Strategic Visualization Framework",
    description: "Interactive dashboards, advanced KPI tracking, and drill-down performance analytics",
    icon: BarChart3,
    color: "purple"
  },
  {
    id: 6,
    title: "Leadership Decision Intelligence",
    subtitle: "Predictive & Strategic Insights",
    description: "Executive-grade decision enablement powered by forecasting models and performance intelligence",
    icon: Brain,
    color: "pink"
  }
];

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500 to-blue-500",
  blue: "from-blue-500 to-indigo-500",
  teal: "from-teal-500 to-cyan-500",
  indigo: "from-indigo-500 to-purple-500",
  purple: "from-purple-500 to-pink-500",
  pink: "from-pink-500 to-rose-500"
};

export function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                Enterprise System Architecture
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                End-to-End Modern Data Intelligence Pipeline
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A cloud-first analytics ecosystem transforming raw enterprise data into executive-ready decision intelligence
              </p>
            </motion.div>
          </div>

          {/* Desktop Pipeline View */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-6 gap-4">
                {pipelineSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="relative"
                  >
                    {index < pipelineSteps.length - 1 && (
                      <div className="absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-cyan-400 animate-pulse" />
                      </div>
                    )}

                    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-full flex flex-col">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[step.color]} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-xs text-cyan-400 mb-3 font-medium">
                          {step.subtitle}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-gray-500">
                            Phase {step.id}
                          </span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Pipeline View */}
          <div className="lg:hidden space-y-6">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                {index < pipelineSteps.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-cyan-400 rotate-90 animate-pulse" />
                  </div>
                )}

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[step.color]} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">
                          {step.title}
                        </h4>
                        <span className="text-xs font-mono text-gray-500">
                          Phase {step.id}
                        </span>
                      </div>
                      <p className="text-sm text-cyan-400 mb-2 font-medium">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">Elastic Scalability</div>
              <p className="text-sm text-gray-400">Cloud-native, performance-optimized architecture</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-600/10 backdrop-blur-xl border border-teal-400/30 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">Enterprise Security</div>
              <p className="text-sm text-gray-400">Role-based access control with complete audit traceability</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">Real-Time Intelligence</div>
              <p className="text-sm text-gray-400">Live executive dashboards enabling instant decision-making</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}