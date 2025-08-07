import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contentfulClient } from '../lib/contentful';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const entries = await contentfulClient().getEntries({
        content_type: 'blogPost'
      });
      if (entries.items) {
        setBlogPosts(entries.items);
      }
    };
    fetchBlogPosts();
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
            {blogPosts.map((post) => (
              <div key={post.sys.id} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                {post.fields.image && (
                  <img src={post.fields.image.fields.file.url} alt={post.fields.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {new Date(post.sys.createdAt).toLocaleDateString()}
                    </div>
                    {/* You may want to add an author field in Contentful */}
                    {/* <div className="flex items-center">
                      <User className="w-4 h-4 mr-1.5" />
                      {post.fields.author}
                    </div> */}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 h-16">{post.fields.title}</h2>
                  {/* You may want to add an excerpt field in Contentful */}
                  {/* <p className="text-gray-600 mb-4 h-24 overflow-hidden">{post.fields.excerpt}</p> */}
                  <Link to={`/blog/${post.fields.slug}`} className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Get the latest cleaning tips and exclusive offers delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
