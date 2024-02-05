import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';

const Product = ({ product }) => {
  return (
    <>
      <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2">
              <div className="sticky top-0 z-50 overflow-hidden">
                <div className="relative mb-6 lg:mb-10" style={{ height: '450px' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                {/* Additional images or details */}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-semibold text-slate-900">{product.name}</h2>
                  <p className="text-lg text-slate-900">{product.description}</p>
                </div>
                <div className="mb-8">
                  {/* Color options or additional details */}
                </div>
                <div className="pb-6 mb-8 border-b border-gray-300 dark:border-gray-700">
                  {/* Size options or additional details */}
                </div>
                <div className="flex flex-wrap items-center">
                  <p className="text-xl font-bold text-slate-900">Rs{product.price}</p>
                  <div className="flex items-center ml-3">
                    <HeartIcon className="h-5 w-5 text-red-500 mr-2" />
                    {[...Array(Math.floor(product.rating.stars))].map((_, index) => (
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
                    {product.rating.stars % 1 !== 0 && (
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
                      {product.rating.stars}
                    </span>
                  </div>
                </div>
                {/* Add to cart button or additional actions */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
