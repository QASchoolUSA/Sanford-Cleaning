import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { contentfulClient } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const entries = await contentfulClient().getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
      });
      if (entries.items && entries.items.length > 0) {
        setPost(entries.items[0]);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-20">
      <Helmet>
        <title>{post.fields.title} | Sanford Cleaning Blog</title>
        {/* You might want to add a meta description field in Contentful */}
        {/* <meta name="description" content={post.fields.excerpt} /> */}
        <meta property="og:title" content={post.fields.title} />
        {/* <meta property="og:description" content={post.fields.excerpt} /> */}
        {post.fields.image && (
          <meta property="og:image" content={post.fields.image.fields.file.url} />
        )}
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://sanfordcleaning.com/blog/${post.fields.slug}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <h1>{post.fields.title}</h1>
          {post.fields.image && (
            <img src={post.fields.image.fields.file.url} alt={post.fields.title} className="w-full rounded-lg mb-8" />
          )}
          <div>{documentToReactComponents(post.fields.article)}</div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
