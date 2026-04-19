import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const projectFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  liveUrl: z.string().default(""),
  githubUrl: z.string().default(""),
  date: z.string(),
  featured: z.boolean().default(false),
  order: z.number().optional(),
  hackathonWinner: z.boolean().optional(),
  hackathonName: z.string().optional(),
});

export type Project = z.infer<typeof projectFrontmatterSchema> & {
  content: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function readAllProjectFiles(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const parsed = projectFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid frontmatter in content/projects/${file}:\n${parsed.error.message}`
      );
    }
    return { ...parsed.data, content };
  });
}

export function getAllProjects(): Project[] {
  return readAllProjectFiles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedProjects(limit = 3): Project[] {
  return readAllProjectFiles()
    .filter((p) => p.featured)
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      if (a.order !== undefined) return -1;
      if (b.order !== undefined) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return readAllProjectFiles().find((p) => p.slug === slug);
}

export function getProjectCount(): number {
  return readAllProjectFiles().length;
}

export function getAdjacentProjects(slug: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const all = getAllProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}
