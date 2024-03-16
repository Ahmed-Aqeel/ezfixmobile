const Offering = (card) => {
  const { img, title, text } = card;
  return (
    <>
      <div class="card">
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
