import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";


const Header = ({setQuery, setMeal , getData}) => {

  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>
      <FormContainer >
        <FoodInput
          type="text"
          placeholder="Search"
         
        />
        <Button type="submit">Search</Button>

        <Select
          name="mealTypes"
          id="mealTypes"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>TeaTime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
