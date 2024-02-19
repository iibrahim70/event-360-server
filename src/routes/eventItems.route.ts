import { Router } from 'express';
import { validateRequest } from '../middlewares/validateRequest';
import { EventItemsValidation } from '../validations/eventItems.validation';
import { EventItemsControllers } from '../controllers/eventItems.controller';

const router = Router();

router.post(
  '/',
  validateRequest(EventItemsValidation.createSchema),
  EventItemsControllers.createEventItems,
);
router.get('/', EventItemsControllers.getAllEventItems);
router.patch(
  '/:id',
  validateRequest(EventItemsValidation.updateSchema),
  EventItemsControllers.updateEventItems,
);
router.delete('/:id', EventItemsControllers.deleteEventItems);

export const EventItemsRouter = router;
