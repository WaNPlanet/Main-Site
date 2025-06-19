'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";

interface Comment {
  id: string;
  text: string;
  replies: Comment[];
  voiceNote?: string | null;
  image?: string | null;
  parentId?: string | null;
}

const blogPosts = [
  { id: '1', title: 'A sculpture of the Laocoön group was vandalized...', content: '<p>This is the full article about Laocoön.</p>' },
  { id: '2', title: 'Ancient city ruins found beneath the ocean...', content: '<p>Details about ancient ruins.</p>' },
];

export default function BlogPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlogReadPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) return <div className="p-6 text-red-600">Post not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link href="/blog" className="text-blue-600 hover:underline block mt-6">
        ← Back to Blog
      </Link>
    </div>
  );
}
