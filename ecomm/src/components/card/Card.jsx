import { HeartIcon } from '@heroicons/react/outline';
import React from 'react';

const Card = ({ item, onCardClick }) => {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" onClick={() => onCardClick(item.id)}>
        <img className="object-cover w-full" src={item.image} alt="product image" />
        {item.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {item.discount}% OFF
          </span>
        )}
      </div>
      <div className="mt-4 px-5 pb-5">
        <span>
          <h5 className="text-xl tracking-tight text-slate-900">{item.item_name}</h5>
        </span>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">Rs{item.current_price}</span>
            <span className="text-sm text-slate-900 line-through">Rs{item.original_price}</span>
          </p>
          <div className="flex items-center">
          <HeartIcon className="h-5 w-5 text-red-500 mr-2" />
          {[...Array(Math.floor(item.rating.stars))].map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1l2.45 6.3h6.3l-4.85 4.7 1.8 6.3L10 13l-4.65 4.3 1.8-6.3L1.25 7.3h6.3L10 1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ))}
            {item.rating.stars % 1 !== 0 && (
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1l2.45 6.3h6.3l-4.85 4.7 1.8 6.3L10 13l-4.65 4.3 1.8-6.3L1.25 7.3h6.3L10 1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}

           
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {item.rating.stars}
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="..."></path>
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Card;
