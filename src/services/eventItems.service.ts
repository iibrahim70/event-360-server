import { IEventItems } from '../interfaces/eventItems.interface';
import { EventItems } from '../models/eventItems.model';

const createEventItemsFromDB = async (eventItems: IEventItems) => {
  const result = EventItems.create(eventItems);
  return result;
};

const getAllEventItemsFromDB = async () => {
  const result = EventItems.find();
  return result;
};

const updateEventItemsFromDB = () => {};
const deleteEventItemsFromDB = () => {};

export const EventItemsServices = {
  createEventItemsFromDB,
  getAllEventItemsFromDB,
  updateEventItemsFromDB,
  deleteEventItemsFromDB,
};
