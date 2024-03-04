import { repairs } from "./data";
const Offerings = () => {
  return (
    <>
      <div className="offering_cards">
        {repairs.map((card) => {
          const { id, img, title, text } = card;
          return (
            <div key={id} className="card">
              <div className="plans">
                <img className="" src={img} alt={title} />
              </div>
              <div>
                <h4 className="card_banner">{title}</h4>
                <p className="card_txt">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Offerings;
