import { catchAsync } from '../utils/catchAsync';
import { EventItemsServices } from '../services/eventItems.service';
import { sendResponse } from '../utils/sendResponse';
import httpStatus from 'http-status';

const createEventItems = () => {};

const getAllEventItems = catchAsync(async (req, res) => {
  const result = EventItemsServices.getAllEventItemsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recent Events are  retrieved successfully',
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
