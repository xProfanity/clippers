import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_TOKEN } from '$env/static/public';
import { createClient } from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';


const client = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-09-19",
    useCdn: false,
    token: PUBLIC_SANITY_TOKEN
})

const builder = imgUrlBuilder(client)

const urlFor = (/** @type {import("@sanity/image-url/lib/types/types.js").SanityImageSource} */ source) => builder.image(source);

export {
    client, urlFor
};

