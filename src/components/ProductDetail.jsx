import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import ProductService from '../service/ProductService';

const ProductDetail = () => {

    const { id } = useParams();


    const [cartBtn, setCartBtn] = useState("Add to Cart")
    {/* Now we need a product id which is pass from the product page. */}
    const [products, setProducts] = useState([]);
    // const proid = useParams();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
    
          try {
            const response = await ProductService.getProductByID(id);
            setProducts(response.data);
            console.log(response.data)
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);
    
    // const proDetail = products.filter(x=>x.id == proid.id)
    // const product = proDetail[0];
    // console.log(product);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={`/assets/images/products/${products.productImageSrc}`} alt={products.productName}height="400px"  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold" style={{color:"white"}}>{products.productName}</h1>
                    <hr />
                    <h2 className="my-4" style={{color:"white"}}>Rs.{products.productRetailPrice}</h2>
                    <p className="lead" style={{color:"white"}}>{products.productDescription}</p>
                    <button onClick={()=>handleCart(products)} className="btn btn-outline-warning my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
