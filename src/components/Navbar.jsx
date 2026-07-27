import { Link } from "react-scroll";

export default function Navbar() {

    const links = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact"
    ];

    return(

<nav className="fixed top-0 left-0 w-full z-50 glass">

<div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

<h1 className="text-2xl font-bold gradient">

Anjil

</h1>

<div className="flex gap-8">

{

links.map((item)=>(

<Link

key={item}

to={item}

smooth

duration={600}

className="capitalize cursor-pointer hover:text-cyan-400 transition"

>

{item}

</Link>

))

}

</div>

</div>

</nav>

);

}