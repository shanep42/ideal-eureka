import React from 'react'
// TODO: Put resume in proper place once someone can help me structure this for deployment
// import resume from
// import {Link} from 'react-router-dom'

function Resume() {
    return (
        <div>
            <a target={'_blank'} href={process.env.RESUME}>
                <div className="boxes">
                    <div>Google Doc</div>
                </div>
            </a>
        </div>
    )
}

export default Resume;