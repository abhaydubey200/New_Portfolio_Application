import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AlertCircle, Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";

const caseStudyData = {
  title: "Margin Leakage & Discount Elasticity Optimization in Multi-Region Retail",
  overview:
    "A high-impact analytics initiative focused on uncovering hidden margin erosion patterns, quantifying discount sensitivity, and enabling data-backed pricing strategies across a large-scale FMCG retail ecosystem.",

  challenge: {
    icon: AlertCircle,
    title: "Core Business Challenge",
    points: [
      "Executive leadership lacked granular visibility into margin compression trends across a portfolio of 1000+ SKUs",
      "Discount policies were implemented uniformly without accounting for product-category elasticity differences",
      "Regional pricing inconsistencies led to silent profitability distortions across markets",
      "Manual reporting cycles exceeded two weeks, restricting timely and proactive strategic decisions",
    ],
  },

  approach: {
    icon: Lightbulb,
    title: "KPI Architecture & Analytical Framework",
    points: [
      "Engineered a multi-dimensional KPI ecosystem including Gross Margin %, Discount Impact Ratio, Price Elasticity Index, and SKU Profitability Score",
      "Developed advanced SQL models using window functions to compute rolling margin performance and detect inflection thresholds",
      "Segmented discount-sensitivity cohorts through statistical clustering techniques in Python",
      "Built automated margin-threshold alert mechanisms leveraging Tableau parameter controls",
    ],
  },

  solution: {
    icon: Target,
    title: "Executive Dashboard & Intelligence Implementation",
    points: [
      "Designed an executive-level profitability dashboard enabling seamless drill-down from region → category → SKU hierarchy",
      "Created interactive heatmap visualizations to expose margin risk zones across discount tiers and product lines",
      "Integrated predictive simulation modules to forecast margin impact of proposed discount adjustments",
      "Delivered mobile-responsive Tableau dashboards to support real-time, decision-ready insights",
    ],
  },

  outcome: {
    icon: TrendingUp,
    title: "Quantifiable Strategic Impact",
    metrics: [
      {
        label: "Margin Recovery",
        value: "3.2%",
        description: "Sustained annualized improvement in overall gross margin performance",
      },
      {
        label: "Time Reduction",
        value: "85%",
        description: "Accelerated analytical turnaround (2 weeks → 2 days)",
      },
      {
        label: "SKU Optimization",
        value: "127",
        description: "Products strategically repositioned, optimized, or discontinued",
      },
      {
        label: "Revenue Protection",
        value: "$1.8M",
        description: "Estimated annualized profit preservation across regions",
      },
    ],
  },
};

export function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="case-study"
      className="py-24 bg-gradient-to-br from-[#0a0d1a] via-[#0f172a] to-[#1e293b] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

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
                Featured Case Study
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {caseStudyData.title}
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {caseStudyData.overview}
              </p>
            </motion.div>
          </div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-red-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <caseStudyData.challenge.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {caseStudyData.challenge.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {caseStudyData.challenge.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <caseStudyData.approach.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {caseStudyData.approach.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {caseStudyData.approach.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <caseStudyData.solution.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {caseStudyData.solution.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {caseStudyData.solution.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <caseStudyData.outcome.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {caseStudyData.outcome.title}
                </h4>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudyData.outcome.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                    </div>
                    <p className="font-semibold text-white mb-1">
                      {metric.label}
                    </p>
                    <p className="text-sm text-gray-400">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}