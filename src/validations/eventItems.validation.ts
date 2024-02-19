import { z } from 'zod';

const createSchema = z.object({
  body: z.object({
    eventName: z.string({
      required_error: 'Event name is required.',
      invalid_type_error: 'Event name must be a string.',
    }),
    imageURL: z.string({
      required_error: 'Image URL is required.',
      invalid_type_error: 'Image URL must be a string.',
    }),
  }),
});

const updateSchema = z.object({
  body: z.object({
    eventName: z.string({
      required_error: 'Event name is required.',
      invalid_type_error: 'Event name must be a string.',
    }),
  }),
});

export const EventItemsValidation = {
  createSchema,
  updateSchema,
};
