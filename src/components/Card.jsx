import React, { useContext } from 'react';
import "./Card.css";
import { CounterContext } from '../components/Context.jsx';

const Card = () => {
  const { increment, decrement, cardDatas } = useContext(CounterContext);

  return (
    <div className="container align-items-center">
      <div className="row">
        {cardDatas.map(data => (
          <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center margin " key={data.id}>
            <div className="card align-items-center" style={{ width: "18rem" }}>
              <img src={data.img} className="card-img-top img-fluid" style={{ width: "80%", height: "200px" }} alt=".." />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <span className='price'> Price: $ {data.price}</span>
                <br />
                <br />
                <div className='buttons'>
                  <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-dark" onClick={() => decrement (data.price)}>-</button>
                    <button className="btn btn-outline-dark">Buy Now</button>
                    <button type="button" className="btn btn-outline-dark" onClick={() => increment (data.price)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
