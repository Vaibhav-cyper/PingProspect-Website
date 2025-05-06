"use client";
import { useEffect, useState } from "react";
import { useParams, redirect } from "next/navigation";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
// import PortableText from "react-portable-text";
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
            if (Postresult) {
              console.log(Postresult);
            }
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              {post.meta_description}
            </p>
            <div className="h-96 relative mb-8 ">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                height={720}
                width={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prose max-w-none">
              <PortableText
                value={
                  Array.isArray(post.body)
                    ? (post.body as import("@portabletext/types").TypedObject[])
                    : []
                }
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="my-5 text-lg leading-relaxed">{children}</p>
                    ),
                    h1: ({ children }) => (
                      <h1 className="mt-8 mb-4 text-3xl">{children}</h1>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mt-8 mb-4 text-2xl font-bold">{children}</h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="mt-8 mb-4 text-xl font-bold">{children}</h4>
                    ),
                    
                    // etc…
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
                        {children}
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc ml-6 mb-6">{children}</ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal ml-6 mb-6">{children}</ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="mb-2">{children}</li>
                    ),
                    number: ({ children }) => (
                      <li className="mb-2">{children}</li>
                    ),
                  },
                  marks: {
                    link: ({ children, value }) => (
                      <a href={value.href} className="underline text-blue-600">
                        {children}
                      </a>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
