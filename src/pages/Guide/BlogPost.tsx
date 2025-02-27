import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { service } from "../../services/appwrite";

interface Post {
  $id: string;
  Status: string;
  slug: string;
  FeaturedImage: string;
  Title: string;
  Body: string;
  Short_Description: string;
  Keywords: string[];
  readTime: string;
  Category: string;
  $createdAt: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  


  useEffect(() => {
    async function fetchPosts() {
      try {
        if (slug !== undefined) {
          const Postresult = await service.GetPost(slug);
          console.log(Postresult);
          setPost(Postresult || null);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Something Went Wrong....</div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/guide" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link 
          to="/guide"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Guides
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-96 relative">
            <img
              src={post.FeaturedImage}
              alt={post.Title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {post.Category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.Title}
            </h1>

            <div className="flex items-center text-sm text-gray-500 gap-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.$createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <div className="prose max-w-none text-gray-600">
              {post.Body}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
