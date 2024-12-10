import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./card.scss";
import { ROUTER } from "../../Utils/router";

const { Meta } = Card;

export const CardBook = ({ id, title, image, price,width=210,height=400,sizef=20 }) => {
  const navigate = useNavigate(); // Điều hướng khi nhấn vào CardBook
  const idbook = id
  const handleCardClick = () => {
    const targetUrl = ROUTER.USER.PRODUCTDETAIL.replace(":id", idbook); // Thay :id bằng giá trị thực
    navigate(targetUrl); // Điều hướng đến URL đã thay thế
  };  

  return (
    <Card
      hoverable
      style={{ width: width,height:height }}
      cover={<img alt="book" src={image} />}
      onClick={handleCardClick} // Gắn sự kiện click
    >
      <div className="title" style={{fontSize:sizef}}>
        <Meta title={title}/>
        <span>Giá: 
          <span className="card-price"> {price}VND</span>
        </span>
      </div>
    </Card>
  );
};
