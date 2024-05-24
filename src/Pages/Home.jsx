// Home.jsx

import React, { useEffect, useState } from 'react';
import { app,db } from '../firebase/config.js';
import Header from '../Components/Header/Header.jsx';
import Banner from '../Components/Banner/Banner.jsx';
import Posts from '../Components/Posts/Posts.jsx'; // Leave the existing Posts component
import Footer from '../Components/Footer/Footer.jsx';
import { collection, getDocs } from 'firebase/firestore';
import Post from '../Components/Posts/Post.jsx'; // Import the Post component

function Home(props) {
  const [userProducts, setUserProducts] = useState([]);

  // Fetch user-created products from Firestore
  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        setUserProducts(products);
      } catch (error) {
        console.error('Error fetching user products:', error);
      }
    };

    fetchUserProducts();
  }, []);

  return (
    <div className="homeParentDiv">
      <Header app={app} />
      <Banner app={app} />
      <Posts app={app} />

      <div className="postParentDiv">
      <div className="recommendations p-10 w-full">
      <div className="userProducts">
      <div className="heading mb-5">
          <span className='font-semibold'>Sellers Products</span>
        </div>
        <div className="userProductList">
          {userProducts.map((product) => (
            <Post key={product.id} product={product} />
          ))}
        </div>
      </div>
      </div>
      </div>
      
      <Footer app={app} banner={true} />
    </div>
  );
}

export default Home;
