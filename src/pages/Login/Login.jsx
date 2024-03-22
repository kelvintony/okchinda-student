import "./Login.css";

const Login = () => {
  return (
    <section className="login_section">
      {/* first part */}
      <section className="login_first_section">
        <img src="./honourable 2.jpg" alt="" />
      </section>

      {/* second part */}
      <section className="login_second_section">
        <h3>You're Welcome</h3>
        <p>Enter your details to quickly order your meal.</p>

        <div className="login_third_section">
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" placeholder="Enter Name" required />
          </label>

          <label className="login_label " htmlFor="tableNumber">
            <span>Select your table number</span>
            <select className="select_container" id="numbers" required>
              <option value="table">Table 1</option>
              <option value="table">Table 2</option>
              <option value="table">Table 3</option>
              <option value="table">Table 4</option>
              <option value="table">Table 5</option>
              <option value="table">Table 6</option>
              <option value="table">Table 7</option>
              <option value="table">Table 8</option>
              <option value="table">Table 9</option>
              <option value="table">Table 10</option>
            </select>
          </label>

          <div className="login_third_inner">
            <button>Order Now</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
