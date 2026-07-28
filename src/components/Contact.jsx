import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="glass rounded-2xl p-10">

        <form className="space-y-6" action="https://formspree.io/f/meeyneey" method="POST">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-slate-900"
          />

          <input
            type="email"
            name="mail"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-slate-900"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            className="w-full p-4 rounded-lg bg-slate-900"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

        <div className="flex justify-center gap-8 text-4xl mt-10">

          <a href="mailto:anjilreddy06@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/anjil06"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/m-anjil-reddy-670833348" 
          target="_blank">
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}