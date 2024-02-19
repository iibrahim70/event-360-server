import { Router } from 'express';
import { validateRequest } from '../middlewares/validateRequest';
import { RecentEventsValidation } from '../validations/recentEvents.validation';
import { RecentEventsControllers } from '../controllers/recentEvents.controller';

const router = Router();

router.post(
  '/',
  validateRequest(RecentEventsValidation.createSchema),
  RecentEventsControllers.createRecentEvents,
);
router.get('/', RecentEventsControllers.getAllRecentEvents);
router.patch(
  '/:id',
  validateRequest(RecentEventsValidation.updateSchema),
  RecentEventsControllers.updateRecentEvents,
);
router.delete('/:id', RecentEventsControllers.deleteRecentEvents);

export const RecentEventsRouter = router;
