// Post.jsx

import React, { useState } from "react";
import Heart from '../../assets/Heart.jsx';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Post = ({ product, id }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="card border rounded" key={product.id}>
      <>
        <div className="favorite" onClick={handleLike}>
          {like ? <FaHeart /> : <FaRegHeart />}
        </div>
        <Link to={`/post/${product.id}`}>
          <div className="image">
            {/* Check if imageUrl or image property exists before rendering the image */}
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.title} />
            ) : (
              product.image && <img src={product.image} alt={product.title} />
            )}
          </div>
        </Link>
        <div className="content relative">
          <div className="flex flex-col">
            <p className="rate">&#x20B9; {product?.price}</p>
            <span className="kilometer">{product?.title}</span>
            <span className="kilometer font-bold text-lg">{product?.name}</span>
            <p className="name text-gray-500">{product?.category}</p>
            
          </div>
          <div className="mt-5">
            <div className="date absolute left-0">
              <span className="text-xs"></span>
            </div>
            <div className="date absolute right-0">
              <span className="text-xs">{product?.date}</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Post;
