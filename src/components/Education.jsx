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

        {/* B.Tech */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14 ml-8"
        >
          <FaGraduationCap className="absolute -left-5 text-4xl text-cyan-400 bg-slate-950" />

          <div className="glass rounded-xl p-8">
            <span className="text-cyan-400 font-semibold">
              2023 – 2027
            </span>

            <h3 className="text-2xl font-bold mt-2">
              Gurunanak Institute of Technology
            </h3>

            <h4 className="text-xl text-gray-300">
              Bachelor of Technology (Computer Science & Engineering)
            </h4>

            <p className="text-gray-400 mt-2">
              Hyderabad, Telangana
            </p>
          </div>
        </motion.div>

        {/* Intermediate */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-14 ml-8"
        >
          <FaGraduationCap className="absolute -left-5 text-4xl text-cyan-400 bg-slate-950" />

          <div className="glass rounded-xl p-8">
            <span className="text-cyan-400 font-semibold">
              2021 – 2023
            </span>

            <h3 className="text-2xl font-bold mt-2">
              Sri Chaitanya Junior College
            </h3>

            <h4 className="text-xl text-gray-300">
              Intermediate (MPC)
            </h4>

            <p className="text-gray-400 mt-2">
              Hyderabad, Telangana
            </p>
          </div>
        </motion.div>

        {/* School */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="ml-8"
        >
          <FaGraduationCap className="absolute -left-5 text-4xl text-cyan-400 bg-slate-950" />

          <div className="glass rounded-xl p-8">
            <span className="text-cyan-400 font-semibold">
              2020 – 2021
            </span>

            <h3 className="text-2xl font-bold mt-2">
              Telangana State Model School
            </h3>

            <h4 className="text-xl text-gray-300">
              Secondary School Certificate (SSC)
            </h4>

            <p className="text-gray-400 mt-2">
              Tandur, Vikarabad
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}