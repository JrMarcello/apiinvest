import express from 'express';

// Controllers
import { ping } from './controller';

// Router
let router = express.Router();

export default () => {

    // Routes
    router.get('/test/ping', ping);
    
    return router;
}