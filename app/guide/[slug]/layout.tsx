import { getguide } from "../../../lib/services/blog"; // Adjust the import path as per your project structure
import { Metadata } from "next";
import { Post } from "../guides";
import { urlFor } from "../../../lib/image";

// Define props for the layout
type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

// Generate metadata dynamically based on the slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Destructure slug from params
  const post: Post = await getguide(slug);
  // Default metadata if no post is found
  if (!post) {
    return {
      title: "Guide Post Not Found | PingProspect",
      description:
        "This guide post could not be found. Explore other guides on PingProspect.",
    };
  }

  // Dynamic metadata based on fetched post data
  const title = post.title || "PingProspect Guide";
  const description =
    post.meta_description ||
    "Learn more about automating your Facebook outreach with PingProspect.";
  const keywords =
    post.keywords || "PingProspect, Facebook outreach, automation";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://pingprospect.com/guide/${slug}`, // Replace with your actual domain
      type: "article",
      images: [
        {
          url: urlFor(post.mainImage.asset._ref).url(),
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [urlFor(post.mainImage.asset._ref).url()],
    },
    robots: {
      index: true,
      follow: true,
      noarchive: false,  // Allow archiving
      nosnippet: false,
    },
  };
}

export default async function GuidePostLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  );
}
