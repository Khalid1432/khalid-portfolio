import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetchProjects(); // axios response
        if (res.data.success) {
          setProjects(res.data.data); // assuming backend sends { success: true, data: [...] }
        } else {
          console.error("Failed to fetch projects:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white pt-14 pb-6 md:pt-10 px-6 md:px-16 overflow-hidden"
    >
      {/* Parallax Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-[120px]"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-4xl md:text-5xl font-extrabold pb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
