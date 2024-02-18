import { Router } from 'express';
import { EventItemsControllers } from '../controllers/eventItems.controller';

const router = Router();

router.post('/', EventItemsControllers.createEventItems);
router.get('/', EventItemsControllers.getAllEventItems);
router.patch('/:id', EventItemsControllers.updateEventItems);
router.delete('/:id', EventItemsControllers.deleteEventItems);

export const EventItemsRouter = router;
