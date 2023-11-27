import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";

 const APP_ID = "bfbb3efc";
 const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
  const [recipes, setRecipes]=useState([])
  const [query, setQuery]=useState("")
  const [ögün, setOgun]=useState("")
  
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`

  const getData=async()=>{
    const veri = await axios.get(url)

  }

  return (
    <div>
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData} />

      {[].length > 0 ? (
        <div>
          <RecipeCard />
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
