import { Divider, List, Typography } from "antd";
import React from "react";

const Instructions = ({ dataSent }) => {
  return (
    <div>
      <Divider orientation="left">Instructions</Divider>
      <List
        bordered
        dataSource={dataSent.instructions}
        renderItem={(nstructions,index) => (
          <List.Item>
            <Typography.Text mark>[STEP {index + 1}]</Typography.Text> {nstructions}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Instructions;
