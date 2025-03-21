import React, { useEffect, useState } from 'react'
import { Checkbox, Spin } from 'antd';

const FilterByTag = ({selectedTags,setSelectedTags}) => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const onChange = (checked ,tag) => {
      console.log(tag);
      console.log(checked)
      if (checked) {
        setSelectedTags([...selectedTags, tag]); // Thêm tag vào danh sách
      } else {
        setSelectedTags(selectedTags.filter((t) => t !== tag)); // Xóa tag nếu bỏ chọn
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/tags`);
        const result = await response.json();
        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
  if(loading){return <Spin/>}
  return (
    <div className='w-[170px] h-[400px] mt-4 bg-gray-100 p-4 flex flex-col '>
      <h1 className='text-[18px] font-semibold mb-2'>Filter by tags</h1>
      <div className='overflow-auto flex flex-col'>
      {data.map((tag , index) => (
        <Checkbox key={index} onChange={(e) => onChange(e.target.checked, tag)}>{tag}</Checkbox>
      ))}
      </div>
    </div>
  )
}

export default FilterByTag