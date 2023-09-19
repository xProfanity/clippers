import { client } from "$lib/client/sanity.js"

export async function fetchProducts() {
    const query = `*[_type == "product"]`

    const results = await client.fetch(query)

    return results
}