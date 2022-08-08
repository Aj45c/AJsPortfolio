import React from 'react';

const Projects = () => {
    return (
        <div>
            <div class="mx-28 text-center">
                <h1 class="text-7xl"> My Projects</h1>
                <span class="inline-flex my-36 mr-9 scale-75 space-x-10">
                    <div>
                        <a href="https://invrick.netlify.app/">
                            <img class="rounded-full p-5 mx-auto hover:bg-zinc-300" src="https://i.imgur.com/toMoOLr.png" width="150px" />
                        </a>
                        <a href="https://github.com/Aj45c/Investigator-Rick">
                            <div class="rounded-md hover:bg-blue-400">Github Project Link</div>
                        </a>
                    </div>

                    <div>
                        <a href="https://my-manga-rankings.herokuapp.com/manga">
                            <img class="rounded-full -p-2 aspect-square mx-auto hover:bg-zinc-300" src="https://i.imgur.com/4FtpEQq.png" width="165px" />
                        </a>
                        <a href="https://github.com/Aj45c/My-Manga-Rankings">
                            <div class="rounded-md hover:bg-blue-400">Github Project Link</div>
                        </a>

                    </div>
                    <div>
                        <a href="https://thesecretfighter.herokuapp.com/">
                            <img class="rounded-full object-scale-down w-96 hover:bg-zinc-300" src="https://i.imgur.com/wYmzNvg.png" width="400px" />
                        </a>
                        <a href="https://github.com/Aj45c/TheSecretFighter">
                            <div class="rounded-md hover:bg-blue-400">Github Project Link</div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/CharBar3/bingelist-frontend">
                            <div class="p-9 rounded-full hover:bg-zinc-300"> BIngeList (Group Project!) </div>
                        </a>
                        <a href="https://github.com/CharBar3/bingelist-backend">
                            <div class="rounded-md my-14 hover:bg-blue-400">Github Project Link</div>
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Projects;