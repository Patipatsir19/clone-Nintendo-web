import './news-card.styles.scss'

const NewsCard = ({ card }) => {
  const { linkImg, date, title } = card;
  return (
    <div className="card-container">
      <img
        className="card-top"
        src={linkImg} alt={title}
      ></img>
      <div className="card-bottom">
        <h4>{title}</h4>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default NewsCard;