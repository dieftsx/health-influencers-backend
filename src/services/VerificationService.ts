import axios from 'axios';

export const fetchPodcasts = async () => {
  // Implemente a lógica para buscar transcrições de podcasts
  const response = await axios.get('https://api.podcast.com/transcripts');
  return response.data;
};
