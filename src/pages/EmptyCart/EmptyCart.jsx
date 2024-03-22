import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <section className="cart">
      {/* first part */}
      <section className="cart_first_part">
        <div className="cart_inner">
          <img src="./arrow.png" alt="" />
          <h3>My Cart</h3>
        </div>
      </section>

      {/* second part */}
      <section className="cart_second_part">
        <img src="./serving-dish (1) 1.png" alt="" />
        <h5>Your cart is empty</h5>
        <p>
          Oops! looks like you haven’t placed an <br /> order, browse menu to
          order.
        </p>

        <button>Browse Menu</button>
      </section>
    </section>
  );
};

export default EmptyCart;
