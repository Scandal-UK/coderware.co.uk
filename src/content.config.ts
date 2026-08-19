import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const profile = defineCollection({
  loader: glob({
    pattern: 'profile.md',
    base: './src/content',
  }),

  schema: z.object({
    name: z.string(),
    role: z.string(),
    secondaryRole: z.string().optional(),
    location: z.string(),
    specialisms: z.array(z.string()).default([]),
    linkedin: z.string().url(),
    github: z.string().url(),
  }),
});

const highlights = defineCollection({
  loader: glob({
    pattern: 'highlights.md',
    base: './src/content',
  }),

  schema: z.object({
    highlights: z.array(z.object({
      category: z.string(),
      text: z.string(),
    })),
  }),
});

const skills = defineCollection({
  loader: glob({
    pattern: 'skills.md',
    base: './src/content',
  }),

  schema: z.object({
    softwareDevelopment: z.array(z.string()),
    cloudDevOps: z.array(z.string()),
    identitySecurity: z.array(z.string()),
    frontEnd: z.array(z.string()),
    engineering: z.array(z.string()),
    aiAssisted: z.array(z.string()),
  }),
});

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
  profile,
  highlights,
  skills,
  experience,
};
