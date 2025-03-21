import { Popover, Progress, Rate, Skeleton } from "antd";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/search?q=${search}`
        );
        const result = await response.json();
        if (result) {
          setData(result.recipes);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchData();
    }
  }, [search]);
  const handleSelectItem = (id) => {
    console.log(id);
    navigate(`/recipes/${id}`); // Điều hướng đến trang xem sản phẩm
    setSearch("");
  };
  const content = (
    <div className="h-[400px] overflow-auto w-[200px]">
      {loading ? (
        <Skeleton active />
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded flex items-center"
            onClick={() => handleSelectItem(item.id)}
          >
            <img
              src={item.image}
              alt="Recipes Image"
              className="w-[30px] h-[30px] mr-1"
            ></img>
            <div>
              <p className="text-[12px]">{item.name}</p>
              <Rate style={{ fontSize: 12 }} allowHalf disabled defaultValue={item.rating}/>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <>
      <div className="relative flex border-b py-2">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="text-xs focus:outline-none"
          placeholder="Tìm kiếm món ăn"
        />
    
        <Popover placement={"bottom"} arrow={false} open={data.length > 0 && search != ""} content={content} className="absolute top-10 left-28" />
        <Search className="h-4 w-4 text-black-500 mt-1.5" />
      </div>
    </>
  );
};

export default SearchBox;
