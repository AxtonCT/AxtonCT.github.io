export const SITE_TITLE = 'AxtonDex';
export const SITE_DESCRIPTION = 'Frontend × AI Visual Design — 记录前端工程与 AI 视觉设计的探索';

/** Author identity surfaced in nav / colophon / about. */
export const AUTHOR = {
	name: 'AxtonDex',
	handle: '@AxtonCT',
	role: 'Frontend × AI Visual Design',
	tagline: 'Frontend engineer, currently bending the workflow toward AI-driven visual design.',
	taglineZh: '把工程师怎么思考，带进设计怎么落地。',
	city: 'Shenzhen, CN',
	tz: 'UTC+8',
	email: 'arron_ct@icloud.com',
	github: 'https://github.com/AxtonCT',
	twitter: 'https://twitter.com/AxtonCT',
	rss: '/rss.xml',
};

/** Build identifier shown in the status bar. */
export const BUILD = '#a3f7c1';

/** Tags allowed on posts. */
export const POST_TAGS = ['meta', 'ai-visual', 'frontend', 'workflow'] as const;
export type PostTag = (typeof POST_TAGS)[number];
