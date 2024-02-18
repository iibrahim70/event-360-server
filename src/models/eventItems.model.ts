import { Schema, model } from 'mongoose';
import { IEventItems } from '../interfaces/eventItems.interface';

const eventItemsSchema = new Schema<IEventItems>(
  {
    eventName: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const EventItems = model<IEventItems>('EventItems', eventItemsSchema);
