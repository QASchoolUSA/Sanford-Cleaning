import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Calendar, User } from 'lucide-react';

interface PostData {
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/src/posts/${slug}.md`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const text = await response.text();
        const { data, content } = matter(text);
        const htmlContent = await marked(content);

        setPost({
          title: data.title,
          author: data.author,
          date: new Date(data.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          image: data.image,
          content: htmlContent,
        });
      } catch (e) {
        setError('Failed to load the post.');
      }
    };

    fetchPost();
  }, [slug]);

  if (error) {
    return <div className="pt-40 text-center text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="pt-40 text-center">Loading...</div>;
  }

  return (
    <div className="pt-20">
      <Helmet>
        <title>{post.title} | Sanford Cleaning Blog</title>
        <meta name="description" content={`Read the blog post: ${post.title}`} />
        <meta property="og:title" content={post.title} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-8 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>By {post.author}</span>
            </div>
          </div>
          <div
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
