import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./generalMenu.css";

export default function Sweets() {


  var items = [{
    img:"https://cdn1.jernejkitchen.com/sites/default/files/tres-leches-cake-with-fruit-08-jernejkitchen_0.jpg",
    header:"cake",
    content:"4000IQD"
  },
  {  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMEvPqQYZUuJ9vjvG2cJDG5y-cVGUTrK5zAzWc1ArKTuDqHxJPrNKxAmIPx7AWS4R09g&usqp=CAU",
    header:"Trilece",
    content:"5000IQD"
  },
  {  img:"https://yummy.awicdn.com/site-images/sites/default/files/prod/recipe/6/0/390130/c06b40fffe7cd3786553bf8fd491891d070b4a10-260121153848.png?preset=v3.0_1200xDYN&save-png=1&rnd=1519151RND220215",
    header:"Paqlawa",
    content:"4 pcs / 5000IQD"
  },
  {  img:"https://cuisine.nessma.tv/uploads/2/2021-11/bdd7b18d76c7f6da6327f89a468a5759.jpg",
    header:"Mhalaby",
    content:"3000IQD"
  } ]

  return (
    <div className=" row mt-3">
    <h2 className="textStyle">Sweets</h2>
    { items.map((item) => ( <>
      <div className="col-6 mt-4">
        <img
          className="w-100"
          height="150px"
          src={item.img}
          alt="First slide"
        />
        </div>
        <div className="col-6 text-center m-auto textStyle text-light">
          <h3 className="m-auto">{item.header}</h3>
          <p className="m-auto">{item.content}</p>
      </div> </>))}
    </div>
  );
}
