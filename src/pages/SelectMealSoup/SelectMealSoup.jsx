import "./SelectMealSoup.css";

const SelectMealSoup = () => {
  return (
    <section className="login_section">
      {/* first part */}
      <section className="soup_first">
        <div className="soup_first_part">
          <img src="./arrow.png" alt="" />
          <h3>Select Meal</h3>
          <img src="./f7_cart.png" alt="" />
        </div>
      </section>

      {/* second part */}
      <section className="soup_second_part">
        <img src="./egusi soup 1.png" alt="" />
        <h3>Egusi Soup</h3>
        <div className="second_soup_inner">
          <img src="./Ellipse 186.png" alt="" />
          <p>Available</p>
        </div>
        <p>Choose preferred swallow</p>
        <div className="selectFood">
          <div className="swallow_part">
            <img src="./pounded yam.png" alt="" />
            <p>Pounded Yam</p>
            <img src="add_circle.png" alt="" />
          </div>

          <div className="swallow_part">
            <img src="./garri.png" alt="" />
            <p>Eba</p>
            <img src="add_circle.png" alt="" />
          </div>

          <div className="swallow_part">
            <img src="./wheat.png" alt="" />
            <p>Wheat</p>
            <img src="add_circle.png" alt="" />
          </div>
        </div>

        <div>
          <p>Choose preferred protein</p>

          <div className="SelectProtein">
            <div className="swallow_part">
              <img src="./chicken.png" alt="" />
              <p>Fried Chicken</p>
              <img src="add_circle.png" alt="" />
            </div>

            <div className="swallow_part">
              <img src="./turkey.png" alt="" />
              <p>Turkey</p>
              <img src="add_circle.png" alt="" />
            </div>

            <div className="swallow_part">
              <img src="./beef.png" alt="" />
              <p>Beef</p>
              <img src="add_circle.png" alt="" />
            </div>
          </div>
        </div>

        <div className="ingredientsPart">
          <h5>Main Ingredients</h5>
          <ul>
            <li>Ground egusi seed</li>
            <li>Spinach</li>
            <li>Palm oil</li>
            <li>Beef</li>
            <li>Stockfish</li>
            <li>Seasoning</li>
          </ul>
        </div>
      </section>

      <section className="soup_last_part">
        <button>Place Order</button>
      </section>
    </section>
  );
};

export default SelectMealSoup;
