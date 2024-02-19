import { IRecentEvents } from '../interfaces/recentEvents.interface';
import { RecentEvents } from '../models/recentEvents.model';

const createRecentEventsFromDB = async (recentEvents: IRecentEvents) => {
  const result = RecentEvents.create(recentEvents);
  return result;
};

const getAllRecentEventsFromDB = async () => {
  const result = RecentEvents.find();
  return result;
};

const updateRecentEventsFromDB = () => {};

const deleteRecentEventsFromDB = async (itemsId: string) => {
  const result = RecentEvents.findByIdAndDelete(itemsId);
  return result;
};

export const RecentEventsServices = {
  createRecentEventsFromDB,
  getAllRecentEventsFromDB,
  updateRecentEventsFromDB,
  deleteRecentEventsFromDB,
};
