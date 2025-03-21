import React from "react";
import { Card, Tag } from "antd";

const { Meta } = Card;

const CardItem = ({ name, image, rating, tags = [], onClick }) => (
  <Card
    style={{
      width: 240,
      cursor: "pointer",
    }}
    cover={
      <img
        alt={name}
        src={image}
        style={{ height: 200, objectFit: "cover" }}
      />
    }
    onClick={onClick}
  >
    <Meta title={name} description={`Rating: ${rating}`} />
    <div className="mt-2">
      {tags.length > 0 ? (
        tags.map((tag, index) => <Tag key={index} color="blue">{tag}</Tag>)
      ) : (
        <Tag color="gray">No tag</Tag>
      )}
    </div> 
  </Card>
);

export default CardItem;
