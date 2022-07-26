import { React } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul class="inline-flex space-x-4 mb-3 bg-zinc-400 p-3 w-full text-white">
                <li class="rounded-md p-2 transition duration-500 ease-in-out hover:bg-slate-500"><Link to ="/">Home</Link></li>
                <li class="rounded-md p-2 transition duration-500 ease-in-out hover:bg-slate-500"><Link to ="/about">About</Link></li>
                <li class="rounded-md p-2 transition duration-500 ease-in-out hover:bg-slate-500"><Link to ="/projects">Projects</Link></li>
                <li class="rounded-md p-2 transition duration-500 ease-in-out hover:bg-slate-500"><a href ="https://github.com/Aj45c">Github</a></li>
                <li class="rounded-md p-2 transition duration-500 ease-in-out hover:bg-slate-500"><a href ="https://www.linkedin.com/in/aj45c/">Linkedin</a></li>
            </ul>
        </div>
    )
}

export default Navbar;