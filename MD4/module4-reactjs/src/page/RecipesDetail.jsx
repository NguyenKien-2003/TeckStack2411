import React, { useState } from "react";
import MainRecipes from "../components/RecipesDetail/MainRecipes";
import Instructions from "../components/RecipesDetail/Instructions";
import Ingredients from "../components/RecipesDetail/Ingredients";

const RecipesDetail = () => {
  const [dataSent, setDataSent] = useState(null);
  return (
    <div className="mx-30 mb-10 flex flex-col space-y-5">
      <MainRecipes dataSent={dataSent} setDataSent={setDataSent} />
      <div className="flex justify-between">
        <div className="w-1/3">
      {dataSent && <Ingredients dataSent={dataSent} />}
      </div>
      {dataSent && <Instructions dataSent={dataSent} />}
      </div>
    </div>
  );
};

export default RecipesDetail;
