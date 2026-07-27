import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRobot } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        About <span className="gradient">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Final Year B.Tech Student
          </h3>

          <p className="text-gray-400 leading-8 mb-5">
            I'm M Anjil Reddy, a passionate software developer who enjoys
            building responsive websites, mobile applications.
          </p>

          <p className="text-gray-400 leading-8 mb-5">
            I continuously improve my problem-solving skills by building
            real-world projects using modern technologies.
          </p>

          <p className="text-gray-400 leading-8">
            My goal is to become a Full Stack Software Engineer while expanding
            my expertise in App development.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >

          <div className="glass rounded-2xl p-6 flex gap-5">
            <FaCode className="text-cyan-400 text-4xl" />
            <div>
              <h4 className="font-bold text-xl">Web Development</h4>
              <p className="text-gray-400">
                React, JavaScript, Node.js, Express, MongoDB
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 flex gap-5">
            <FaMobileAlt className="text-cyan-400 text-4xl" />
            <div>
              <h4 className="font-bold text-xl">Flutter Development</h4>
              <p className="text-gray-400">
                Flutter, Firebase, SQLite, Provider
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}