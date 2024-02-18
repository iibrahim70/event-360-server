import { Router } from 'express';
import { EventItemsRouter } from './eventItems.route';

const router = Router();

const routes = [{ path: '/event-items/', route: EventItemsRouter }];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
