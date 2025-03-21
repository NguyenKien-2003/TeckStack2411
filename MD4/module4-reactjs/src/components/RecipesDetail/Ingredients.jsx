import { Divider, List, Typography } from "antd";
import React from "react";

const Ingredients = ({ dataSent }) => {
  return (
    <div>
      <Divider orientation="left">Ingredient</Divider>
      <List
        bordered
        dataSource={dataSent.ingredients}
        renderItem={(ingredients, index) => (
          <List.Item>
            <Typography.Text mark>[{index + 1}]</Typography.Text> {ingredients}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Ingredients;
