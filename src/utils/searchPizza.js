import axios from "axios";

const APP_ID = import.meta.env.VITE_EDAMAM_API_ID;
const APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY;

const searchPizza = async (query = "pizza") => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching pizza recipes:", error);
    return [];
  }
};

export default searchPizza;
