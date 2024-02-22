import { z } from 'zod';

export const eventItemsValidationSchema = z.object({
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
