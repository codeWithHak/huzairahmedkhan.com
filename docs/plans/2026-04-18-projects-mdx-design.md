# Projects: MDX-driven list page + detail pages

**Date:** 2026-04-18
**Status:** Design approved, ready for implementation

## Goal

Scale the portfolio's project showcase from a hardcoded 3-project array to an MDX-driven system that supports unlimited projects, with a dedicated `/projects` list page and a detail page per project.

## Why

- Currently 3 projects hardcoded in `components/Projects.tsx`. Adding project #4 means editing component code.
- Recruiter value: detail pages give dwell time, SEO footprint, and a place to show *how* the work was built, not just *what* it is.
- Writing prose inside a TypeScript object is awkward; MDX is the modern standard for portfolio content.

## Non-goals

- Full case studies with metrics/diagrams (light detail pages only — upgradable per project later).
- Filter UI on the list page (revisit when project count crosses ~10).
- Headless CMS.
- Blog (same MDX pattern will apply when that ships).

## Architecture

```
content/
  projects/
    physai.mdx
    quizler.mdx
    chadgpt.mdx
    ...
app/
  projects/
    page.tsx              # /projects list page
    [slug]/
      page.tsx            # /projects/physai, etc.
lib/
  projects.ts             # reads MDX, parses frontmatter, exports helpers
components/
  Projects.tsx            # existing homepage section — reads from lib now
  project/
    ProjectCard.tsx       # shared card (homepage bento + list page)
    ProjectMeta.tsx       # tags/date/links bar on detail page
    mdx-components.tsx    # MDX component overrides (headings, code, images)
```

**Core principle:** `lib/projects.ts` is the single source of truth. Every surface (homepage, list, detail, sitemap, future RSS) reads from it. Adding a project = adding one `.mdx` file. No component changes.

**Dependencies:** `@next/mdx`, `gray-matter`, `remark-gfm`. All build-time, zero runtime overhead.

## Content schema (MDX frontmatter)

```mdx
---
title: "PhysAI"
slug: "physai"
description: "RAG-powered robotics education platform with AI chatbot."
image: "/projects/physai.png"
tags: ["OpenAI Agents SDK", "RAG", "FastAPI", "Next.js"]
liveUrl: "https://physai.vercel.app"
githubUrl: ""
date: "2025-09-15"
featured: true
order: 1
---

## The problem
...

## What I built
...

## Stack & decisions
...

## Outcome
...
```

**Fields:**
- `title`, `slug`, `description`, `image`, `tags`, `liveUrl`, `githubUrl` — same shape as existing TS array.
- `date` — drives sort order on `/projects`.
- `featured: true` — flag for homepage inclusion (cap at 3).
- `order` — optional manual override to pin featured slot position.

**Conventions:**
- Empty URLs are `""`, not `"#"` (clean `if (liveUrl)` checks, optional in schema).
- Zod schema in `lib/projects.ts` validates frontmatter at build time — typos fail build, not silent renders.

## Homepage `Projects` section

- Reads `getFeaturedProjects()` → `featured: true`, sorted by `order` then `date` desc, capped at 3.
- Visual layout unchanged: 1 hero card + 2 bento cards.
- New "View all N projects →" link below the grid, accent color, right-aligned. Only renders when total project count > 3.
- Bento card markup extracted to `components/project/ProjectCard.tsx` (reused on list page). Hero card stays inline (one-off layout).
- Component becomes server component (async MDX read); animated wrappers split into small `"use client"` child.

## `/projects` list page

- Server component, statically generated at build.
- Header: `> All Projects` eyebrow + `Everything I've built` h1 + one-line subtitle. Matches homepage section visual language.
- `← back` link top-left.
- Grid of `ProjectCard`: 2 cols desktop, 1 col mobile. All projects, sorted by `date` desc.
- Card image + title link to `/projects/[slug]`; live/code buttons remain direct external links.
- Page metadata: static title/description.
- Sitemap: `app/sitemap.ts` reads from `getAllProjects()` and emits URL per slug.

## `/projects/[slug]` detail page

**Layout:**
1. `← all projects` back link, accent color.
2. Hero image, `aspect-[21/9]` (matches homepage featured card — feels like continuation).
3. Title block: h1 + description + metadata bar (date, tags, Live Demo / Code buttons).
4. MDX content, styled via `mdx-components.tsx` to match dark theme (`#BFE600` headings, `#0a0a0a` code blocks, `clip-corner` images).
5. Prev / Next nav at bottom — two small cards linking chronologically. Collapses on ends.

**Dynamic metadata per page:**
```tsx
export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);
  return {
    title: `${project.title} — Huzair Ahmed Khan`,
    description: project.description,
    openGraph: { images: [project.image] },
  };
}
```

Each project gets its own OG image when shared.

**404:** unknown slug → `notFound()` → existing `app/not-found.tsx`.

**Static generation:** `generateStaticParams` pre-renders every slug at build time.

## Migration path

1. Install deps (`@next/mdx`, `gray-matter`, `remark-gfm`).
2. Configure `next.config.ts` for MDX.
3. Build `lib/projects.ts` with Zod schema.
4. Create `content/projects/` and port the 3 existing projects into MDX files.
5. Extract `ProjectCard`; update homepage `Projects.tsx` to read from lib.
6. Build `/projects` list page.
7. Build `/projects/[slug]` detail page + `mdx-components.tsx`.
8. Update `app/sitemap.ts` to include projects.
9. Write 2-3 paragraphs of detail content for each existing project.

## Open questions for implementation

- Choice of syntax highlighter for code blocks inside MDX (shiki vs rehype-pretty-code) — defer to implementation step.
- Whether to auto-generate per-project OG images later (currently reuses `image` field).
