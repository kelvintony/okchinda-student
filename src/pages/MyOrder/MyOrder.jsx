import "./MyOrder.css";
import React from "react";
import arrowleft from "../../assets/arrowleft.png";
import egusi from "../../assets/egusi.png";
import chops from "../../assets/chops.png";
import bottle from "../../assets/bottle.png";
import home from "../../assets/home.png";
import event from "../../assets/event.png";
import icons_order from "../../assets/icons_order.png";

const MyOrder = () => {
  return (
    <section className="MyOrder">
      <section className="MyOrder_first">
        <div className="MyOrder_inner">
          <img src={arrowleft} alt="arrowleft_img" />
          <h3>My Order</h3>
        </div>
      </section>
      <section className="MyOrder_second">
        <div className="MyOrder_second_inner1">
          <img src={egusi} alt="egusi_img" />

          <p>
            Egusi Soup, Pounded yam &<br />
            chicken
          </p>
        </div>
        <div className="MyOrder_second_inner2">
          <img src={chops} alt="chops_img" />
          <p>Small chops</p>
        </div>
        <div className="MyOrder_second_inner2">
          <img src={bottle} alt="bottle_img" />
          <p>Bottle water</p>
        </div>
      </section>

      <div className="footer_container">
        <button className="home_btn">
          <img src={home} alt="home_img" />
          <p>Home</p>
        </button>

        <button className="home_btn">
          <img src={event} alt="event_img" />
          <p>Event</p>
        </button>

        <button className="home_btn">
          <img src={icons_order} alt="order_img" />
          <p> Order</p>
        </button>
        <span></span>
      </div>
    </section>
  );
};
export default MyOrder;
