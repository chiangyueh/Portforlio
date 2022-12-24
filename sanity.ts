import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

import  NextConfig  from './next.config';
export const config = {
    dataset: NextConfig.env?.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: NextConfig.env?.NEXT_PUBLIC_SANITY_PROJECT_ID || "z98okija",
    apiVersion : "2022-11-16",
    useCdn : process.env.NODE_ENV === "production"
}
export const sanityClient = createClient(config);
export const urlFor = (source:any) => createImageUrlBuilder(config).image(source)