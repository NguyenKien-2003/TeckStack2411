import { Rate, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MainRecipes = ({dataSent, setDataSent}) => {
  const { id } = useParams(); // Lấy id từ URL

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return; // Kiểm tra nếu id không tồn tại

    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("Fetching recipe with ID:", id);
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const result = await response.json();
        if (result) {
          setData(result);
          setDataSent(result);
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
   
  }, [id]);

  if (loading) return <div><Spin size="large" /></div>;
  if (!data) return <div>Không tìm thấy công thức.</div>;

  return (
    <div className="container my-10 flex space-x-30  bg-gray-100 p-10">
      <div>
        <img
          src={data.image}
          alt={data.name}
          className="w-full max-w-md shadow-lg"
        />
      </div>
      <div className="flex flex-col space-y-2 ">
        <h2 className="text-4xl font-bold">{data.name}</h2>
        
        <div className="text-l flex flex-col space-y-3 mx-4">
        <div className="flex items-center mt-2 space-x-2 text-l">
          <p className=" text-gray-700"><strong>Rating:</strong> {data.rating}</p>
          <Rate
            style={{ fontSize: 18 }}
            allowHalf
            disabled
            defaultValue={data.rating}
          />
        </div>
        <p><strong>Prep Time: </strong>{data.prepTimeMinutes} phút</p>
        <p><strong>Cook Time: </strong>{data.cookTimeMinutes} phút</p>
        <p><strong>Servings: </strong>{data.servings} person</p>
        <p><strong>Difficulty: </strong>{data.difficulty}</p>
        <p><strong>Cuisine: </strong>{data.cuisine}</p>
        <p><strong>CaloriesPerServing: </strong>{data.caloriesPerServing}</p>
        <p><strong>Review Count: </strong>{data.reviewCount}</p>
        <p className="flex space-x-0.5"><strong>Meal Type:  </strong> {data.mealType.map((type)=><p> {type}</p>)}</p>
        </div>
        
        <div className="flex space-x-4 mt-8">
          <button className="bg-red-100 hover:bg-red-400 p-2 w-44">
            Add to favorite
          </button>
          <button className="bg-yellow-700 hover:bg-yellow-600 p-2 w-44 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainRecipes;
