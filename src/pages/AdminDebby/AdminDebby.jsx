import "./AdminDebby.css";

const AdminDebby = () => {
  return (
    <section className="AdminPage">
      <section className="admin_debby_first_section">
        <h3>All Orders</h3>
        <div className="admin_debby_first_inner">
          <div className="inner_in">
            <p>Total order</p>
            <p>345</p>
          </div>

          <div className="inner_in">
            <p>Pending</p>
            <p>200</p>
          </div>

          <div className="inner_in">
            <p>Processing</p>
            <p>134</p>
          </div>

          <div className="inner_in">
            <p>Completed</p>
            <p>50</p>
          </div>
        </div>

        <div className="Admin_order">
          <h3>Table 12</h3>
          <h3>Jollof Rice, Fried Chicken & Salad</h3>

          <h5>
            <span>Recipient:</span> Treasure
          </h5>

          <p>
            <span>Status:</span> Pending
          </p>

          <button>Accept Order</button>
        </div>

        <div className="Admin_order">
          <h3>Table 6</h3>
          <h3>Egusi Soup, pounded yam & Turkey</h3>

          <h5>
            <span>Recipient:</span> Treasure
          </h5>

          <p>
            <span>Status:</span> Pending
          </p>

          <button>Accept Order</button>
        </div>

        <div className="Admin_order">
          <h3>Table 1</h3>
          <h3>Small chops</h3>

          <h5>
            <span>Recipient:</span> Treasure
          </h5>

          <p>
            <span>Status:</span> Pending
          </p>

          <button>Accept Order</button>
        </div>
      </section>

      <section className="admin_last_section">
        <div className="admin_last_inner1">
          <img src="./order.png" alt="" />
          <p>Orders</p>
        </div>

        <div className="admin_last_inner3">
          <img src="./add-removebg-preview.png" alt="" />
        </div>

        <div className="admin_last_inner2">
          <img src="./order2.png" alt="" />
          <p>Orders</p>
        </div>
      </section>
    </section>
  );
};

export default AdminDebby;
