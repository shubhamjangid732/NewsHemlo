import React from 'react'

function Newsicom(props) {
    let { title, description, imgUrl, newsUrl, author, date, source } = props
    return (
        <div>
            <div className="card" >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zIndex: '1' }}>{source}</span>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body my-2">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Newsicom