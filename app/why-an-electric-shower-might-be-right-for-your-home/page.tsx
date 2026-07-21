import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownBlogArticle, getMarkdownBlogPostByHref, readMarkdownBlogSource } from "@/lib/markdownBlog";

const href = "/why-an-electric-shower-might-be-right-for-your-home";
const post = getMarkdownBlogPostByHref(href);

export const metadata: Metadata = post
  ? {
      title: `${post.metaTitle ?? post.title} | RIGS Electrical`,
      description: post.description,
      alternates: { canonical: `https://rigselectrical.co.uk${href}` },
      openGraph: {
        type: "article",
        title: `${post.metaTitle ?? post.title} | RIGS Electrical`,
        description: post.description,
        url: `https://rigselectrical.co.uk${href}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.metaTitle ?? post.title} | RIGS Electrical`,
        description: post.description,
      },
    }
  : {};

export default function Page() {
  if (!post) notFound();

  return <MarkdownBlogArticle post={post} markdown={readMarkdownBlogSource(post)} />;
}
