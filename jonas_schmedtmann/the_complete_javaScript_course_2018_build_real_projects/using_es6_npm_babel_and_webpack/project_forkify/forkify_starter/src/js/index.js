import axios from 'axios';

async function getResult(query) {
  // enables cross-origin
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const API_KEY = 'e0e8ccd6031b9d2ef50c6d92b66cf703';
  const API_URL = 'http://food2fork.com/api/search';

  try {
    const res = await axios.get(`${proxy}${API_URL}?key=${API_KEY}&q=${query}`);
    const recipes = res.data.recipes;
    console.log('## recipes:', recipes);
  } catch (err) {
    console.error(err);
  }
}

getResult('pizza');
