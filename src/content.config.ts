import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),

			/* Monolith additions (all optional) */
			subtitle: z.string().optional(),
			tag: z.enum(['meta', 'ai-visual', 'frontend', 'workflow']).optional(),
			featured: z.boolean().optional(),
			readMinutes: z.number().optional(),
		}),
});

const works = defineCollection({
	loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			year: z.coerce.number(),
			role: z.string(),

			/* Optional surface (all safe to omit) */
			subtitle: z.string().optional(),
			stack: z.array(z.string()).default([]),
			link: z.string().optional(),
			repo: z.string().optional(),
			status: z.enum(['live', 'wip', 'archived']).default('live'),
			heroImage: z.optional(image()),
			featured: z.boolean().optional(),
			order: z.number().optional(),
		}),
});

export const collections = { blog, works };
