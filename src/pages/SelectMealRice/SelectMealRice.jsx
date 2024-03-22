import "./SelectMealRice.css";
import React from "react";
import Back from "../../assets/Back.png";
import f7_cart from "../../assets/f7_cart.png";
import Rice from "../../assets/Rice.png";
import Dot from "../../assets/Dot.png";
import stew from "../../assets/stew.png";
import circle from "../../assets/circle.png";
import chickenSauce from "../../assets/chickenSauce.png";
import eggsauce from "../../assets/eggsauce.png";
import friedchicken from "../../assets/friedchicken.png";
import turkey from "../../assets/Turkey.png";
import Beef from "../../assets/Beef.png";

const SelectMealRice = () => {
  return (
    <section className="SelectMeal_section">
      {/* SelectMeal_first_section */}
      <section className="SelectMeal_first_section">
        <div className="Top_section">
          <img src={Back} alt="Back_img" />
          <h4>Select Meal</h4>
          <img src={f7_cart} alt="f7_cart" />
        </div>
      </section>
      {/* SelectMeal_second_section */}
      <section className="SelectMeal_second_section">
        <img src={Rice} alt="Rice_img" />
        <h3>White Rice</h3>
        <div className="SelectMeal_second_inner">
          <img src={Dot} alt="Dot_img" />
          <p>Available</p>
        </div>
        <p>Choose Preferred Sauce</p>
        <div className="Select_Sauce">
          <div className="Sauce_Part">
            <img src={stew} alt="stew_img" />
            <p>Stew</p>
            <img src={circle} alt="circle_img" />
          </div>
          <div className="Sauce_Part">
            <img src={chickenSauce} alt="chicken_img" />
            <p>Chicken Sauce</p>
            <img src={circle} alt="circle_img" />
          </div>
          <div className="Sauce_Part">
            <img src={eggsauce} alt="eggsauce" />
            <p>Egg Sauce</p>
            <img src={circle} alt="circle_img" />
          </div>
        </div>
        <div>
          <p>Choose Preferred Protein</p>
          <div className="Select_Protein_Section">
            <div className="Protein_Part">
              <img src={friedchicken} alt="friedchicken" />
              <p> Fried Chicken</p>
              <img src={circle} alt="circle_img" />
            </div>
            <div className="Protein_Part">
              <img src={turkey} alt="turkey_img" />
              <p> Turkey</p>
              <img src={circle} alt="circle_img" />
            </div>
            <div className="Protein_Part">
              <img src={Beef} alt="Beef_img" />
              <p> Beef</p>
              <img src={circle} alt="circle_img" />
            </div>
          </div>
        </div>
        <div className="Ingredient_section">
          <h5>Main ingredients</h5>
          <ul>
            <li>Rice</li>
            <li>Tomatoes</li>
            <li>Beans pudding</li>
            <li>Seasoning</li>
          </ul>
        </div>
      </section>
      <section className="SelectMeal_third_section">
        <button>Continue</button>
      </section>
    </section>
  );
};

export default SelectMealRice;
