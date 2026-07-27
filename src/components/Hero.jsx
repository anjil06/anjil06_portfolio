import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {

return(
<section
id="home"
className="min-h-screen flex items-center justify-center px-8"
>
<div className="max-w-7xl w-full grid md:grid-cols-2 gap-10">
<div>
<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.8}}
className="text-6xl font-bold"
>
Hi,
I'm
<span className="gradient">
{" "}Anjil Reddy
</span>
</motion.h1>
<TypeAnimation
sequence={[
"Flutter Developer",
2000,
"Full Stack Developer",
2000,
"Problem Solver",
2000
]}
wrapper="h2"
repeat={Infinity}
className="text-cyan-400 text-3xl font-semibold mt-6"
/>
<p className="mt-8 text-gray-400 leading-8">
Final Year B.Tech student passionate about creating modern web applications, Flutter apps and AI-powered solutions.
</p>
<div className="flex gap-5 mt-10">
<a
href="/resume.pdf"
className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
>
Download Resume
</a>
<a
href="#contact"
className="px-6 py-3 border border-cyan-400 rounded-lg"
>
Contact Me
</a>
</div>
<div className="flex gap-6 mt-8 text-3xl">
<a href="https://github.com/anjil06">
<FaGithub/>
</a>
<a href="http://www.linkedin.com/in/m-anjil-reddy-670833348">
<FaLinkedin/>
</a>
</div>
</div>
<div className="flex justify-center">
<motion.img
initial={{scale:.5}}
animate={{scale:1}}
transition={{
repeat:Infinity,
repeatType:"reverse",
duration:2
}}
src="/profile.png"
className="w-96 rounded-full border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20"
/>
</div>
</div>
</section>
);
}