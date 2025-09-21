import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="md:h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-black to-black text-white px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl w-full md:mt-20 mt-32">
        
        {/* RIGHT: Image (but shows first on small devices) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center relative order-1 md:order-2"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>

          <motion.img
            src={profile}
            alt="Khalid"
            className="relative w-56 sm:w-64 md:w-80 lg:w-96 rounded-3xl shadow-2xl border-2 border-purple-500/60"
            animate={{
              y: [0, -15, 0], // floating animation
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* LEFT: Bio (shows below image on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-6 order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Khalid Jameel
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            A passionate{" "}
            <span className="text-purple-300 font-semibold">
              MERN Stack Developer
            </span>{" "}
            crafting premium, responsive, and modern user interfaces with
            seamless user experience.
          </p>

          <p className="text-sm sm:text-md text-gray-400 max-w-lg mx-auto md:mx-0">
            🚀 Specialized in building scalable web apps with clean code &
            creative designs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 font-semibold shadow-xl shadow-purple-500/30 transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500/20 font-semibold shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
