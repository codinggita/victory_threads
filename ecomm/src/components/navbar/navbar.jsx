import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Irish Grover' rel='stylesheet'></link>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <header>
      <div className="logo_container">
      <a href="#" style={{ fontFamily: 'Irish Grover', fontSize: 'xx-large', fontWeight: 'bold',color:'rgb(56, 23, 221)' }}>VictoryThreads</a>

      </div>
      <nav className="nav_bar">
        <a href="index.html">Home</a>
        <a href="trending.html">
          Custom<sup>New</sup>
        </a>
        <a>Trending</a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for your favorite jersey ..."
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="material-symbols-outlined action_icon">person</span>
          <span className="action_name">Profile</span>
        </div>

        <a className="action_container" href="pages/wishlist.html">
          <div className="action_container">
            <span className="material-symbols-outlined action_icon">favorite</span>
            <span className="action_name">Wishlist</span>
          </div>
        </a>

        <a className="action_container" href="pages/bag.html">
          <span className="material-symbols-outlined action_icon">shopping_bag</span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">0</span>
        </a>

        <a className="action_container" href="Signin.html">
          <span className="material-symbols-outlined action_icon">Logout</span>
          <span className="action_name" id="logtext">
            Logout
          </span>
        </a>
      </div>
    </header>
</>
  );
};

export default Navbar;
