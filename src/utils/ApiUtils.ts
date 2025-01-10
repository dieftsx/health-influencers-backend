import axios from 'axios';

export const fetchFromPerplexity = async (query: string) => {
  const response = await axios.post('https://api.perplexity.ai/endpoint', { query }, {
    headers: { 'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}` }
  });
  return response.data;
};

export const fetchFromConsensus = async (query: string) => {
  const response = await axios.post('https://api.consensus.app/endpoint', { query }, {
    headers: { 'Authorization': `Bearer ${process.env.CONSENSUS_API_KEY}` }
  });
  return response.data;
};
