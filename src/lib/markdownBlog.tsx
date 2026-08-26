import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCoverImage from "@/components/blog/BlogCoverImage";
import JsonLd from "@/components/JsonLd";
import Layout from "@/components/layout/Layout";
import type { BlogPost } from "@/content/blogPosts";
import { BLOG_POSTS } from "@/content/blogPosts";

const blogSourceDir = path.join(process.cwd(), "public", "blogs");

export const MARKDOWN_BLOG_POSTS = BLOG_POSTS.filter((post) => post.sourceSlug);

export function getMarkdownBlogPostBySlug(slug: string) {
  return MARKDOWN_BLOG_POSTS.find((post) => post.sourceSlug === slug || post.href === `/blog/${slug}`);
}

export function getMarkdownBlogPostByHref(href: string) {
  return MARKDOWN_BLOG_POSTS.find((post) => post.href === href);
}

export function readMarkdownBlogSource(post: BlogPost) {
  if (!post.sourceSlug) return "";
  return fs.readFileSync(path.join(blogSourceDir, `${post.sourceSlug}.md`), "utf8");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(value: string) {
  return escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, '<a href="$2">$1</a>');
}

function renderTable(lines: string[]) {
  const rows = lines
    .filter((line, index) => index !== 1)
    .map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => renderInline(cell.trim())));
  const [headings, ...bodyRows] = rows;

  return `<div class="overflow-x-auto my-8"><table><thead><tr>${headings.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead><tbody>${bodyRows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push("<hr />");
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|") && lines[index + 1]?.trim().match(/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/)) {
      const tableLines = [trimmed, lines[index + 1].trim()];
      index += 2;
      while (lines[index]?.trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      blocks.push(renderTable(tableLines));
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      blocks.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (lines[index]?.trim().startsWith("- ")) {
        items.push(`<li>${renderInline(lines[index].trim().slice(2))}</li>`);
        index += 1;
      }
      blocks.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    const paragraphLines = [trimmed];
    index += 1;
    while (lines[index]?.trim() && !lines[index].trim().match(/^(#{1,3})\s+|^- |\||---+$/)) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push(`<p>${renderInline(paragraphLines.join(" "))}</p>`);
  }

  return blocks.join("\n");
}

export function MarkdownBlogArticle({ post, markdown }: { post: BlogPost; markdown: string }) {
  const canonical = `https://rigselectrical.co.uk${post.href}`;
  const html = markdownToHtml(markdown.replace(/^# .+\n+/, ""));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    author: { "@type": "Organization", name: "RIGS Electrical" },
    publisher: { "@type": "Organization", name: "RIGS Electrical" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    description: post.description,
  };

  return (
    <Layout>
      <JsonLd data={articleSchema} />

      <section className="pt-10 md:pt-14">
        <div className="container">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-lg">
            <BlogCoverImage title={post.title} variant="hero" asHeading />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-10">
              <Link href="/blog" className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                Back to Blog
              </Link>
              {post.relatedServiceHref ? (
                <Link href={post.relatedServiceHref} className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors">
                  Related service
                </Link>
              ) : null}
            </div>
            <article className="prose prose-rigs max-w-none md:prose-lg" dangerouslySetInnerHTML={{ __html: html }} />
            {post.internalLinks?.length ? (
              <nav className="mt-12 rounded-lg border border-border bg-secondary p-6" aria-label="Related electrical pages">
                <h2 className="font-heading text-xl font-800 mb-4">Related electrical pages</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {post.internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center justify-between gap-3 rounded-md border border-border bg-background px-4 py-3 text-sm font-heading font-600 text-primary hover:border-primary/30 transition-colors"
                    >
                      {link.title}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  ))}
                </div>
              </nav>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  );
}
