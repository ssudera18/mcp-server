// src/tools/school/school.schema.ts
import { z } from 'zod';

export const searchSchoolSchema = z.object({
  city: z.string().optional(),
  budget: z.number().optional(),
  board: z.string().optional(),
  type: z.string().optional()
});