import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Download, Code2, TrendingUp, DollarSign, Percent } from "lucide-react";
import { useEffect, useState } from "react";

const techBadges = [
  "SQL",
  "MS SQL Server",
  "Snowflake",
  "Tableau",
  "Python",
  "Pandas",
  "NumPy",
  "Streamlit",
  "Oracle Linux",
  "Excel",
  "GitHub"
];

const kpiMetrics = [
  { label: "Revenue Impact", value: "$2.4M", icon: DollarSign, trend: "+12.5%" },
  { label: "Gross Margin", value: "18.7%", icon: Percent, trend: "+2.3%" },
  { label: "Business Growth", value: "156%", icon: TrendingUp, trend: "+34%" }
];

export function HeroSection() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % kpiMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0d1a] via-[#0f172a] to-[#1e293b]">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* KPI Cards */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap pt-24">
            {kpiMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 ${
                  activeMetric === index ? "ring-2 ring-cyan-400/50 bg-white/10" : ""
                }`}
              >
                <metric.icon className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">{metric.label}</p>
                  <p className="font-semibold text-white">{metric.value}</p>
                </div>
                <span className="text-xs text-green-400">{metric.trend}</span>
              </motion.div>
            ))}
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent leading-tight">
              Engineering Enterprise Intelligence from Complex Data Systems
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Data Analytics & BI Engineer specializing in KPI architecture, Snowflake data warehousing,
            advanced SQL modeling, and production-grade decision intelligence platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 rounded-xl backdrop-blur-sm bg-white/5"
              onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Code2 className="mr-2 w-5 h-5" />
              Explore System Architecture
            </Button>

            {/* Resume Download Fixed */}
            <a
              href="/Resume (Data Analyst).pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-teal-400/50 text-teal-400 hover:bg-teal-400/10 px-8 py-6 rounded-xl backdrop-blur-sm bg-white/5"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-xl backdrop-blur-sm bg-white/5"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {techBadges.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm bg-white/5 backdrop-blur-sm border-white/20 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}