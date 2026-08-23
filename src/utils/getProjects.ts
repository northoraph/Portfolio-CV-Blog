const allProjectModules = import.meta.glob<{
  frontmatter: {
    title?: string;
    description?: string;
    period?: string;
    image?: string;
    slug?: string;
    order?: number;
    tags?: string[];
    status?: string;
  };
  default: any;
}>('../content/projects/*.md', { eager: true });

export interface Project {
  title: string;
  description: string;
  period: string;
  image: string;
  slug: string;
  href: string;
  order: number;
  tags: string[];
  status: string;
}

function readModules() {
  const projects: Project[] = [];

  for (const filePath in allProjectModules) {
    const module = allProjectModules[filePath];
    if (!module) continue;

    const frontmatter = module.frontmatter || {};
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    const slug = frontmatter.slug || fileName;
    if (!slug) continue;

    projects.push({
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      period: frontmatter.period || '',
      image:
        frontmatter.image ||
        '/Portfolio-CV-Blog/assets/images/projects/project1.jpg',
      slug,
      href: `/Portfolio-CV-Blog/projects/${slug}/`,
      order: frontmatter.order ?? 99,
      tags: frontmatter.tags || [],
      status: frontmatter.status || '',
    });
  }

  // Lowest order first, then alphabetically by title
  projects.sort((a, b) =>
    a.order !== b.order ? a.order - b.order : a.title.localeCompare(b.title)
  );

  return projects;
}

export function getAllProjects(): Project[] {
  return readModules();
}

export function getProjectBySlug(slug: string) {
  for (const filePath in allProjectModules) {
    const module = allProjectModules[filePath];
    if (!module) continue;

    const frontmatter = module.frontmatter || {};
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    const fileSlug = frontmatter.slug || fileName;

    if (fileSlug === slug) {
      return { frontmatter, Content: module.default, slug: fileSlug };
    }
  }
  return null;
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}
