import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Salesforce Trailhead",
    description: "35+ Badges • 2 Superbadges • 22,000+ Trailhead Points"
  },
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React Projects"
  },
  {
    title: "Flutter Development",
    description: "Mobile App Development using Flutter & Firebase"
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    description: "Completed training in communication, workplace skills, interview skills, business etiquette, problem-solving, IT fundamentals, and AI."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <FaAward className="text-5xl text-cyan-400 mx-auto mb-5" />

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {item.description}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}