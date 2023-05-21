import css from "./CardUser.module.css";
import logo from "../images/CardUsers/logo.png";
import ellipse from "../images/CardUsers/ellipse.svg";
import recrangle from "../images/CardUsers/rectangle.svg";
import picture from "../images/CardUsers/picture.png";
import { useDispatch, useSelector } from "react-redux";
import { changStatusFolofer } from "../redux/folowers/slice.folower";

const CardUser = (props) => {
  const { avatar, name, tweets, followers, id } = props.data;
  const folowerList = useSelector(state=>state.folowers)
  const dispathc = useDispatch()
 console.log(folowerList)
const togleFollow = (id)=>{
 dispathc(changStatusFolofer(id))
}

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
        <button onClick={()=>togleFollow(id)} className={css.btn}>follow </button>
      </div>
    </div>
  );
};
export default CardUser;
