import "./SuccessMessage.css";
import timer from "../../assets/timer.png";
import check_circle from "../../assets/check_circle.png";

const SuccessMessage = () => {
  return (
    <section className="Success_section">
      {/* success_first_section */}
      <section className="success_first_section">
        <div className="success_card">
          <h4>Place your next order in 10mins.</h4>
          <div className="success_flex">
            <img src={timer} alt="timer_img" />
            <p>10:00</p>
          </div>
        </div>
      </section>
      <section className="success_second_section">
        <img src={check_circle} alt="check_img" />
        <div className="success_order">
          <p className="success_p_tag">Order placed successfully!</p>
          <p className="success_p_second_tag">
            Your food is on its way to you in few minutes.
          </p>
        </div>
      </section>
      <section className="success_third_section">
        <button className="success_btn">Back to home</button>
      </section>
    </section>
  );
};
export default SuccessMessage;
