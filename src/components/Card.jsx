import React from 'react'
import "./Card.css"


const Card = ({img , title , description ,price}) => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                  <div className="card  align-items-center" style= {{width: "18rem"}}>
                     <img src={img} className="card-img-top img-fluid" style = {{ width :"80%" , height : "220px"}}alt="..."/>
                  <div className="card-body">
                     <h5 className="card-title">{title}</h5>
                     <p className="card-text">{description}</p>
                  <div>
                     <button type="button" className="btn btn-outline-secondary justify-content-start">-</button> 
                     <span>
                     <button type="button" className="btn btn-outline-secondary justify-content-end plusButton">+</button>
                     </span>
                     </div>
 
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card