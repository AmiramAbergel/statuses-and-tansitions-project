import { Router } from 'express';
import {
  getTransitionsList,
  getTransition,
  createTransition,
  deleteTransition,
  updateTransitions,
} from '../controllers/transitions.controller.js';

export const transitionsRoute = Router();

transitionsRoute.route('/transitions').get(getTransitionsList).post(createTransition);

transitionsRoute
  .route('/transitions/:id')
  .get(getTransition)
  .delete(deleteTransition)
  .patch(updateTransitions);
