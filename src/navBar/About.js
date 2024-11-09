import React from 'react';
import "./about.css"
import ItemList from './ItemList'
import iPhoneImage from './1.png';


function About() {
  return (
    <>
    <div className="about-us">
      <h1>About US</h1>
      <div className="image-content">
      <img src="2.jpg" alt="Android Phone" />
          <img src="2.jpg" alt="Android Phone" />
          <img src="2.jpg" alt="Android Phone" />
        </div>
      <div className="content">
        
        <div className="text-content">
          <p>At Drz Zanto, we are dedicated to redefining the mobile experience through innovation and elegance. Our mission is to create cutting-edge mobile phones that elevate connectivity and enhance digital lifestyles. With a focus on stunning visuals and seamless performance, our devices are meticulously crafted for those who seek the best in technology.
          We invite you to join us on a journey of exploration, where communication becomes effortless and enjoyable. Whether you're capturing life's precious moments, streaming your favorite content, or staying connected on the go, Drz Zanto is your ultimate companion. Discover the future of mobile technology with us, and experience the difference that passion and innovation can make.
          Feel free to adjust any part to better match your vision!</p>
        </div>
        
      </div>

    </div>
    
    <div className="item-list-container">
    <ItemList
        image={iPhoneImage}
        title="iPhone 14 Pro"
        description="Colors: Space Black, Silver, Gold, Deep Purple"
        buttonText="Learn More"
      />
       <ItemList
        image={iPhoneImage}
        title="iPhone 14 Pro"
        description="Colors: Space Black, Silver, Gold, Deep Purple"
        buttonText="Learn More"
      />
       <ItemList
        image={iPhoneImage}
        title="iPhone 14 Pro"
        description="Colors: Space Black, Silver, Gold, Deep Purple"
        buttonText="Learn More"
      />
      <ItemList
        image={iPhoneImage}
        title="iPhone 14 Pro"
        description="Colors: Space Black, Silver, Gold, Deep Purple"
        buttonText="Learn More"
      />
      <ItemList
        image={iPhoneImage}
        title="iPhone 14 Pro"
        description="Colors: Space Black, Silver, Gold, Deep Purple"
        buttonText="Learn More"
      />
      <ItemList
        image={iPhoneImage}
        title="iPhone 14 Pro"
        description="Colors: Space Black, Silver, Gold, Deep Purple"
        buttonText="Learn More"
      />
    </div>
    </>
    

  );
}

export default About;

