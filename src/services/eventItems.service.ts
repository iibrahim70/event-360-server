import { EventItems } from '../models/eventItems.model';

const createEventItemsFromDB = () => {};

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
