function Project({ title, image, repoURL, deployURL }) {
    return (
        <div className="item">

            <img src={image} alt="Project" />

            <a href={deployURL} target='_blank' className="btn-light">
                <i className="fas fa-eye"></i> {title}
            </a>
            <a href={repoURL} target='_blank' className="btn-dark">
                <i className="fab fa-github"></i> Github
            </a>
        </div>
    )
}

export default Project