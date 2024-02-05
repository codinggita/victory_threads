// MainComponent.js
import React from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import Wishlist from '../pages/wishlist/Wishlist';
import { Link, useNavigate } from "react-router-dom";

const items = [
  // Your list of items here
  // ...

  // The provided list of items
  {
    id: '001',
    image:'images/messi.jpg',
    company: 'Nike',
    item_name: 'FC Barcelona Retro Messi Jersey',
    original_price: 2999,
    current_price: 1649,
    discount_percentage: 45,
    return_period: 14,
    delivery_date: '5 Nov 2023',
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: '002',
    image: 'images/ronaldo.jpg',
    company: 'Nike',
    item_name: 'Manchester United Ronaldo',
    original_price: 2999,
    current_price: 1699,
    discount_percentage: 43,
    return_period: 14,
    delivery_date: '6 Nov 2023',
    rating: {
      stars: 4.4,
      count: 24,
    },
  },
  {
    id: '003',
    image: 'images/chelsea.jpg',
    company: 'Football',
    item_name: 'Chelsea Retro jersey',
    original_price: 2999,
    current_price: 1699,
    discount_percentage: 43,
    return_period: 14,
    delivery_date: '6 Nov 2023',
    rating: {
      stars: 4.4,
      count: 390,
    },
  },
  {
    id: '005',
    image: 'images/realmadrid.jpeg',
    company: 'Adidas',
    item_name: 'Real Madrid retro jersey',
    original_price: 2999,
    current_price: 1899,
    discount_percentage: 37,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.3,
        count: 3500,
    },
},
{
    id: '006',
    image: 'images/manunited.jpg',
    company: 'Fanatics',
    item_name: 'Manchester United Retro',
    original_price: 6999,
    current_price: 3999,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.3,
        count: 10,
    },
},

{
    id: '007',
    image: 'images/arsenal.jpg',
    company: 'Puma',
    item_name: 'Arsenal Retro Jersey',
    original_price: 2599,
    current_price: 1299,
    discount_percentage: 50,
    rating: {
        stars: 4.4,
        count: 388,
    },
},
{
    id: '008',
    image: 'images/argentina.jpg',
    company: 'Nike',
    item_name: 'Argentina Retro jersey',
    original_price: 1899,
    current_price: 899,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        count: 90,
    },
}
  // Add more items as needed
];

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
    <div className="grid grid-cols-1 w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 justify-center mx-2 mr-8" style={{ backgroundColor: '#1f2937' }}>
      {items.map((item) => (
        
        <Card key={item.id} item={item} addToWishlist={() => addToWishlist(item)} onCardClick={handleCardClick}/>
      
      ))}
      <Wishlist wishlistItems={wishlist} />
    </div>
  );
};

export default MainComponent;
