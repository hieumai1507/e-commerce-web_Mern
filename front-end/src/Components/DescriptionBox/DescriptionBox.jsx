import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div>
      <div className='description-box'>
        <div className='description-box-navigator'>
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Review (122)</div>
        </div>
      </div>
      <div className='description-box-description'>
        <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services by connecting consumers with a wide array of products offered by various sellers. These websites provide a virtual marketplace where users can browse through product categories, read detailed descriptions, compare prices, and view customer reviews to make informed purchasing decisions</p>
        <p>E-commerce website typically displays a user-friendly interface featuring various sections such as homepages, product listings, and individual product pages. The homepage often highlights special promotions, new arrivals, and top-selling items to attract customers' attention. Product listings provide an organized catalog of items, usually sortable by categories like electronics, fashion, home goods, and more.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
