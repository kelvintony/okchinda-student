import "./MyOrder.css";
import React from "react";
import arrowleft from "../../assets/arrowleft.png";
import egusi from "../../assets/egusi.png";
import chops from "../../assets/chops.png";
import bottle from "../../assets/bottle.png";

const MyOrder = () => {
  return (
    <section className="MyCart">
      <section className="MyCart_first">
        <div className="MyCart_inner">
          <img src={arrowleft} alt="arrowleft_img" />
          <h3>My Cart</h3>
        </div>
      </section>
      <section className="MyCart_second">
        <div className="MyCart_second_inner1">
          <img src={egusi} alt="egusi_img" />

          <p>
            Egusi Soup, Pounded yam &<br />
            chicken
          </p>
        </div>
        <div className="MyCart_second_inner2">
          <img src={chops} alt="chops_img" />
          <p>Small chops</p>
        </div>
        <div className="MyCart_second_inner3">
          <img src={bottle} alt="bottle_img" />
          <p>Bottle water</p>
        </div>
      </section>
    </section>
  );
};
export default MyOrder;
