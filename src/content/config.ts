import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    layout: z.string().optional(), // If you want to specify layout in frontmatter
    postStyle: z.string().optional(), // For post style variations
  }),
});

export const collections = {
  'blog': blogCollection,
};