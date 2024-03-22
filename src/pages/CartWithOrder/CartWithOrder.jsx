import "./CartWithOrder.css";

const CartWithOrder = () => {
  return (
    <section className="cart_with_order">
      {/* first part */}
      <section className="cart_order_first">
        <div className="cart_order_inner">
          <img src="./arrow.png" alt="" />
          <h3>My Cart</h3>
        </div>
      </section>

      {/* second part */}
      <section className="cart_order_second">
        <div className="cart_order_inner_second1">
          <img src="./egusi soup 1.png" alt="" />
          <p>
            Egusi Soup, pounded yam & <br /> chicken
          </p>
          <img src="./close_small.png" alt="" />
        </div>

        <div className="cart_order_inner_second2">
          <img src="./chops.png" alt="" />
          <p>Small chops</p>
          <img src="./close_small.png" alt="" />
        </div>

        <div className="cart_order_inner_second3">
          <img src="./bottle water.png" alt="" />
          <p>Bottle water</p>
          <img src="./close_small.png" alt="" />
        </div>

        <button>Submit Order</button>
      </section>
    </section>
  );
};

export default CartWithOrder;
