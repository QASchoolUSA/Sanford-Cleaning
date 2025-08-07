import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import matter from 'gray-matter';

interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postModules = import.meta.glob('/src/posts/*.md');
      const postPromises = Object.entries(postModules).map(async ([path, resolver]) => {
        const { default: url } = await resolver();
        const response = await fetch(url);
        const text = await response.text();
        const { data, content } = matter(text);

        const slug = path.replace('/src/posts/', '').replace('.md', '');
        const excerpt = content.substring(0, 150) + '...';

        return {
          slug,
          title: data.title,
          author: data.author,
          date: new Date(data.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          excerpt,
          image: data.image,
        };
      });

      const fetchedPosts = await Promise.all(postPromises);
      // Sort posts by date in descending order
      fetchedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Cleaning Tips & News Blog | Sanford Cleaning</title>
        <meta name="description" content="Read the latest cleaning tips, company news, and articles on maintaining a healthy home from the experts at Sanford Cleaning." />
        <meta name="keywords" content="cleaning blog, cleaning tips, home maintenance, professional cleaning services, sanford cleaning news" />
        <meta property="og:title" content="Cleaning Tips & News Blog | Sanford Cleaning" />
        <meta property="og:description" content="Stay up-to-date with the latest cleaning tips and news from Sanford Cleaning." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Cleaning Blog
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Your source for expert cleaning tips, company updates, and advice for a sparkling home.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1.5" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 h-16">{post.title}</h2>
                  <p className="text-gray-600 mb-4 h-24 overflow-hidden">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
