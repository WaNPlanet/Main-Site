'use client';
import { useParams } from 'next/navigation';

const blogPosts = [
  {
    id: '1',
    title: 'A sculpture of the Laocoön group was vandalized...',
    content: 'Full blog post content for post 1...',
  },
  {
    id: '2',
    title: 'Ancient city ruins found beneath the ocean...',
    content: 'Full blog post content for post 2...',
  },
];

export default function BlogReadPage() {
  const { id } = useParams(); // Gets dynamic id from URL

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <div className="p-8 text-red-600">Post not found</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-800">{post.content}</p>
      <a href="/blog" className="text-blue-500 underline mt-6 inline-block">← Back to Blog</a>
    </div>
  );
}
