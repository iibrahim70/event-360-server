import { Router } from 'express';
import { validateRequest } from '../middlewares/validateRequest';
import { recentEventsValidationSchema } from '../validations/recentEvents.validation';
import { RecentEventsControllers } from '../controllers/recentEvents.controller';

const router = Router();

router.post(
  '/',
  validateRequest(recentEventsValidationSchema),
  RecentEventsControllers.createRecentEvents,
);
router.get('/', RecentEventsControllers.getAllRecentEvents);
router.patch(
  '/:id',
  validateRequest(recentEventsValidationSchema),
  RecentEventsControllers.updateRecentEvents,
);
router.delete('/:id', RecentEventsControllers.deleteRecentEvents);

export const RecentEventsRouter = router;
