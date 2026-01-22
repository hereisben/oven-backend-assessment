import { z } from "zod";

export const webhookInputSchema = z.object({
  source: z.string().trim().min(1).max(50),
  event: z.string().trim().min(1).max(100),
  payload: z.unknown(),
});
