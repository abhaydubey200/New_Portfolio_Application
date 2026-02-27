import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  BarChart3, 
  Database, 
  Code2, 
  Cloud,
  Users,
  LineChart
} from "lucide-react";

const skillCategories = [
  {
    title: "BI & Analytics",
    icon: BarChart3,
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Tableau (Advanced Dashboards)", level: 95 },
      { name: "KPI Design", level: 92 },
      { name: "Executive Reporting", level: 93 },
      { name: "Profitability & Margin Analysis", level: 90 },
      { name: "Decision Intelligence Systems", level: 88 }
    ]
  },
  {
    title: "SQL & Databases",
    icon: Database,
    gradient: "from-teal-500 to-cyan-600",
    skills: [
      { name: "MS SQL Server", level: 93 },
      { name: "Snowflake", level: 87 },
      { name: "Joins, CTEs", level: 95 },
      { name: "Window Functions & Ranking", level: 94 },
      { name: "MERGE & Query Optimization", level: 90 }
    ]
  },
  {
    title: "Programming",
    icon: Code2,
    gradient: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Python", level: 90 },
      { name: "Pandas & NumPy", level: 88 },
      { name: "Streamlit", level: 92 },
      { name: "Data Cleaning & Transformation", level: 91 }
    ]
  },
  {
    title: "Data Platforms",
    icon: Cloud,
    gradient: "from-purple-500 to-pink-600",
    skills: [
      { name: "Snowflake Data Warehouse", level: 87 },
      { name: "Oracle Linux VM", level: 85 },
      { name: "Data Ingestion Pipelines", level: 90 },
      { name: "Cloud BI Connectivity", level: 88 }
    ]
  },
  {
    title: "Professional Skills",
    icon: Users,
    gradient: "from-pink-500 to-rose-600",
    skills: [
      { name: "Business Analysis", level: 92 },
      { name: "Stakeholder Communication", level: 93 },
      { name: "Analytical Problem Solving", level: 91 },
      { name: "Enterprise Reporting Strategy", level: 89 }
    ]
  }
];

function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
        <span className="text-xs text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay, duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#0a0d1a] via-[#0f172a] to-[#1e293b] relative overflow-hidden">
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
                Technical Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Skills & Competencies
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Dashboard-style view of technical proficiencies and domain expertise
              </p>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h4>
                </div>

                {/* Skills List */}
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={0.5 + index * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <p className="text-sm text-gray-400">Technologies Mastered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <p className="text-sm text-gray-400">Production Deployments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-sm text-gray-400">Enterprise Ready</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}