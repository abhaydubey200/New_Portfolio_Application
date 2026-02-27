import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Senior Analytics Manager",
    role: "DS Group - FMCG Analytics",
    content: "Exceptional analytical mindset with a strong focus on delivering actionable insights. The executive dashboards built have become critical tools for our strategic planning process.",
    rating: 5
  },
  {
    name: "IT Director",
    role: "Enterprise Data Team",
    content: "Demonstrated outstanding expertise in Snowflake and Tableau integration. The KPI frameworks developed are now the standard for our entire analytics department.",
    rating: 5
  },
  {
    name: "Business Intelligence Lead",
    role: "Retail Analytics Division",
    content: "Impressive ability to translate complex business requirements into scalable technical solutions. The profit erosion analysis platform has directly impacted our margin optimization strategy.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-[#0f172a] relative overflow-hidden">
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
                Executive Feedback
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Leaders Say
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Trusted by enterprise teams for delivering high-impact analytics solutions
              </p>
            </motion.div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white mb-1">{testimonial.name}</p>
                  <p className="text-sm text-cyan-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
