import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://gray-kolo-prod.cdn.arcpublishing.com/resizer/JL_e-d4g6Y1Sy7x4o9WH16DUZoY=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/S7OWEFEOMNOXTA3W3ZEOU5GVIY.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://blog.ganttpro.com/wp-content/uploads/2015/12/The-Lean-startup.png"
            rating={2}
          />
          <Product
            title="The lean startup"
            price={29.99}
            image="https://blog.ganttpro.com/wp-content/uploads/2015/12/The-Lean-startup.png"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="4545"
            title="The lean startup"
            price={29.99}
            image="https://blog.ganttpro.com/wp-content/uploads/2015/12/The-Lean-startup.png"
            rating={4}
          />
          <Product
            id="43"
            title="The lean startup"
            price={29.99}
            image="https://blog.ganttpro.com/wp-content/uploads/2015/12/The-Lean-startup.png"
            rating={3}
          />
          <Product
            id="5454"
            title="The lean startup"
            price={29.99}
            image="https://blog.ganttpro.com/wp-content/uploads/2015/12/The-Lean-startup.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="46"
            title="The lean startup"
            price={29.99}
            image="https://blog.ganttpro.com/wp-content/uploads/2015/12/The-Lean-startup.png"
            rating={0}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
