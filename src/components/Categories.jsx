import React from "react";
import '../css/categories.css'
// import category1 from "../assest/category1.png";
// import category2 from "../assest/category2.png";
// import category3 from "../assest/category3.png";
// import category4 from "../assest/category4.png";
// import category5 from "../assest/category5.png";
// import category6 from "../assest/category6.png";
// import category7 from "../assest/category7.png";
// import category8 from "../assest/category8.png";

function Categories() {
  const categories = [
    {
      
      title: "Mobile Phones",
      description: "290K Items",
      view:"View",
    },
    {
      
      title: "Mobile Phone Accessories",
      description: "3M Items",
      view:"View",
    },
    {
      
      title: "Headset And Headphones",
      description: "1.2M Items",
      view:"View",
    },
    {
    
      title: "Smart Devices",
      description: "751K Items",
      view:"View",
    },
    {
      
      title: "Speakers",
      description: "1.0M Items",
      view:"View",
    },
    // {
    //   image: category6,
    //   title: "CHARGERS & CABLES",
    //   description: "88K Items",
    //   view:"View",
    // },
    // {
    //   image: category7,
    //   title: "Health",
    //   description: "761K Items",
    // },
    // {
    //   image: category8,
    //   title: "Sports",
    //   description: "2.9K Items",
    // },
  ];

  return (
    <div className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2 style={{color:"white"}}>Categories</h2>
          <hr />
        </div>
        <div className="categories col-md-12">
          {categories.map(({ image, title, description, view }, index) => {
            return (
              <div className="category" key={index}>
                {/* <img src={image} alt="Category" /> */}
                <h4>{title}</h4>
                
                {/* <button>{view}</button> */}
              </div>
            );
          })}
        </div>
        {/* <button>Show All</button> */}
      </div>
    </div>
  );
}

export default Categories;
