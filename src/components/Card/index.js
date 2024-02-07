import "./Card.css";

const Card = ({ title, p, lesson }) => (
  <div className="Card">
    <h6>{title}</h6>
    <p>{p}</p>
    {lesson > 20 && <div>ileri düzey</div>}
  </div>
);

export default Card;
