import React from 'react';
import "./Image.css";
@import "./styles/index.scss";
const Image = () => {
    return(
        <div className="Container transition duration-700 ease-in-out">
           <div className="card" style={{width:"18rem"}}>
            <img src="https://m.media-amazon.com/images/I/31N1BZUZLwL._AC_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary" href='1'>Go somewhere</a>
            </div>
           </div>
           <div className="card" style={{width:"18rem"}}>
            <img src="https://cdnfa.com/montakhabnovin/e725/files/3442505.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary" href='1'>Go somewhere</a>
            </div>
           </div>
        </div> 
    )
}





export default Image;