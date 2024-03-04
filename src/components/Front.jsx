import front_img from "../images/isometric-mobile-phone-with-elements/2823213.png";
const Front = () => {
  return (
    <>
      <div className="front">
        <div className="headline">
          <span className="front_subtitle">The Global leader in </span>
          Fast & Reliable Repair Services for Your Mobile Phone, Tablet and
          Laptop
          <span className="subheading">Find a EZ Fix Mobile Near You</span>
        </div>
        <div className="front_img">
          <img className="front_img" src={front_img} alt="" />
        </div>
      </div>
    </>
  );
};
export default Front;
