import React from "react";
import "./FirstPage.css";


function FirstPage() {
  return (
    <div className="drz-zanto-page">
      <header className="header">
        <div class="logo">
          <div class="drz">Drz</div>
          <div class="zanto">Zanto</div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">ITEMS</a>
            </li>
            <li>
              <a href="#">CONTACTS</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1>Discover The Future of Mobile Technology</h1>
            <p>
              "Welcome to Drz Zanto, where innovation meets elegance. Explore
              our latest mobile phone, designed to elevate your connectivity and
              enhance your digital lifestyle. With cutting-edge technology,
              stunning visuals, and seamless performance, our device is crafted
              for those who demand the best. Join us on a journey of exploration
              and experience the power of communication in the palm of your
              hand. Whether you're capturing memories, streaming your favorite
              content, or staying connected on the go, our mobile phone is your
              ultimate companion. Discover the future today!"
            </p>
          </div>
          <div className="hero-image">
            <img src="/iPhone-12-Purple.jpg" alt="Mobile Phone" />
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default FirstPage;
