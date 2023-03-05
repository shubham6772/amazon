import React from "react";
import "./Home.css";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://wallpapers.com/images/featured-full/amazon-npcp6jc782ixp9zs.jpg"
          alt="wallpaper"
        />

        <div className="home__row">
          <Product
            id="1"
            title="J.K. Rowling an eighth Harry Potter book The Cursed Child"
            price={29.99}
            image="https://pbs.twimg.com/media/Ca29a8jXEAA7XRK?format=jpg&name=medium"
            rating={5}
          />
          <Product
            id="2"
            title="Smart Watch for Men - Smart Watches for Men Women, Bluetooth Smartwatch Touch Screen Bluetooth Smart Watches for Android iOS Phones Wrist Phone Watch, Women - Royal Black ID116 Smart Watch - Black"
            price={300}
            image="https://cdn.shopclues.com/images1/thumbnails/116370/320/320/153077646-116370251-1668507510.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Lifelong LLMG23 Power Pro 500-Watt Mixer Grinder with 3 Jars (Liquidizing, Wet Grinding and Chutney Jar), Stainless Steel blades, 1 Year Warranty (Pink)"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBxhEpNaB-eIVUGpgEzICiHay3Yzmp8MntR1s-ot1ma7lwYHr8l5Q8IX-YPaNnPZC1FA&usqp=CAU"
            price={50.33}
            rating={2}
          />

          <Product
            id="4"
            title="BERGNER Sorrento Stainless Steel Pressure Cooker with Outer Lid, 2 Liters, Triply Bottom, Induction Base, 5 Year Warranty, Silver, (BGIN-1851)"
            image="https://www.vinodsteel.com/wp-content/uploads/2020/01/pressure-cooker-1-1-300x300.png"
            price={30.2}
            rating={4}
          />
          <Product
            id="5"
            title="akiara - Makes life easy Mini Sewing Machine for Home Tailoring use | Mini Silai Machine with Sewing Kit Set Sewing Box with Thread Scissors, Needle All in One Sewing Accessories (White & Purple)"
            image="https://image.made-in-china.com/2f0j00BAmQRtGnaTqY/Double-Needle-Extra-Heavy-Duty-Moccasin-Stitching-Machine.jpg"
            price={22.34}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product 
            id='5'
            title='Mi 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)'
            image='https://static.digit.in/default/bc73a614758dc9e90e5293e75d72228aebb9c09a.jpeg?tr=w-1200'
            price={200}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
