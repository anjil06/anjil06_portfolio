import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold mb-20"
      >
        Education
      </motion.h2>

      <div className="relative border-l-4 border-cyan-400 ml-8">

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14 ml-8"
        >
          <FaGraduationCap className="absolute -left-5 text-4xl text-cyan-400 bg-slate-950" />

          <div className="glass rounded-xl p-8">
            <span className="text-cyan-400">
              2023 – 2027
            </span>

            <h3 className="text-2xl font-bold mt-2">
              Bachelor of Technology
            </h3>

            <h4 className="text-xl text-gray-300">
              Computer Science & Engineering
            </h4>

            <p className="text-gray-400 mt-3">
              Building strong foundations in software engineering, web
              development, mobile applications, databases, and AI.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}