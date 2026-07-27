import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold mb-16"
      >
        My <span className="gradient">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              {category.title}
            </h3>

            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span>{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}