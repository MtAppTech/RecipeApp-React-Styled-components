import React, { useContext } from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";
import { RecipeContext } from "../../App";

//const Header = ({setQuery, setMeal , getData}) => {
const Header = () => {
  const{getData, setQuery,setMeal}=useContext(RecipeContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>

        <Select name="mealTypes" id="mealTypes">
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>TeaTime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
