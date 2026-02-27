import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dubeyabhay430@gmail.com",
    href: "mailto:dubeyabhay430@gmail.com",
    color: "cyan"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7505991639",
    href: "tel:+917505991639",
    color: "blue"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, Uttar Pradesh, India",
    href: null,
    color: "teal"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abhay-32602024b",
    href: "https://www.linkedin.com/in/abhay-32602024b/",
    color: "indigo"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/abhaydubey200",
    href: "https://github.com/abhaydubey200",
    color: "purple"
  }
];

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500 to-blue-500",
  blue: "from-blue-500 to-indigo-500",
  teal: "from-teal-500 to-cyan-500",
  indigo: "from-indigo-500 to-purple-500",
  purple: "from-purple-500 to-pink-500"
};

export function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_ygv03r8",
        "template_caid7nq",
        formRef.current,
        "ufceOo5sI_s3EhO4v"
      );

      setSubmitted(true);
      formRef.current.reset();

      setTimeout(() => setSubmitted(false), 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0a0d1a] via-[#0f172a] to-[#1e293b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let's Build Intelligent Data Systems Together
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ready to transform your data into strategic assets? Let's discuss how we can drive value through analytics.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[item.color]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                          <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[item.color]} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <Input name="name" id="name" type="text" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input name="email" id="email" type="email" required />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input name="subject" id="subject" type="text" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea name="message" id="message" rows={6} required />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="mr-2 w-5 h-5" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}