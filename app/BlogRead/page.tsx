'use client';

import Link from "next/link";

const blogPosts = [
  {
    id: '1',
    title: 'A sculpture of the Laocoön group was vandalized...'
  },
  {
    id: '2',
    title: 'Ancient city ruins found beneath the ocean...'
  }
];

export default function BlogPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
