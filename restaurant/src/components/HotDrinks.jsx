import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./generalMenu.css";

export default function HotDrinks() {

  var items = [{
    img:"https://salt.tikicdn.com/ts/product/14/82/cb/9216d8825e19a0640a133cad57d03104.jpg",
    header:"Cold Drinks",
    content:"Pepsi Fanta Cola Sprite / 1000IQD"
  },
  {  img:"https://theistanbulinsider.com/wp-content/uploads/2011/10/turkish-tea-glass-2.jpg",
    header:"Tea",
    content:"Iraqi Tea / 1000IQD"
  },
  {  img:"https://images.slurrp.com/prod/rich_article/htsqomiq5mk.webp?impolicy=slurrp-20210601&width=880&height=500",
    header:"Latte",
    content:" Latte (Coffee and Milk) / 5000IQD"
  },
  {  img:"https://www.aboutmanchester.co.uk/wp-content/uploads/2019/06/70E301CD-E2F0-447A-8628-75B747F0A996.png",
    header:"Coffee",
    content:" Turkish Coffee / 5000IQD"
  } ]

  return (
    <>
    <h2 className="textStyle">Drinks</h2>
    <Carousel className="mt-3 ">
    { items.map((item) => (
      <Carousel.Item>
        <img
          className="w-100 border border-white border-2"
          height="300px"
          src={item.img}
          alt="Drink"
        />
        <Carousel.Caption>
          <h4 className="textStyle bg-dark">{item.header}</h4>
          <p className="textStyle bg-dark">{item.content}</p>
        </Carousel.Caption>
      </Carousel.Item>))}
    </Carousel>
    </>
  );
}
