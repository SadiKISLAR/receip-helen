import React, { useState } from 'react'

const Home = () => {
  const APP_ID = "80da54c7";
  const APP_KEY = "c23a7f86fcdeddf5d8f0a3b60023f94c";
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {

  }

  return (
    <div>
      Home
    </div>
  )
}

export default Home
