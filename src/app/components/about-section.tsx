import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Database, BarChart3, Layers } from "lucide-react";

const stats = [
  { label: "Dashboards", value: 15, suffix: "+" },
  { label: "Modules", value: 16, suffix: "+" },
  { label: "Multi-Region", value: 100, suffix: "% Coverage" },
  { label: "Production", value: 5, suffix: " Deployments" }
];

const highlights = [
  {
    icon: BarChart3,
    title: "Executive Profitability Dashboards",
    description: "Real-time margin analysis and profit kill zone identification"
  },
  {
    icon: TrendingUp,
    title: "Margin Erosion & Discount Sensitivity Analysis",
    description: "Advanced analytics for pricing strategy optimization"
  },
  {
    icon: Database,
    title: "Snowflake Data Warehouse Integration",
    description: "Scalable cloud data platform with enterprise-grade security"
  },
  {
    icon: Layers,
    title: "End-to-End Analytics Lifecycle",
    description: "Ingestion → Modeling → Visualization → Insight"
  }
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                Professional Summary
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Enterprise Analytics Engineer
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Specializing in transforming complex data ecosystems into actionable executive intelligence
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Core Competencies</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-cyan-400 font-medium mb-2">Technical Excellence</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• KPI Engineering Frameworks</li>
                  <li>• SQL Modeling & Validation</li>
                  <li>• Streamlit Analytics Applications</li>
                </ul>
              </div>
              <div>
                <p className="text-teal-400 font-medium mb-2">Platform Expertise</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Snowflake Data Warehousing</li>
                  <li>• Tableau Enterprise Dashboards</li>
                  <li>• Oracle Linux VM Deployment</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-400 font-medium mb-2">Business Impact</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Executive Decision Support</li>
                  <li>• Strategic Analytics</li>
                  <li>• Stakeholder Communication</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
