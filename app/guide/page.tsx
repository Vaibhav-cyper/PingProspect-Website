"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Book, Calendar } from "lucide-react";
import { getallguides } from "../../lib/services/blog";
import { urlFor } from "../../lib/image";
import { Post } from "./guides";
import Image from 'next/image';

export default function GuideList() {
  const [ListPosts, setListPost] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const blogs = await getallguides();
      if (blogs !== null) {
        setListPost(blogs);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Book className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            PingProspect Guide
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Learn everything about automating your Facebook outreach
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ListPosts?.map((post) => (
            <Link
              key={post._id}
              href={`/guide/${post.slug.current}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* for categories  */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {post.category || "General"}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.meta_description}</p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
