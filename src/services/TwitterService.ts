import axios from 'axios';

export const fetchTweets = async () => {
  // Implemente a lógica para buscar tweets de influenciadores de saúde
  const response = await axios.get('https://api.twitter.com/2/tweets');
  return response.data;
};
