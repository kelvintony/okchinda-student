import backArrow from "../../assets/chevron.left.png";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";
import repChinda from "../../assets/repchinda.png";
import "./Event.css";
import file from "../../assets/file.png";
const Event = () => {
  return (
    <section className="event_container">
      <div className="event_flex my_4">
        <button className="event_button_arrow">
          <img src={backArrow} alt="backArrow" />
        </button>
        <p>My Cart</p>
        <div></div>
        <div></div>
      </div>
      <div className="event_content">
        <p className="mb_2 grey_p">Welcome to</p>
        <p className="mb_3">
          Rep Ogundu Kingsley Chinda’s Thanksgiving Service.
        </p>
        <div className="image">
          <img src={repChinda} alt="picture of rep chinda" />
        </div>
      </div>
      <div>
        <p className="grey_p">About Ceremony</p>
        <p className="speech">
          Pizza ipsum dolor meat lovers buffalo. Bbq personal pesto sautéed
          fresh Bianca ham pan. Hawaiian ham lovers large parmesan lot pesto.
          Bacon bacon mozzarella rib parmesan anchovies lasagna pizza wing
          pineapple. Pizza ipsum dolor meat lovers buffalo. Bbq personal pesto
          sautéed fresh Bianca ham pan.
        </p>
        <Button className={"event_button"}>
          <span>
            <img src={file} alt="file icon" />
          </span>
          View Programme as pdf
        </Button>
      </div>
      <Menu />
    </section>
  );
};

export default Event;
