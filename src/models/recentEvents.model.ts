import { Schema, model } from 'mongoose';
import { IRecentEvents } from '../interfaces/recentEvents.interface';

const recentEventsSchema = new Schema<IRecentEvents>(
  {
    eventName: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const RecentEvents = model<IRecentEvents>(
  'RecentEvents',
  recentEventsSchema,
  'recentEvents',
);
