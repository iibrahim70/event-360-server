import { catchAsync } from '../utils/catchAsync';
import { RecentEventsServices } from '../services/recentEvents.service';
import { sendResponse } from '../utils/sendResponse';
import httpStatus from 'http-status';

const createRecentEvents = catchAsync(async (req, res) => {
  const recentEventsData = req.body;

  const result =
    await RecentEventsServices.createRecentEventsFromDB(recentEventsData);

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

const updateRecentEvents = catchAsync(async (req, res) => {
  const itemsId = req.params.id;
  const updatedData = req.body;

  const result = await RecentEventsServices.updateRecentEventsFromDB(
    itemsId,
    updatedData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recent events are updated successfully',
    data: result,
  });
});

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
