import { Linkedin, Github, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhay-32602024b/"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abhaydubey200"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dubeyabhay430@gmail.com"
  }
];

export function Footer() {
  return (
    <footer className="bg-[#0a0d1a] border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <div>
                <p className="font-bold text-white leading-none">Data Analytics</p>
                <p className="text-xs text-cyan-400">BI Engineer</p>
              </div>
            </div>
           
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 flex items-center gap-1 justify-center md:justify-end">
              Made By Abhay <Heart className="w-4 h-4 text-red-400 fill-red-400" /> © 2026
            </p>
            <p className="text-xs text-gray-500 mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}