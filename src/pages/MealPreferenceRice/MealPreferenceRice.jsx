import "./MealPreferenceRice.css";

const MealPreferenceRice = () => {
  return (
    <section className="meal_preference">
      {/* first part */}
      <section className="meal_preference_first_section">
        <div className="meal_first_part">
          <img src="./arrow.png" alt="" />
          <h3>Select Meal</h3>
          <img src="./f7_cart.png" alt="" />
        </div>
      </section>

      {/* second part */}
      <section className="meal_preference_second_section">
        <h6>Which rice do you prefer?</h6>
      </section>

      <section className="inner_inner">
        <img src="./jollofrice.png" alt="" />
        <div className="bottom_right">Jollof Rice</div>
      </section>

      <section className="inner_inner">
        <img src="./whiterice.png" alt="" />
        <div className="bottom_right">Jollof Rice</div>
      </section>

      <div className="Meal_rice_inner">
        <button>Continue</button>
      </div>
    </section>
  );
};

export default MealPreferenceRice;
