import Project from "../Project"
import project1pic from '../../assets/img/project1.png'
import project2pic from '../../assets/img/project2.png';
import project3pic from '../../assets/img/project3.png';
import project4pic from '../../assets/img/project4.png';
import project5pic from '../../assets/img/project5.png';
import project6pic from '../../assets/img/project6.png';

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
                    image={project1pic}
                    repoURL='https://github.com/Project1TeamThree/p1t3-GamingGrandpas'
                    deployURL='https://project1teamthree.github.io/p1t3-GamingGrandpas/'
                ></Project>
                <Project
                    title='Best Men Virtual Bartender'
                    image={project2pic}
                    repoURL='https://github.com/Project2-TheBestMen/project2'
                    deployURL='https://virtual-bartender-app.herokuapp.com/'
                />
                <Project
                    title='MySQL Employee Tracker'
                    image={project3pic}
                    repoURL='https://github.com/shanep42/psychic-octo-telegram'
                    deployURL='https://github.com/shanep42/psychic-octo-telegram'
                />
                <Project
                    title='Team Profile Generator'
                    image={project4pic}
                    repoURL='https://github.com/shanep42/octo-engine'
                    deployURL='https://github.com/shanep42/octo-engine'
                />
                <Project
                    title='Express Note Taker'
                    image={project5pic}
                    repoURL='https://github.com/shanep42/stunning-octo-lamp'
                    deployURL='https://github.com/shanep42/stunning-octo-lamp'
                />
                <Project
                    title='Weather Dashboard'
                    image={project6pic}
                    repoURL='https://github.com/shanep42/jupiter-marvel-weather-dash'
                    deployURL='https://shanep42.github.io/jupiter-marvel-weather-dash/'
                />
            </div>

        </main>
    )
}

export default Portfolio