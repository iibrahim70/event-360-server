import { Router } from 'express';
import { validateRequest } from '../middlewares/validateRequest';
import { eventItemsValidationSchema } from '../validations/eventItems.validation';
import { EventItemsControllers } from '../controllers/eventItems.controller';

const router = Router();

router.post(
  '/',
  validateRequest(eventItemsValidationSchema),
  EventItemsControllers.createEventItems,
);
router.get('/', EventItemsControllers.getAllEventItems);
router.patch('/:id', EventItemsControllers.updateEventItems);
router.delete('/:id', EventItemsControllers.deleteEventItems);

export const EventItemsRouter = router;
