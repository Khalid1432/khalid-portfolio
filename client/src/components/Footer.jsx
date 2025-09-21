import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black/90 text-white py-12 px-6 md:px-20 border-t border-white/10 overflow-hidden">
      {/* Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* About / Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Khalid Jameel
          </h1>
          <p className="text-gray-300 max-w-sm">
            Passionate MERN Stack Developer crafting premium web experiences. Let’s connect and create something amazing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {["Skills", "Projects", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <div className="flex gap-4 mb-4">
            <a href="https://www.linkedin.com/in/khalid-jameel/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Khalid1432" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <Github size={24} />
            </a>
            <a href="mailto:khalidjameel145@gmail.com" className="hover:text-purple-400 transition">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">Email: khalidjameel145@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 7054948116</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Khalid Jameel. All rights reserved.
      </div>
    </footer>
  );
}
