// MainComponent.js
import React from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import Wishlist from '../pages/wishlist/Wishlist';
import { Link, useNavigate } from "react-router-dom";
import { items } from '../card/items';




const MainComponent = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const addToWishlist = (item) => {
    console.log("Added to wishlist:", item);
    if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const handleCardClick = (itemId) => {
    // Navigate to the product details page
    navigate(`/product/${itemId}`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center  mr-9" style={{ backgroundColor: '#1f2937' }}>
      {items.map((item) => (
        
        <Card key={item.id} item={item} addToWishlist={() => addToWishlist(item)} onCardClick={handleCardClick}/>
      
      ))}
      <Wishlist wishlistItems={wishlist} />
    </div>
  );
};

export default MainComponent;
