import { Router } from 'express';
import {
  getStatusesList,
  getStatus,
  createStatus,
  deleteStatus,
  updateStatuses,
  getInitialStatus,
} from '../controllers/statuses.controller.js';

export const statusesRoute = Router();

statusesRoute.route('/statuses').get(getStatusesList).post(createStatus);

statusesRoute.route('/statuses/:id').get(getStatus).delete(deleteStatus).patch(updateStatuses);

statusesRoute.route('/initialStatus').get(getInitialStatus); //!Todo: double check this route
