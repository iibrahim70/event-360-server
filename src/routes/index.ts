import { Router } from 'express';
import { EventItemsRouter } from './eventItems.route';
import { RecentEventsRouter } from './recentEvents.route';

const router = Router();

const routes = [
  { path: '/event-items/', route: EventItemsRouter },
  { path: '/recent-events', route: RecentEventsRouter },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
