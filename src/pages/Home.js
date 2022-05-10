import React from "react";
import "../CSS/Normalize.css";
import "../CSS/Home.css";
import Header from "../Component/Header.js";
import User from "../images/user.png";
import Rana from "../images/Rana.png";
import Sun from "../images/sun.png";
import Crescent from "../images/crescent.png";
import { useState } from "react";

function Home() {
  const [mood, setMood] = useState(Crescent);
  const changeMood = () =>{
      if( mood == Crescent){
        setMood(Sun)
      }else{
        setMood(Crescent)
      }
  }

  return (
    <>
      <div className="header">
        <div>
          <img src={User} />
          <span>Personal</span>
        </div>
        <Header />
      </div>

      <div className="firstSection">
        <div>
          <p>THIS IS ME</p>
          <h1>Rana Abu Samhan</h1>
          <p>
            sdfsfsd fdfsdf sdf sd f sdf sdfsd f sdf fsdfsdf sdfsd fsd f sdf
            dsfds fdf sdfdf fsdfsdf sdfsd fsd f sdf dsfds fdf sdfdf
          </p>
          <button>Discover now</button>
        </div>
        <img src={Rana} />
        <img src={mood} className="crescent" onClick={changeMood} />
      </div>

    
    </>
  );
}

export default Home;
