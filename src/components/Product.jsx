import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'
import ProductService from '../service/ProductService';

const Product = () => {

    const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
    
          try {
            const response = await ProductService.getAllProducts();
            setProducts(response.data);
            console.log(response.data)
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item._id} style={{width: "18rem"}}  >
                <img src={`/assets/images/products/${item.productImageSrc}`} class="card-img-top" alt={item.productName}/>
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{color:"white"}} >{item.productName}</h5>
                        <p className="lead" style={{color:"white"}}>Rs.{item.productRetailPrice}</p>
                        <NavLink to={`/products/${item._id}`} class="btn btn-outline-warning">Buy Now</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div>
                    <div className="container py-5" >
                        <div className="row">
                            <div className="col-12 ">
                                <h1 style={{color:"white"}}>Mobile Phones</h1>
                                <hr style={{color:"white"}} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {products.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product
