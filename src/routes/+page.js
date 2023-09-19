import { createClient } from '@sanity/client'
import imgUrlBuilder from '@sanity/image-url'

import { SECRET_SANITY_PROJECT_ID, SECRET_SANITY_TOKEN } from '$env/static/private'

const client = createClient({
    projectId: SECRET_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-09-19",
    useCdn: false,
    token: SECRET_SANITY_TOKEN
})

const builder = imgUrlBuilder(client)

const urlFor = (source) => builder.image(source);

export {
    client, urlFor
}
