import hero_image from '../images/Hero_image.png';
import star_image from '../images/star.png';

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero--photo" src={hero_image} alt="hero-image" />
      <div className="card--stats">
        <img src={star_image} className="card--star" />
        <span>5.0</span>
        <span>(6) • </span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Hero;
