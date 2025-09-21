import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../assets/profile.jpg"; // your profile image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 z-50 px-6 md:px-12 py-4 flex justify-between items-center"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo / Name */}
        <motion.h1
          // whileHover={{ scale: 1.05 }}
          className="text-2xl select-none md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          Khalid Jameel
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          {["Skills", "Projects", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition duration-300 group"
              whileHover={{ scale: 1.1 }}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA (desktop only) */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-pink-400 transition-all duration-300"
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </motion.nav>

      {/* Overlay (dark background) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsOpen(false)} // close when clicking outside
        />
      )}

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-black/95 backdrop-blur-xl border-l border-purple-500/30 flex flex-col z-50"
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-gray-300 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Drawer Content */}
        <div className="flex flex-col items-center justify-center flex-1 px-6 py-12 gap-8 overflow-y-auto">
          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Khalid"
            className="w-24 h-24 rounded-full border-2 border-purple-500 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Links */}
          <div className="flex flex-col gap-6 text-center">
            {["Skills", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)} // close on link click
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-pink-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
