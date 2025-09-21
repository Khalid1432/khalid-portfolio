import { motion } from "framer-motion";
import { Code, Layout, Zap, LayoutDashboard, Database, Server, Box, Code2 } from "lucide-react";

const skills = [
  { name: "HTML5", icon: <Code /> },
  { name: "CSS3", icon: <Layout /> },
  { name: "JavaScript", icon: <Zap /> },
  { name: "Tailwind CSS", icon: <LayoutDashboard /> },
  { name: "MongoDB", icon: <Database /> },
  { name: "Express.js", icon: <Server /> },
  { name: "React.js", icon: <Box /> },
  { name: "MySQL", icon: <Database /> },
  { name: "C++", icon: <Code2 /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white pt-14 md:pt10 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-4xl md:text-5xl font-extrabold pb-16
                   bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
            className="flex flex-col items-center justify-center px-4 py-6 rounded-2xl 
                       bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                       border border-white/20 shadow-lg hover:shadow-purple-500/40 
                       text-white font-semibold text-sm md:text-base transition-all duration-300"
          >
            <div className="text-3xl md:text-4xl mb-2 text-purple-400">{skill.icon}</div>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
