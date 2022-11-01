import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./generalMenu.css";
function WesternFoods() {
 var items= [{img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=",
text:"Burger",
price: "8000 IQD"},
{img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQF5fZ2Eszz7qOzW8ABXd7XBRoQKgF4AWqw&usqp=CAU",
text:"Crispy Chicken",
price: "8000 IQD"}
,
{img: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg",
  text:"Pizza",
price: "15000 IQD"}
,
{img: "https://t2.uc.ltmcdn.com/en/posts/2/2/4/how_to_make_cheese_sticks_from_scratch_1422_600.jpg",
text:"Cheese Sticks",
price: "6000 IQD"}
,
{img: "https://www.photoshopin1minute.com/wp-content/uploads/2022/03/lazania.jpg",
text:"Lazania",
price: "18000 IQD"}];




    return(
        <>
        <h2 className="textStyle">Western Foods</h2>
        <ul className="list textStyle">
        {items.map((item) => (
          <li>
                <Card>
                  <Card.Img variant="top" height="200px" src={item.img} />
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

export default WesternFoods;
