import React, { useEffect, useState } from 'react';
import './View.css';
import { Link, useParams } from 'react-router-dom';
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function View() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="viewParentDiv bg-white p-4 shadow-md rounded-md flex">
      <ul className='flex absolute gap-2 text-gray-500 p-2 text-sm'>
        <Link to='/'><li>Home</li></Link> <MdKeyboardArrowRight size={20} color='black' />
        <Link to='/'><li>{product.category}</li></Link> <MdKeyboardArrowRight size={20} color='black' />
        <Link to='.'><li>{product.title}</li></Link>
      </ul>
      <div className="imageShowDiv w-1/2">
        <img src={product.image} alt={product.title} className="w-48 h-32 object-contain rounded-md" />
        <div className='my-10'>
          <h1 className='text-2xl font-semibold pb-2'>Description</h1>
          <p className='font-medium'>{product.description}</p>
        </div>
      </div>
      <div className="rightSection w-1/2">
        <div className="border p-3 rounded border-gray-300 w-full">
          <div className='flex justify-between'>
            <p className="text-3xl mb-2 font-bold text-gray-800">&#x20B9; {product.price}</p>
            <div className='flex gap-3'>
              <CiShare2 size={24} className='cursor-pointer' />
              <FaRegHeart size={24} className='cursor-pointer' />
            </div>
          </div>
          <span className="text-lg font-semibold">{product.title}</span>
          <p className="text-gray-600">{product.category}</p>
          <span className="text-gray-500">{product.date}</span>
        </div>
        <div className="border border-gray-300 rounded w-full mt-3">
          <div className='flex pt-6 px-6 items-center justify-between'>
            <div className='flex gap-3 items-center'>
              <img src={product.image} alt={product.title} className='h-16 w-16 rounded-full' />
              <p className='text-2xl font-semibold'>OLX User</p>
            </div>
            <MdKeyboardArrowRight size={32} className='cursor-pointer' />
          </div>
          <div className="flex mx-auto justify-center p-3" id='seller-chat'>
            <button className="w-full p-1 m-3 hover:bg-gray-900 border-2 border-gray-900 rounded font-medium">
              <div className='rounded p-2 -m-[2px] bg-white'>
                Chat with seller
              </div>
            </button>
          </div>
        </div>
        <div className="border border-gray-300 rounded w-full mt-3 p-4">
          <p className="font-semibold text-xl">Posted in</p>
          <p className='text-sm'>Tapu Basti, Bambooflat, Andaman & Nicobar Islands</p>
        </div>
        <div className='m-3 flex justify-between'>
          <p className='text-sm font-medium'>AD ID {product.id}</p>
          <p className='text-sm cursor-pointer font-medium'>REPORT THIS AD</p>
        </div>
      </div>
    </div>
  );
  
  
}