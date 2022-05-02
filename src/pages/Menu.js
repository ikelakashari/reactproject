import React from "react";
import Fotto5 from "../assets/image2.jpg";
import Fotto6 from "../assets/image7.jpg";
import Fotto7 from "../assets/IMAGE10.jpg";
import Fotto8 from "../assets/IMAGE11.jpg";
import "../styles/Menu.css"


class Menu extends React.Component  {

  render () {
     this.state = [
      {
        name: "Age 3-4, Part-time",
        image: Fotto5,
        price: "255",
      },
      {
        name: "Age 3-4, Full-time",
        image: Fotto6,
        price: "275",
      },
      {
        name: "Age 4-5, Part-time",
        image: Fotto7,
        price: "345",
      },
      {
        name: "Age 4-5, Full-time",
        image: Fotto8,
        price: "325",
      },
     ];
     return (
       <div className="menu">
          {this.state.map ((userInfo) => {
            return (
              <div className="menuitem">
                <div clasName="menufoto" style={{ backgroundImage: `url(${userInfo.image})` }} > </div>
                <h3> {userInfo.name} </h3>
                <p> ${userInfo.price} </p>
               </div> 
            );  
          })}
        </div>  
      );
    }  
  }            

export default Menu;