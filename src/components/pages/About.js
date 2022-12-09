function About() {
    return (
        <div>
            <main id="about">
                <h1 className="lg-heading">
                    About <span className="text-secondary">Me</span>
                </h1>
                <h2 className="sm-heading">
                    Let me tell you a little about myself...
                </h2>
                <div className="about-info">
                    <img src="./img/portrait.png" alt="Shane" className="bio-image" />
                    <div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>I'm a new web developer, based in the Chicagoland area.</p>
                    </div>

                    <div className="job job-1">
                        <h3>123 Webshop</h3>
                        <h6>Full Stack Developer</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A porro dolorem perferendis voluptatem
                            ipsam quibusdam culpa maiores odio asperiores in.</p>
                    </div>
                    <div className="job job-2">
                        <h3>ABC Designers</h3>
                        <h6>Front End Developer</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A porro dolorem perferendis voluptatem
                            ipsam quibusdam culpa maiores odio asperiores in.</p>
                    </div>
                    <div className="job job-3">
                        <h3>QED Dataworks</h3>
                        <h6>Back End Developer</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A porro dolorem perferendis voluptatem
                            ipsam quibusdam culpa maiores odio asperiores in.</p>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default About