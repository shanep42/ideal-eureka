import portrait from '../../assets/img/portrait.png'

function About() {
    return (
        <div>
            <main id="about">
                <h1 className="lg-heading">
                    About <span className="text-secondary">Me</span>
                </h1>

                <div className="about-info">
                    <img src={portrait} alt="Shane" className="bio-image" />
                    <div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>I'm a new web developer, based in the Chicagoland area.</p>
                    </div>

                    <div className="job job-1">
                        <h3>Gaming Grandpas</h3>
                        <h6>API Wrangler</h6>
                        <p>Worked with student coder group Gaming Grandpas to come up with a tool to search for sales on digital video games from a variety of online retailers</p>
                    </div>
                    <div className="job job-2">
                        <h3>The Best Men</h3>
                        <h6>Back-End Developer </h6>
                        <p>Fought tooth and nail with some not-so-super Models to let the Best Men without a wedding develop a tool for finding and saving your favorite cocktails</p>
                    </div>
                    <div className="job job-3">
                        <h3>TBA</h3>
                        <h6>Junior Developer</h6>
                        <p>Soon to embark on the next big step of my full-stack webdev journey</p>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default About