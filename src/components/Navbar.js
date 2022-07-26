import { React } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul class="inline-flex space-x-4 mb-3 bg-zinc-400 p-3 w-full text-white">
                <li class="rounded-lg p-2 transition duration-500 ease-in-out hover:bg-sky-400"><Link to ="/">About</Link></li>
                <li class="rounded-lg p-2 transition duration-500 ease-in-out hover:bg-sky-400"><Link to ="/projects">Projects</Link></li>
                <li class="rounded-lg p-2 transition duration-500 ease-in-out hover:bg-sky-400"><a href ="https://github.com/Aj45c" target="_blank">Github</a></li>
                <li class="rounded-lg p-2 transition duration-500 ease-in-out hover:bg-sky-400"><a href ="https://www.linkedin.com/in/aj45c/" target="_blank">Linkedin</a></li>
            </ul>
        </div>
    )
}

export default Navbar;