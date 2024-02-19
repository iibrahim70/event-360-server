import { catchAsync } from '../utils/catchAsync';
import { RecentEventsServices } from '../services/recentEvents.service';
import { sendResponse } from '../utils/sendResponse';
import httpStatus from 'http-status';

const createRecentEvents = catchAsync(async (req, res) => {
  const RecentEventsData = req.body;

  const result =
    await RecentEventsServices.createRecentEventsFromDB(RecentEventsData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recent events are created successfully',
    data: result,
  });
});

const getAllRecentEvents = catchAsync(async (req, res) => {
  const result = await RecentEventsServices.getAllRecentEventsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recent events are retrieved successfully',
    data: result,
  });
});

const updateRecentEvents = () => {};

const deleteRecentEvents = catchAsync(async (req, res) => {
  const itemsId = req.params.id;

  const result = await RecentEventsServices.deleteRecentEventsFromDB(itemsId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recent events are deleted successfully',
    data: result,
  });
});

export const RecentEventsControllers = {
  createRecentEvents,
  getAllRecentEvents,
  updateRecentEvents,
  deleteRecentEvents,
};
