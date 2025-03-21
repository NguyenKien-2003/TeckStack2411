import React, { useState } from 'react'
import FullMenu from '../components/MenuPage/FullMenu'
import FilterByTag from '../components/MenuPage/FilterByTag'

const MenuPage = () => {
  const [selectedTags,setSelectedTags] = useState([]);
  return (
    <div className="container mx-auto p-4 min-h-screen ">
      
      <div className="md:flex space-x-2 mx-28">
        <FilterByTag selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <div className="flex-1 ml-2">
          <FullMenu selectedTags={selectedTags}/>
        </div>
      </div>
    </div>
  )
}

export default MenuPage