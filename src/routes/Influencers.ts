import { Router } from 'express';
import { getInfluencers, verifyClaims } from '../controllers/InfluencerController';

const router = Router();

router.get('/', getInfluencers);
router.post('/verify', verifyClaims);

export default router;
