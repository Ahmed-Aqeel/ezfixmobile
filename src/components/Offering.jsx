import { repairs } from "./data";
const Offering = (id, img, title, text) => {
  return (
    <>
      <div key={id} class="card">
        <div class="plans">
          <img class="" src={img} alt={title} />
        </div>
        <div>
          <h4 class="card_banner">{title}</h4>
          <p class="card_txt">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Offering;
