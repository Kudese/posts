import css from "./CardUser.module.css";
import logo from "../images/CardUsers/logo.png";
import ellipse from "../images/CardUsers/ellipse.svg";
import recrangle from "../images/CardUsers/rectangle.svg";
import picture from "../images/CardUsers/picture.png";

const CardUser = (props) => {
  const { avatar, name, tweets, followers } = props.data;

  return (
    <div className={css.container}>
      <img className={css.logo} src={logo} alt="logo GoIt" />
      <img className={css.picture} src={picture} alt="nice_picture" />
      <div className={css.avatat_container}>
        <img className={css.avatat_recrangle} src={recrangle} alt="re" />
        <img className={css.avatat_ellipse} src={ellipse} alt="el" />
        <img className={css.avatar} src={avatar} alt={name} />
      </div>
      <div className={css.text_container}>
        <p className={css.tweets}>{tweets} tweets</p>
        <p className={css.followers}>{followers} followers</p>
        <button className={css.btn}>follow </button>
      </div>
    </div>
  );
};
export default CardUser;
