import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  BarChart3, 
  Database, 
  TrendingUp, 
  ExternalLink,
  Github,
  ChevronRight,
  Sparkles
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise FMCG & Retail Analytics Platform",
    tagline: "Strategic Executive Intelligence for Multi-Region Retail",
    description: "Enterprise-grade analytics ecosystem delivering real-time SKU visibility, advanced margin diagnostics, and profitability intelligence across distributed FMCG operations.",
    problem: "Disconnected systems restricted leadership visibility into SKU-level performance and regional margin behavior.",
    approach: "Designed centralized KPI framework with automated ETL pipelines and dynamic SQL modeling for standardized intelligence.",
    architecture: "Multi-source ETL → SQL transformation → Tableau semantic layer → Executive dashboards",
    impact: "15+ dashboards | Full regional coverage | Real-time margin monitoring",
    tools: ["Tableau", "SQL", "Excel", "KPI Engineering"],
    icon: BarChart3,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    title: "AI-Driven FMCG Decision Intelligence Platform",
    tagline: "16+ Module Cloud-Native Analytics Ecosystem",
    description: "Scalable decision intelligence platform integrated with Snowflake, embedding predictive forecasting, segmentation, and AI-powered strategic modules.",
    problem: "Manual analytics workflows limited scalability and real-time strategic responsiveness.",
    approach: "Built modular Python analytics suite integrated with Snowflake cloud data warehouse for automated insight delivery.",
    architecture: "Snowflake DWH → Python analytics layer → Streamlit apps → AI/ML modules",
    impact: "16+ production modules | 80% time reduction | Scalable cloud architecture",
    tools: ["Snowflake", "Python", "Streamlit", "SQL", "Pandas"],
    icon: Sparkles,
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    id: 3,
    title: "Scalable Loyalty Rewards Engine",
    tagline: "Dynamic Cycle-Based Analytics Without Hardcoding",
    description: "Robust Tableau logic engine enabling automated cycle-based loyalty analytics with built-in validation and zero manual reconfiguration.",
    problem: "Hardcoded cycle logic required repeated manual intervention and QA for every reporting period.",
    approach: "Engineered dynamic Tableau calculations supported by Python validation framework to ensure cycle accuracy.",
    architecture: "SQL cycle computation → Tableau parameters → Python validation → Automated testing",
    impact: "Zero hardcoding | 90% faster cycle transitions | Automated QA validation",
    tools: ["Tableau", "SQL", "Python", "Streamlit"],
    icon: TrendingUp,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 4,
    title: "Enterprise Data Engineering & Automation Suite",
    tagline: "Secure Production-Grade Data Infrastructure",
    description: "Enterprise ingestion and automation framework featuring RBAC controls, audit logging, and multi-format processing deployed on Oracle Linux VM.",
    problem: "Manual ingestion processes created operational bottlenecks and compliance risks.",
    approach: "Designed secure automated ingestion pipeline with structured logging and role-based access control.",
    architecture: "File uploads → Streamlit UI → Python processing → Snowflake/MS SQL → Oracle Linux VM",
    impact: "5 enterprise deployments | 95% automation | Hardened security framework",
    tools: ["Python", "Streamlit", "Snowflake", "MS SQL Server", "Oracle Linux"],
    icon: Database,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Enterprise Admin Panel with Complete ETL Pipeline",
    tagline: "Centralized Data Governance & Pipeline Management",
    description: "Full-featured admin control system enabling end-to-end ETL orchestration, user access management, audit tracking, and data pipeline monitoring.",
    problem: "Lack of centralized governance for ETL workflows and user-level access controls.",
    approach: "Built structured admin dashboard with pipeline scheduling, monitoring modules, and automated validation checkpoints.",
    architecture: "Admin UI → ETL orchestration → SQL validation → Data warehouse sync → Audit logging",
    impact: "Centralized ETL governance | Reduced manual errors | Improved data reliability",
    tools: ["Python", "SQL", "Snowflake", "Streamlit"],
    icon: Database,
    gradient: "from-emerald-500 to-green-600"
  },
  {
    id: 6,
    title: "Software Sales Intelligence Dashboards",
    tagline: "Revenue & Performance Analytics for SaaS Operations",
    description: "Comprehensive software sales analytics dashboards providing revenue tracking, customer segmentation, churn analysis, and growth forecasting.",
    problem: "Limited visibility into sales funnel performance and recurring revenue behavior.",
    approach: "Designed KPI-driven dashboards with cohort analysis and revenue trend modeling.",
    architecture: "Sales DB → SQL modeling → Tableau dashboards → Executive reporting layer",
    impact: "Improved revenue visibility | Churn insights | Data-driven sales optimization",
    tools: ["Tableau", "SQL", "Excel", "KPI Modeling"],
    icon: BarChart3,
    gradient: "from-orange-500 to-red-600"
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
              Enterprise Internship Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Production Analytics & Data Systems
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Scalable, secure, and intelligence-driven platforms built for real-world enterprise impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="group h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg mb-6`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    
                    <p className="text-cyan-400 text-sm mb-4 font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-xl p-4 mb-6">
                      <p className="text-sm text-white font-medium">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="bg-white/5 border-white/20 text-gray-300">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}