import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; // replace with project.image

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                 border border-white/20 rounded-2xl shadow-lg hover:shadow-purple-500/40 
                 transition-all duration-500 overflow-hidden max-w-md mx-auto"
    >
      {/* Bigger Image with animated overlay */}
      <div className="relative overflow-hidden h-72">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 
                        flex items-end justify-center pb-6 translate-y-6 group-hover:translate-y-0">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 
                         text-sm font-semibold hover:scale-110 transition transform shadow-lg"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 
                         text-sm font-semibold hover:scale-110 transition transform shadow-lg"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 
                       bg-clip-text text-transparent group-hover:scale-105 transition-transform">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mt-3 leading-relaxed group-hover:text-gray-200 transition-colors">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech?.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 
                         to-pink-500/20 border border-purple-500/30 text-purple-200 
                         rounded-full shadow-sm backdrop-blur-md group-hover:shadow-purple-500/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Glow border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
                      border border-transparent group-hover:border-purple-500/40 
                      group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all" />
    </motion.div>
  );
}
