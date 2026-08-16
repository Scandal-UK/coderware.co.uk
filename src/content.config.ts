import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/experience',
  }),

  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.string(),
    end: z.string(),

    technologies: z.array(z.string()).default([]),
  }),
});

export const collections = {
    experience,
};
