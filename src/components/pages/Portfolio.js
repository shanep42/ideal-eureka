import Project from "../Project"

function Portfolio() {
    return (
        <main id="work">
            <h1 className="lg-heading">
                My <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">
                Check out some of my projects!
            </h2>
            <div className="projects">
                <Project
                    title="Gaming Grandpa Sale Seeker"
                    image='public\img\Project 1_fitted.png'
                    repoURL='https://github.com/Project1TeamThree/p1t3-GamingGrandpas'
                    deployURL='https://project1teamthree.github.io/p1t3-GamingGrandpas/'
                ></Project>
                <Project 
                    title='Best Men Virtual Bartender'
                    image ='public\img\project2.png'
                    repoURL='https://github.com/Project2-TheBestMen/project2'
                    deployURL='https://project2thebestmen.herokuapp.com/'
                />
                <Project 
                    title='<MySQL Employee Tracker'
                    image='public\img\project3.png'
                    repoURL='https://github.com/shanep42/psychic-octo-telegram'
                    deployURL='https://github.com/shanep42/psychic-octo-telegram'
                />
                <Project 
                    title='Team Profile Generator'
                    image='public\img\project4.png'
                    repoURL='https://github.com/shanep42/octo-engine'
                    deployURL='https://github.com/shanep42/octo-engine'
                />
                <Project 
                    title='Express Note Taker'
                    image='public\img\project5.png'
                    repoURL='https://github.com/shanep42/stunning-octo-lamp'
                    deployURL='https://github.com/shanep42/stunning-octo-lamp'
                />
                <Project 
                    title='Weather Dashboard'
                    image='public\img\project6.png'
                    repoURL='https://github.com/shanep42/jupiter-marvel-weather-dash'
                    deployURL='https://github.com/shanep42/jupiter-marvel-weather-dash'
                />
            </div>

        </main>
    )
}

export default Portfolio