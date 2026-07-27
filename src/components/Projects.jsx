import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold mb-16"
      >
        My <span className="gradient">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass rounded-2xl overflow-hidden"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}