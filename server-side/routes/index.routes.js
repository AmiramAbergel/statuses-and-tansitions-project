import { Router } from 'express';
import { statusesRoute } from './statuses.routes.js';
import { transitionsRoute } from './transitions.routes.js';

const indexRoute = Router();

export default indexRoute;

indexRoute.use(statusesRoute);
indexRoute.use(transitionsRoute);
