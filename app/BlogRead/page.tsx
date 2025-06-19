'use client';

import Link from "next/link";

const blogPosts = [
  {
    id: '1',
    title: 'A sculpture of the Laocoön group was vandalized...',
    content: `<p>This is the full article for post 1. More to come...</p>`
  },
  {
    id: '2',
    title: 'Ancient city ruins found beneath the ocean...',
    content: `<p>This is the full article for post 2. More details to follow...</p>`
  }
];

// Function to get post data
function getBlogPostById(id: string) {
  return blogPosts.find((post) => post.id === id) || {
    title: "Post not found",
    content: "<p>We couldn’t find the content you’re looking for.</p>"
  };
}

export default function BlogReadPage({ params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id);

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link href="/blog" className="mt-6 inline-block text-blue-600 hover:underline">
        ← Back to Blog
      </Link>
    </main>
  );
}
