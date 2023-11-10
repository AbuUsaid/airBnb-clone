/* eslint-disable react/prop-types */
// import katie from '../images/katie-zaferes.png';
import star from '../images/Star.png';

const Card = (props) => {
  return (
    <div className="card">
      <img src={`src/images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>From ${props.price} / person</p>
    </div>
  );
};

export default Card;
