import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'Missing value'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'Missing value';
 


// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })


export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

