import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const LatestProduct = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}  >
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{color:"white"}} >{item.title}</h5>
                        <p className="lead" style={{color:"white"}}>Rs.{item.price}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-warning">Buy Now</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div>
                    <div className="container py-5" >
                        <div className="row">
                            <div className="col-12 ">
                                <h1 style={{color:"white"}}>Latest Products</h1>
                                <hr style={{color:"white"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default LatestProduct
