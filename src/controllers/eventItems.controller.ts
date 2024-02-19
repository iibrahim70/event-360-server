import { catchAsync } from '../utils/catchAsync';
import { EventItemsServices } from '../services/eventItems.service';
import { sendResponse } from '../utils/sendResponse';
import httpStatus from 'http-status';

const createEventItems = catchAsync(async (req, res) => {
  const eventItemsData = req.body;

  const result =
    await EventItemsServices.createEventItemsFromDB(eventItemsData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event Items are created successfully',
    data: result,
  });
});

const getAllEventItems = catchAsync(async (req, res) => {
  const result = await EventItemsServices.getAllEventItemsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event Items are retrieved successfully',
    data: result,
  });
});

const updateEventItems = () => {};
const deleteEventItems = () => {};

export const EventItemsControllers = {
  createEventItems,
  getAllEventItems,
  updateEventItems,
  deleteEventItems,
};
