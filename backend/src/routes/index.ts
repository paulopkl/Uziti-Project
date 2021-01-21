import { Router } from 'express';
import { GET_beer, GET_ONE_beer, POST_beer, PUT_beer, DELETE_beer } from '../controllers/beer.controller';

const router = Router();
 
router
    .get('/beer', GET_beer)
    .get('/beer/:_id', GET_ONE_beer)
    .post('/beer', POST_beer)
    .put('/beer/:_id', PUT_beer)
    .delete('/beer/:_id', DELETE_beer);
 
export default router;