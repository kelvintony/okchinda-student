import "./Home.css";
import cart from "../../assets/f7_cart.png";
import { FOOD_DATA, MEALS_DATA } from "../../components/Data/Data";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";
const Home = () => {
  const navigate = useNavigate();
  const goToNewPage = (id) => {
    navigate(`/aboutmeal/${id}`);
  };

  // const activeToggler = () => {
  //   setIsActive((prev) => !prev);
  // };
  return (
    <section className="home_container">
      <div style={{ marginBottom: "100px" }}>
        <div className="home_container_flex">
          <div>
            <p className="mb_2">Hi John Doe</p>
            <p className="font_bold">Choose what youll love to eat!</p>
          </div>
          <div>
            <button className="cart_button">
              <img src={cart} alt="cart" />
            </button>
          </div>
        </div>
        <div className="food_flex mt_4 mb_2">
          {FOOD_DATA.map((food) => {
            return (
              <div key={food.id}>
                <img src={food.image} alt="food" />
                <p>{food.title}</p>
              </div>
            );
          })}
        </div>
        <p className="font_bold mt_4 mb-2">All meals</p>
        <div className="max_flex" style={{ gap: "30px" }}>
          {MEALS_DATA.map((meal) => {
            return (
              <div key={meal.id} className="meals_card">
                <img src={meal.image} alt="meal" />
                <div style={{ marginBottom: "10px" }} className="flex mx_5">
                  <div className="mt_4">
                    <p className="font_bold mt_3 mb_2">{meal.title}</p>
                    <p className="text_sm">Available</p>
                  </div>
                  <div>
                    <Button
                      key={meal.id}
                      handleButtonClick={() => goToNewPage(meal.id)}
                      className={"btn_home"}
                    >
                      Order
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Menu />
    </section>
  );
};

export default Home;
