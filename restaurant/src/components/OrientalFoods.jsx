import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./generalMenu.css";
function OrientalFoods() {
  var items= [{img: "https://i.pinimg.com/736x/de/eb/f6/deebf6b72c714604eec12deab17c61bb.jpg",
 text:"Kebab and Tka  /4",
 price: "13000 IQD"},
 {img: "https://indroyc.files.wordpress.com/2019/05/iraqi-dolma.jpg",
 text:"Dolma  /1 person",
 price: "10000 IQD"}
 ,
 {img: "https://www.lurpak.com/siteassets/lurpak-soft/maqluba-2400x1350.jpg",
   text:"Maqluba  /1 person",
 price: "15000 IQD"}
 ,
 {img: "https://img-global.cpcdn.com/recipes/721fe69f40fa7b0b/1200x630cq70/photo.jpg",
 text:"Rice",
 price: "6000 IQD"}
 ,
 {img: "https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg",
 text:"Fish  /1 kilo",
 price: "9000 IQD"}];




     return(
         <>
         <h2 className="textStyle">Oriental Foods</h2>
         <ul className="list textStyle">
         {items.map((item) => (
           <li>
                 <Card>
                   <Card.Img variant="top"  height="200px" src={item.img} />
                   <Card.Body>
                   <Card.Text>
                     {item.text}
                   </Card.Text>
                   <hr/>
                 <Card.Text>
                   {item.price}
                 </Card.Text>
                   </Card.Body>
                 </Card>
               <br/>
                 </li>))}
         </ul>
         </>
    );
}

export default OrientalFoods;
