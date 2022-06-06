// import React from "react";
// import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
// function Footer() {
//   const data = [
//     {
//       type: "Categories",
//       subTypes: [
//         "Mobile Phones",
//         "Accessories",
//         "Headset and Headphones",
//         "Smart Devices",
//         "Speakers",
//       ],
//     },
//     {
//       type: "Branch",
//       subTypes: [
//         "Colombo",
//         "Galle",
//         "Kandy",
//         "Nugegoda",
//         "Gampaha",
//         "Kurunagala",
//         "Jaffna",
//       ],
//     },
//     {
//       type: "Shopping With Us",
//       subTypes: [
//         "Home",
//         "About Us",
//         "Contact Us",

//       ],
//     },
//     {
//       type: "Services",
//       subTypes: ["My Account", "After Sales Service", "Privacy Policy", "Careers"],
//     },

//   ];
//   const socialLinks = [
//     <BsFacebook />,
//     <BsInstagram />,
//     <BsTwitter />,
//     <BsLinkedin />,
//   ];
//   return (
//     <footer className="py-3 mx-3">
//       <div className="brand-container">
//         <div className="brand">
//           <span>TECHMART</span>
//           <span className="dot">.</span>
//         </div>
//         <p className="description">
//           PHONE, WHEN YOU JUST FEEL IT
//         </p>

//         <ul className="social-links">
//           {socialLinks.map((link, index) => (
//             <li key={index}>{link}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="links">
//         {data.map(({ type, subTypes }, index) => {
//           return (
//             <div className="link" key={index}>
//               <h3 className="title">{type}</h3>
//               <ul>
//                 {subTypes.map((type, index) => (
//                   <li key={index}>
//                     <a href="#">{type}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import logo from "../assest/images/logo2.png";
import styles from "../styles/Footer.module.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


const Footer = () => {

    const socialLinks = [
        <BsFacebook />,
        <BsInstagram />,
        <BsTwitter />,
        <BsLinkedin />,
      ];

  return (
    <div className={styles.container}>
      
      {/* <div className={styles.item}>
        <Image src={Image} objectFit="cover" layout="fill" alt="" />
      </div> */}
      <div className={styles.item}>
        <div className={styles.card}>
        <img src={logo} alt="logo" style={{ height: "190px",justifyContent:"center" }}></img>
          <h2 className={styles.motto}>
          PHONE, WHEN YOU JUST FEEL IT
          </h2>
          <ul className="social-links" style={{color: "white",display:"flex",gap:"2rem" }}>
          {socialLinks.map((link, index) => (
            <li key={index} style={{padding:"0.8rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"2rem",cursor:"pointer"}}>{link}</li>
          ))}
        </ul>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR BRANCHES</h1>
          <p className={styles.text}>
           Colombo
            {/* <br /> NewYork, 85022
            <br /> (602) 867-1010 */}
          </p>
          <p className={styles.text}>
           Galle
            {/* <br /> NewYork, 85022 */}
            {/* <br /> (602) 867-1011 */}
          </p>
          <p className={styles.text}>
            Kandy
            {/* <br /> NewYork, 85022 */}
            {/* <br /> (602) 867-1012 */}
          </p>
          <p className={styles.text}>
            Kurunagala
            {/* <br /> NewYork, 85022 */}
            {/* <br /> (602) 867-1013 */}
          </p>
          <p className={styles.text}>
            Jaffna
            {/* <br /> NewYork, 85022 */}
            {/* <br /> (602) 867-1013 */}
          </p>
          <p className={styles.text}>
            Nugegoda
            {/* <br /> NewYork, 85022 */}
            {/* <br /> (602) 867-1013 */}
          </p>
          <p className={styles.text}>
            Gampaha
            {/* <br /> NewYork, 85022 */}
            {/* <br /> (602) 867-1013 */}
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
          <h1 className={styles.title}>CONTACT US</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
