import type { MetadataRoute } from "next";
import { getallguides } from "../lib/services/blog";
import { Post } from "./guide/guides";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pingprospect.com";
  const response = await getallguides();
  const guides = response.map((guideposts:Post) => {
    return {
      url: `${baseUrl}/guide/${guideposts.slug.current}`,
      lastModified: guideposts._createdAt,
    };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
      videos: [
        {
          title: "PingProspect Introduction and Set it up ",
          thumbnail_loc: "https://pingprospect.com/VideoThumbnail.png",
          description:
            "In this video you can see the Introduction of PingProspect and how you can set it up for your outreach",
        },
      ],
      images: [
        "https://pingprospect.com/hero-stock1.webp",
        "https://pingprospect.com/productive.webp",
        "https://pingprospect.com/reach.webp",
        "https://pingprospect.com/conversation.webp",
      ],
    },
    {
      url: "https://pingprospect.com/download",
      lastModified: new Date(),
      priority: 0.8,
      images: [
        "https://pingprospect.com/hero-stock1.webp",
        "https://pingprospect.com/productive.webp",
        "https://pingprospect.com/reach.webp",
        "https://pingprospect.com/conversation.webp",
      ],
    },
    {
      url: "https://pingprospect.com/features",
      lastModified: new Date(),
      priority: 0.5,
      images: [
        "https://pingprospect.com/data-import.webp",
        "https://pingprospect.com/reach-more-people.webp",
        "https://pingprospect.com/human-interaction.webp",
        "https://pingprospect.com/error-recovery.webp",
      ],
    },
    {
      url: "https://pingprospect.com/pricing",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://pingprospect.com/contact",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://pingprospect.com/privacy",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://pingprospect.com/terms",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://pingprospect.com/guide",
      lastModified: new Date(),
      priority: 0.8,
    },
    ...guides
  ];
}
