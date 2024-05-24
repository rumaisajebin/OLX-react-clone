import React, { useState, useEffect } from 'react';
import './Post.css';
import Post from './Post.jsx';

function Posts() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(8);
  
  const handleLoadMore = () => {
    setProductCount(prevCount => prevCount + 4);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${productCount}`)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, [productCount]);

  return (
    <div className="postParentDiv">
      <div className="recommendations p-10 w-full">
        <div className="heading mb-5">
          <span className='font-semibold'>Fresh recommendations</span>
        </div>
        <div className="cards flex flex-wrap gap-3">
          {products.map((product, id) => (
            <Post key={id} product={product} />
          ))}
        </div>
        {productCount < 20 && (
          <div className="flex mx-auto justify-center p-3" id='loadmore'>
            <button className="p-1 m-3 hover:bg-gray-900 border-2 border-gray-900 rounded font-medium" onClick={handleLoadMore}>
              <div className='rounded p-2 -m-[2px] bg-white'>
                Load more
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;