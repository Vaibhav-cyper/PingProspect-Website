"use client";
import { useEffect, useState } from "react";
import { useParams, redirect } from "next/navigation";
import { Calendar } from "lucide-react";
import Image from 'next/image';
import PortableText from "react-portable-text";
import { getguide } from "../../../lib/services/blog";
import { urlFor } from "../../../lib/image";
import { Post } from "../guides";

export default function BlogPost() {
  const params = useParams();
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <article>
          {/* Guide category  */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {post.category || "General"}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>

            {/* Guide Title  */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              {post.meta_description}
            </p>
            
            {/* Guide Image  */}
            <div className="h-96 relative mb-8 ">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none text-xl">
              {/* {post.body} */}
              <PortableText
                // Pass in block content straight from Sanity.io
                content={post.body}
                projectId={process.env.PROJECTID}
                dataset={process.env.DATASETS}
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
                serializers={{
                  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
                    <h1 style={{ color: "black" }} {...props} />
                  ),
                  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
                    <h2 style={{ color: "black" }} {...props} />
                  ),
                  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
                    <h3 style={{ color: "black" }} {...props} />
                  ),
                  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
                    <h4 style={{ color: "black " }} {...props} />
                  ),
                  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
                    <p style={{ color: "black " }} {...props} />
                  ),
                  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                    <a style={{ color: "blue " }} {...props} />
                  ),
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
