import { Request, Response } from 'express';
import { fetchTweets } from '../services/TwitterService';
import { fetchPodcasts } from '../services/PodcastService';
import { verifyHealthClaims } from '../services/VerificationService';

export const getInfluencers = async (req: Request, res: Response) => {
  try {
    const tweets = await fetchTweets();
    const podcasts = await fetchPodcasts();
    res.json({ tweets, podcasts });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const verifyClaims = async (req: Request, res: Response) => {
  try {
    const { claims } = req.body;
    const verifiedClaims = await verifyHealthClaims(claims);
    res.json(verifiedClaims);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
