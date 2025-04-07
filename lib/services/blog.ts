'use server'
import  { createClient}   from "next-sanity";


const config = {
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-08-31', 
  token : process.env.TOKEN,
  useCdn: false,
}

const client = createClient(config);

export async function getallguides() {
  const query =` *[_type == "post" && status=="Live"]`;
  const posts = await client.fetch(query);
  return posts 
};

export async function getguide(slug: string) {
  const query = `*[_type == "post" && status=="Live" && slug.current == '${slug}'][0]`;
  const post = await client.fetch(query);
  return post; 
}


