import "./AdminProcessing.css";

const AdminProcessing = () => {
  return (
    <section className="admin_processing">
      {/* first part */}

      <section className="meal_preference_first_section">
        <div className="meal_first_part">
          <img src="./arrow.png" alt="" />
          <h3>All Orders</h3>
          <img src="./bwcross-removebg-preview.png" alt="" />
        </div>

        <div className="Admin_order">
          <h3>Table 12</h3>
          <h3>Jollof Rice, Fried Chicken & Salad</h3>

          <p>
            <span>Status:</span> Processing
          </p>

          <div className="admin_processing_inner">
            <p>Order processed by Admin Gerald</p>
          </div>
        </div>

        <div className="Admin_order">
          <h3>Table 12</h3>
          <h3>Jollof Rice, Fried Chicken & Salad</h3>

          <p>
            <span>Status:</span> Processing
          </p>

          <div className="admin_processing_inner">
            <p>Order processed by Admin Welron</p>
          </div>
        </div>

        <div className="Admin_order">
          <h3>Table 12</h3>
          <h3>Jollof Rice, Fried Chicken & Salad</h3>

          <p>
            <span>Status:</span> Processing
          </p>

          <div className="admin_processing_inner">
            <p>Order processed by Admin Kelvin</p>
          </div>
        </div>

        <div className="Admin_order">
          <h3>Table 12</h3>
          <h3>Jollof Rice, Fried Chicken & Salad</h3>

          <p>
            <span>Status:</span> Processing
          </p>

          <div className="admin_processing_inner">
            <p>Order processed by Admin Gerald</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdminProcessing;
