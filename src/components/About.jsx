import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className=" fw-bold mb-4" style={{color:"#d68102"}}>About Us</h1>
                        <p className="lead mb-4" style={{color:"white"}}>
                        Our Vision is to serve our customers with utmost care providing them with Latest Trending Products.

We Continuously Stay Updated With All The Latest And Innovative Products And Make Sure To Introduce Them First To Sri Lanka, At Very Attractive Prices.

We aim to focus on Island-wide Delivery, Pioneering in Cellular Accessories.

We Guarantee Safe And Quick Delivery To All Parts Of The City Within A Maximum Period Of 1-2 Working Days.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-warning px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about1.png" alt="About Us" height="322px" width="93%" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
