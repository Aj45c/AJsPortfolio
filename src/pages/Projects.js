import React from 'react';

const Projects = () => {
    return (
        <div>
            <div class="mx-28 text-center">
                <h1 class="text-7xl"> My Projects</h1>
                <span class="inline-flex my-36 mr-9 scale-75 shadow-lg shadow-sky-400 p-20 rounded-full">
                    <a href="https://invrick.netlify.app/">
                        <img class="rounded-full p-5 mx-auto hover:bg-zinc-300" src="https://i.imgur.com/toMoOLr.png" width="150px" />
                    </a>

                    <a href="https://my-manga-rankings.herokuapp.com/manga">
                        <img class="rounded-full p-2 aspect-square mx-auto hover:bg-zinc-300" src="https://i.imgur.com/4FtpEQq.png" width="200px" />
                    </a>

                    <a href="https://thesecretfighter.herokuapp.com/">
                        <img class="rounded-full mx-auto hover:bg-zinc-300" src="https://i.imgur.com/wYmzNvg.png" width="400px" />
                    </a>

                    <a href="https://github.com/CharBar3/bingelist-frontend">
                        <div class="p-9 rounded-full hover:bg-zinc-300"> BIngeList (Group Project!) </div>
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Projects;