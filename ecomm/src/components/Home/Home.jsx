import React, { useState, useEffect } from 'react';


function HomePage() {
  const [bagItems, setBagItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  function onLoad() {
    const bagItemsStr = localStorage.getItem('bagItems');
    setBagItems(bagItemsStr ? JSON.parse(bagItemsStr) : []);
    displayItemsOnHomePage();
    displayBagIcon();
  }

  function addToBag(itemId) {
    setBagItems([...bagItems, itemId]);
    localStorage.setItem('bagItems', JSON.stringify([...bagItems, itemId]));
    displayBagIcon();
  }

  function displayBagIcon() {
    const bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItemCountElement) {
      bagItemCountElement.style.visibility = bagItems.length > 0 ? 'visible' : 'hidden';
      bagItemCountElement.innerText = bagItems.length;
    }
  }

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  function displayItemsOnHomePage() {
    const itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
      return;
    }

    const innerHtml = items.map((item) => (
      <div className="item-container" style={{ border: '1.8px solid #64666c', borderRadius: '5px' }}>
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {`${item.rating.stars} ⭐ | ${item.rating.count}`}
        </div>
        <div className="company-name">
          {item.company}
          <span
            id="favoriteIcon"
            style={{ marginLeft: '200px', fontSize: '30px', cursor: 'pointer' }}
            onClick={toggleFavorite}
          >
            {isFavorite ? '❤️' : '♡'}
          </span>
        </div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">{`Rs ${item.current_price}`}</span>
          <span className="original-price">{`Rs ${item.original_price}`}</span>
          <span className="discount">{`(${item.discount_percentage}% OFF)`}</span>
        </div>
        <button className="btn-add-bag" onClick={() => addToBag(item.id)}>
          Add to Bag
        </button>
      </div>
    ));

    itemsContainerElement.innerHTML = innerHtml;
  }

  const items = [
    // Replace this array with your actual item data
    // Example: { id: 1, image: 'item1.jpg', ... }
  ];

  return <div className="home-page">{items}</div>;
}

export default HomePage;
