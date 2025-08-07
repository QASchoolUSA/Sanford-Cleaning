import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    slug: '5-tips-for-a-cleaner-home',
    title: '5 Tips for a Cleaner, Healthier Home',
    author: 'Jane Doe',
    date: 'July 26, 2024',
    excerpt: 'Keeping your home clean can feel like a full-time job. Here are 5 simple tips to help you maintain a healthier and more organized living space.',
    image: '/sanford-cleaning-homepage.webp'
  },
  {
    slug: 'the-benefits-of-professional-cleaning',
    title: 'The Unseen Benefits of a Professional Cleaning Service',
    author: 'John Smith',
    date: 'July 15, 2024',
    excerpt: 'Discover the surprising benefits of hiring a professional cleaning service, from saving time to improving your indoor air quality.',
    image: '/commercial-cleaning-sanford.webp'
  },
   {
    slug: 'senior-cleaning-sanos',
    title: 'How Professional Cleaning Supports Independent Living for Seniors',
    author: 'Emily Jones',
    date: 'August 1, 2024',
    excerpt: 'A clean home is a safe home, especially for seniors. Learn how our specialized cleaning services can help support independent living and provide peace of mind for families.',
    image: '/sanford-residential-cleaning-2.webp'
  }
];

const Blog = () => {
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
