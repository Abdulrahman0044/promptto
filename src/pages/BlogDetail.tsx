import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) return <div className="max-w-3xl mx-auto py-20">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-2">{post.date} &bull; {post.author}</div>
      <div className="prose prose-lg mt-8" style={{whiteSpace: 'pre-line'}}>{post.content}</div>
    </div>
  );
};

export default BlogDetail; 