
import { useEffect } from "react";
import CardUser from "../component/CardUser";
import axios from "axios";

const data = {
  "name": "Ida Herman",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/491.jpg",
  "tweets": "3",
  "followers": "1",
}

const  Tweets = () =>  {

  useEffect(  ()=>{
   async function  asd (page){
      const datas = await axios.get('https://6469673b03bb12ac208c0c6d.mockapi.io/users', {params: {
        limit:10
      }})
      console.log(datas)
      console.log(1)
      return datas
    }
    asd(1)
  })
  return (<div> 
    <CardUser data={data}/>
  </div>);
};

export default Tweets;
