"use client";
import { useEffect, useState } from "react";
import { useParams, redirect } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PortableText from "react-portable-text";
import { getguide } from "../../../lib/services/blog";
import { urlFor } from "@/lib/image";
import { Post } from "../guides";


export default function BlogPost() {
  const  params  = useParams() ;
  const slug = params.slug || "";
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        if (slug !== undefined) {
          if (typeof slug === "string") {
            const Postresult = await getguide(slug);
            setPost(Postresult || null);
          } else {
            setError(true);
          }
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
    return redirect("/guide");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link
          href="/guide"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Guides
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-96 relative">
            <img
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {post.category || "General"}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-sm text-gray-500 gap-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>

            <div className="prose max-w-none text-gray-600">
              {/* {post.body} */}
              <PortableText
                // Pass in block content straight from Sanity.io
                content={post.body}
                projectId = {process.env.PROJECTID}
                dataset = {process.env.DATASETS}
               
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
                serializers={{
                  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ color: "black" }} {...props} />,
                  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 style={{ color: "black" }} {...props} />,
                  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 style={{ color: "black" }} {...props} />,
                  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 style={{ color: "black " }} {...props} />,
                  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => <p style={{ color: "black " }} {...props} />,
                  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a style={{ color: "blue " }} {...props} />,
                  li: ({ children }: { children: React.ReactNode }) => (
                    <li className="special-list-item">{children}</li>
                  ),
                  
                }}
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
