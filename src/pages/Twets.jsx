import { useEffect } from "react";
import CardUser from "../component/CardUser";
import axios from "axios";
import { useState } from "react";
import css from "./Twets.module.css";
const Tweets = () => {
  const [page, setPage] = useState(1);
  const [dataUsers, setDataUsers] = useState([]);
  async function userList(page) {
    const  data  = await axios.get(
      "https://6469673b03bb12ac208c0c6d.mockapi.io/users",
      { params: { limit: 3, page: page } }
    );
   
    setDataUsers(data.data);
  }
  useEffect(() => {
    userList(page);
  }, [page]);
 const changePage =(value)=>{
  console.log(value)
  setPage(prevstate=>{
    console.log(prevstate)
    return( prevstate+value)
  })
 }

  return (
    <div>
      <div className={css.conteiner}>
        
        {dataUsers.map((user) => {
          return <CardUser key={user.id} data={user} />;
        })}
      </div>
      <div className={css.selector}>
        <button onClick={()=>changePage(-1)} className={css.btn} disabled={page <= 1 ? true : false}>
          -
        </button>
        <span className={css.page}>{page}</span>
        <button onClick={()=>changePage(1)} className={css.btn}>+</button>
      </div>
    </div>
  );
};

export default Tweets;
