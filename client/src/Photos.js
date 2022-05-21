import React, { useState } from "react";
import "./App.css";

// import BackgroundSlider from "react-background-slider";

const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
  "./images/10.jpg",
  "./images/11.jpg",
  "./images/12.jpg",
  "./images/13.jpg",
  "./images/14.jpg",
  "./images/15.jpg",
];

const Photos = () => {
  //   return <BackgroundSlider images={images} duration={10} transition={2} />;
  const [count, setCount] = useState(0);

  function changeImage() {
    setCount(count + 1);
    console.log("Hi");
  }
  return (
    <div className="image-slider-container">
      {/* {images.map((image) => {
        return (
          <div>
            <img src={image} alt="" />
          </div>
        );
      })} */}
      <img src={images[count % images.length]} alt="" onClick={changeImage} />
    </div>
  );
};

export default Photos;
