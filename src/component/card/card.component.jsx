import './card.styles.scss'

const Card = ({ card }) => {
  const { linkImg, price, title } = card;
  return (
    <div className="card-container">
      <img
        className="card-top"
        src={linkImg} alt={title}
      ></img>
      <div className="card-bottom">
        <h4>{title}</h4>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Card;
