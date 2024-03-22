import "./Menu.css";
import homeIcon from "../../assets/homeIcon.png";
import eventIcon from "../../assets/eventIcon.png";
import orderIcon from "../../assets/orderIcon.png";
const Menu = () => {
  return (
    <div className="menu">
      <div style={{ marginTop: "16px" }} className="mx_5 flex_menu">
        <div>
          <img src={homeIcon} className="mb_2" alt="" />
          <p>Home</p>
        </div>
        <div>
          <img src={eventIcon} className="mb_2" alt="" />
          <p>Event</p>
        </div>
        <div>
          <img src={orderIcon} className="mb_2" alt="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
