// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// export const getTrending = async () => {
//   const data = await axios(`/trending/all/day?language=en-US`, {
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjU3ODU2Zjc4OWJhZGE1MDI5NmFhYmRjM2E4YjhmMyIsInN1YiI6IjY0MzZmZmRkZmQ0ZjgwMDExMWZhZTc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wsrzn3TrYV0jIlzFxZ664vNuwDoGi7nYTWve9tWqVnA',
//     },
//   });
//   return data;
// };


//====================================


import axios from 'axios';

const API_KEY = '5257856f789bada50296aabdc3a8b8f3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingDay = async () => {
  const data = await axios(`/trending/all/day?api_key=${API_KEY}&language=en-US`);
  return data;
};


export default getTrendingDay;
