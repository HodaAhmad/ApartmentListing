import express from 'express';
import {
    getApartments,
    getApartment,
    createListing,
} from '../controllers/ApartmentController';

const router = express.Router();

router.get('/apartments', getApartments);
router.get('/apartment/:id', getApartment);
router.post('/apartments', createListing);

export default router;