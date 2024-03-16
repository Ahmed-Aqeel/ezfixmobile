const DescCard = (card) => {
  const { id, text, title } = card;
  // console.log(id);
  return (
    <>
      <div class="desc_card" id={id}>
        <h4 class="prob_title">
          <i class="fa-solid fa-angle-down fa-xl"></i>
          {title}
        </h4>
        <p class="prob_desc">{text}</p>
      </div>
    </>
  );
};
export default DescCard;
