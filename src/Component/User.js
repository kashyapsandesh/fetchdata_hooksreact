import { getSuggestedQuery } from "@testing-library/react";
import React,{useState,useEffect} from "react";
import './User.css'

const User = () => {
  const [user, setuser] = useState([])//data rerender garna use gareko. Yeha suruma user variable empty xa ani api bata data fetch garera
  //data show cahi setuser function bata garinxa
  const getUser=async()=>{//async: data haru api bata frequently aaune huda site slow ya down hune 
    //condition aauxa so auta paxi arko data pathauna asynchoronus function use garne
    const response= await fetch("https://jsonplaceholder.typicode.com/photos");//jaha await le arko data pahilo data fire complete bhayesi matra pathauxa
    setuser(await response.json())//yesari aayeko api response bhanni class ko object lai json ma change garna use hunxa
  }
 useEffect(()=>{//useeffect: chai generally kunai kura realtime ma render garnu parema use hunxa
  getUser()
 })
  return (
    <div className="container">
    {                                 
      user.map((currElem)=>{
        return (
          <div className="team-row">
            <div className="profile-box">
              <h4>{currElem.title.slice(0,10)}....</h4>
              <small>Founder</small>
              <img src={currElem.thumbnailUrl}></img>
              <div className="social-box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-twitter"></i>
              </div>
            </div>
          </div>
        );

      })
    }
      
    </div>
  );
};

export default User;
