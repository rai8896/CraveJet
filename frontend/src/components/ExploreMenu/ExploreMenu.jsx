import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring delightful salads, freshly made rolls, indulgent desserts, and satisfying sandwiches. Our carefully crafted selection also includes delicious cakes, pure vegetarian options, flavorful pasta dishes, and savory noodles. Indulge in a culinary journey with flavors inspired by global cuisines, all prepared with the finest ingredients.</p>
        <div className="explore-menu-list">
          {menu_list.map((item, index)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
          )
          })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu