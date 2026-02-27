import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FileText, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const insights = [
  {
    title: "Enterprise KPI Engineering for Multi-Region Retail Intelligence",
    excerpt: "A practical breakdown of designing scalable KPI frameworks using SQL and Snowflake to support executive profitability analysis and strategic decision-making.",
    category: "KPI Engineering",
    readTime: "9 min read",
    date: "2026-01-18"
  },
  {
    title: "Optimizing Snowflake & Tableau Integration for Executive Dashboards",
    excerpt: "Technical insights into building high-performance cloud data pipelines that power real-time Tableau dashboards for leadership reporting.",
    category: "Data Architecture",
    readTime: "11 min read",
    date: "2026-01-12"
  },
  {
    title: "Identifying Profit Kill Zones Using Advanced SQL & Margin Analytics",
    excerpt: "Case study on leveraging CTEs, window functions, and structured KPI modeling to detect margin erosion across region–SKU combinations.",
    category: "Case Study",
    readTime: "10 min read",
    date: "2026-01-05"
  }
];

export function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="py-24 bg-gradient-to-br from-[#0a0d1a] via-[#0f172a] to-[#1e293b] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

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
                Enterprise Analytics Insights
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Technical Articles & Decision Intelligence Perspectives
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Sharing hands-on experience in enterprise BI architecture, Snowflake data warehousing, SQL optimization, and executive analytics systems.
              </p>
            </motion.div>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {insights.map((insight, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {/* Icon/Image placeholder */}
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 flex items-center justify-center border-b border-white/10">
                  <FileText className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="bg-cyan-400/10 border-cyan-400/30 text-cyan-400 text-xs">
                      {insight.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {insight.readTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {insight.title}
                  </h4>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          > 
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}