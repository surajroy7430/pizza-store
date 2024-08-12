import axios from 'axios';

const APP_ID = 'd49a7dd9'; // Edamam App ID
const APP_KEY = '34a81b1fb29252e6ea10d189e0caf424'; // Edamam App Key

const searchPizza = async () => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  try {
    const response = await axios.get(url);
    // console.log(response.data)
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching pizza recipes:', error);
    return [];
  }
};

export default searchPizza;
