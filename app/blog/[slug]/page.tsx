import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MARKDOWN_BLOG_POSTS, MarkdownBlogArticle, getMarkdownBlogPostBySlug, readMarkdownBlogSource } from "@/lib/markdownBlog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return MARKDOWN_BLOG_POSTS.filter((post) => post.href.startsWith("/blog/")).map((post) => ({ slug: post.href.replace("/blog/", "") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getMarkdownBlogPostBySlug(slug);
  if (!post || !post.href.startsWith("/blog/")) return {};

  const canonical = `https://rigselectrical.co.uk${post.href}`;
  const title = `${post.metaTitle ?? post.title} | RIGS Electrical`;

  return {
    title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description: post.description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getMarkdownBlogPostBySlug(slug);
  if (!post || !post.href.startsWith("/blog/")) notFound();

  return <MarkdownBlogArticle post={post} markdown={readMarkdownBlogSource(post)} />;
}
