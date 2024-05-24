import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { storage } from "../../firebase/config.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import '../Create/Create.css';

const Create = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [priceError, setPriceError] = useState("");

  const handleImageUpload = async () => {
    if (!image) {
      console.error("No image selected");
      return;
    }

    const storageRef = ref(storage, `product-images/${image.name}`);

    try {
      await uploadBytes(storageRef, image);
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate name
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Please enter a valid name (only characters allowed)");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate category
    if (!/^[a-zA-Z\s]+$/.test(category)) {
      setCategoryError("Please enter a valid category (only characters allowed)");
      isValid = false;
    } else {
      setCategoryError("");
    }

    // Validate price
    if (!/^\d+$/.test(price)) {
      setPriceError("Please enter a valid price (only numbers allowed)");
      isValid = false;
    } else {
      setPriceError("");
    }

    if (isValid) {
      // Upload image to Firebase Storage
      await handleImageUpload();

      // Get the download URL of the uploaded image
      const storageRef = ref(storage, `product-images/${image.name}`);
      const imageUrl = await getDownloadURL(storageRef);
      console.log("Download URL:", imageUrl);
      // Store product data in Firestore
      try {
        await addDoc(collection(db, "products"), {
          name,
          category,
          price,
          imageUrl,
        });
        console.log("Product added successfully");
        navigate('/');
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };

  return (
    <div className="createContainer">
      <div className="centerDiv" style={{padding: '20px'}}>
        <h1 style={{textAlign: 'center', fontWeight: 'bold'}}>Create Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
            {nameError && <p className="error">{nameError}</p>}
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            />
            {categoryError && <p className="error">{categoryError}</p>}
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input"
            />
            {priceError && <p className="error">{priceError}</p>}
          </div>
          <div>
            <label htmlFor="image">Product Image:</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="input"
            />
          </div>
          <button type="submit" className="uploadBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
