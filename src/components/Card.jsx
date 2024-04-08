import React , {useContext} from 'react'
import "./Card.css"
import { CountContext } from '../App'

const Card = ({img , title , description ,price}) => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                  <div className="card  align-items-center" style= {{width: "18rem"}}>
                     <img src={img} className="card-img-top img-fluid" style = {{ width :"80%" , height : "200px"}}alt="..."/>
                  <div className="card-body">
                     <h5 className="card-title">{title}</h5>
                     <p className="card-text">{description}</p>
                    <span className='price'> Price:{price}</span>
                    <br />
                    <br />
                  <div className='buttons'>
                  <div className="btn-group" role="group" aria-label="Basic outlined example">
                     <button type="button" className="btn btn-outline-secondary">-</button>
                      <button type="button" className="btn btn-outline-secondary">Buy Now</button>
                      <button type="button" className="btn btn-outline-secondary">+</button>
                   </div>
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