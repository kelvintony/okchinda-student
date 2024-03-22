import "./MyCart.css";
import React from "react";
import arrowleft from "../../assets/arrowleft.png";
import egusi from "../../assets/egusi.png";
import close from "../../assets/close.png";
import chops from "../../assets/chops.png";
import bottle from "../../assets/bottle.png";
import add from "../../assets/add.png";

const MyCart = () => {
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
          <img src={close} alt="close_img" />
        </div>
        <div className="MyCart_second_inner2">
          <img src={chops} alt="chops_img" />
          <p>Small chops</p>
          <img src={close} alt="close_img" />
        </div>
        <div className="MyCart_second_inner3">
          <img src={bottle} alt="bottle_img" />
          <p>Bottle water</p>
          <img src={close} alt="close_img" />
        </div>
        <div className="MyCart_btn_container">
          <button className="add_more_btn">
            <span>
              <img src={add} alt="add_img" className="add_img" />
            </span>
            Add More
          </button>
          <button className="Submit_btn">
            <span>Submit Order</span>
          </button>
        </div>
      </section>
    </section>
  );
};

export default MyCart;
