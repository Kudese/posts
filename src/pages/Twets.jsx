import { useCallback, useEffect } from "react";
import CardUser from "../component/CardUser";
import axios from "axios";
import { useState } from "react";
import css from "./Twets.module.css";
const Tweets = () => {
  const [page, setPage] = useState(1);
  const [dataUsers, setDataUsers] = useState([]);
 
   const userList = useCallback( async ()=>{
    const  data  = await axios.get(
      "https://6469673b03bb12ac208c0c6d.mockapi.io/users",
      { params: { limit: 3, page: page } }
    );
    const newData =  dataUsers.concat(data.data)
    setDataUsers(newData);
  },[page])

  useEffect(() => {
    userList();
  });

 const handleLearMore =()=>{
  setPage(page + 1)
 } 

  return (
    <div>
      <div className={css.conteiner}>
        
        {dataUsers?.map((user) => {
          return <CardUser key={user.id} data={user} />;
        })}
      </div>
      <div className={css.selector}>
        <button onClick={handleLearMore} className={css.btn} >Lear more ...</button>
      </div>
    </div>
  );
};

export default Tweets;
