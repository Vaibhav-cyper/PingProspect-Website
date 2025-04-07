export interface Post {
    _id: string;
    Status: string;
    slug: {
      current: "from-chaos-to-clients-how-i-built-pingprospect-to-automate-facebook-outreach";
      _type: "slug";
    };
    mainImage: {
      _type: "image";
      asset: {
        _ref: "image-1bc330a1a1b481d7ede7cb284abde43f3b19ea78-1280x720-png";
        _type: "reference";
      };
    };
  
    title: string;
    body: [Object];
    meta_description: string;
    keywords: string[];
    readTime: string;
    category: string;
    category_slug: {
      current: "tips-and-tricks";
      _type: "slug";
    };
    _createdAt: string;
  }