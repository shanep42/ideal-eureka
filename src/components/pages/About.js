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
                        <p>As a recent graduate of a full stack developer bootcamp, I am excited to apply my skills and concepts to a career in web development. With previous experience as an Outreach Services Assistant at the Orland Park Public Library and as a Law Library Assistant at Loyola School of Law, I have honed my attention to detail and problem-solving skills, as well as my ability to work collaboratively and manage complex projects.</p>
                        <p>During my time in the library, I was responsible for managing, cataloging, and maintaining collections of historical artifacts and materials, as well as organizing and managing circulation of library materials. I also coordinated various programs and events, programming musical performances, lectures, and presentations for patrons, and curating monthly displays of local art. These responsibilities required a high level of organizational skills, attention to detail, and the ability to work independently and as part of a team.</p>
                        <p>In my recent full stack developer bootcamp, I have gained proficiency in various programming languages and frameworks, including HTML/CSS, JavaScript, React, Node.js, and MySQL. I have also developed skills in responsive web design, Git and GitHub, and Agile development methodologies. Through projects and assignments, I have demonstrated my ability to create and deploy web applications from start to finish, working both independently and as part of a team.</p>
                        <p>Overall, I am excited to bring my diverse skill set and experience to a position, where I can continue to grow and develop my technical skills and contribute to the success of a dynamic team.</p>
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