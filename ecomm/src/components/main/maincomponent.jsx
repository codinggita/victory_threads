// MainComponent.js
import React from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import Wishlist from '../pages/wishlist/Wishlist';
const items = [
  // Your list of items here
  // ...

  // The provided list of items
  {
    id: '001',
    src:"",
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
    image: 'images/ManU.jpg',
    company: 'Nike',
    item_name: 'Manchester United Ronaldo Jersey',
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
    image: 'images/18.jpg',
    company: 'Cricket',
    item_name: 'Virat Kohli 18',
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
    image: 'images/indian.avif',
    company: 'Adidas',
    item_name: 'India Official ODI Adidas Mens Shirt',
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
    image: 'images/indian2.avif',
    company: 'Fanatics',
    item_name: 'India Cricket World Cup Team Graphic Hoodie',
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
    image: 'images/Barcelona-away.webp',
    company: 'Puma',
    item_name: 'Virat kohli 18 IPL jersey',
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
    image: 'images/psg.jpg',
    company: 'Nike',
    item_name: 'PSG Jordan Fourth Kit 2022-23',
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

  const addToWishlist = (item) => {
    console.log("Added to wishlist:", item);
    if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center ml-2 mr-5">
      {items.map((item) => (
        <Card key={item.id} item={item} addToWishlist={() => addToWishlist(item)} />
      ))}
      <Wishlist wishlistItems={wishlist} />
    </div>
  );
};

export default MainComponent;
