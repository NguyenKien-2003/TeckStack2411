import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import { Col, Row, Skeleton, Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const FullMenu = ({ selectedTags }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Trang hiện tại
  const [limit] = useState(8); // Số lượng item mỗi trang
  const [total, setTotal] = useState(0); // Tổng số công thức
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const handleSelectItem = (id) => {
    console.log(id);
    navigate(`/recipes/${id}`); // Chuyển hướng đến trang chi tiết sản phẩm
  };

  useEffect(() => {
    fetchData(page, selectedTags);
  }, [page, selectedTags]);

  const fetchData = async (page, selectedTags) => {
    setLoading(true);
    console.log(selectedTags);
    try {
      let response;
      let result;
      if (selectedTags.length > 0) {
        response = await Promise.all(
          selectedTags.map((tag) =>
            fetch(`https://dummyjson.com/recipes/tag/${tag}`)
          )
        );
       
      // Chuyển đổi tất cả response thành JSON
      const results = await Promise.all(response.map(res => res.json()));

      // Kiểm tra kết quả và lọc dữ liệu đúng định dạng
      const mergedRecipes = results
        .map(result => result.recipes || []) // Đảm bảo luôn có mảng
        .flat();
        setData(mergedRecipes);
        setTotal(0);
      } else {
        response = await fetch(
          `https://dummyjson.com/recipes?limit=${limit}&skip=${
            (page - 1) * limit
          }&select=name,image,rating,tags`
        );
        console.log("co res no tag")
        const result = await response.json();
        setData(result.recipes);
        setTotal(result.total);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-4 p-4 gap-4">
      {loading && data.length === 0 ? (
        <>
          <Skeleton active />
          <Skeleton active />
        </>
      ) : (
        <>
          <Row gutter={[20, 20]} className="flex justify-start">
            {data.map((item) => (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                <CardItem
                  name={item.name}
                  image={item.image}
                  rating={item.rating}
                  tags={item.tags}
                  onClick={() => handleSelectItem(item.id)}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4 flex justify-center">
            <Pagination
              current={page}
              total={total}
              pageSize={limit}
              onChange={(newPage) => setPage(newPage)}
              showSizeChanger={false} // Không cho phép thay đổi số item/trang
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FullMenu;
