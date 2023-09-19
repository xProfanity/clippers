import { client } from "$lib/client/sanity.js"

export async function fetchProducts() {
    const query = `*[_type == "product"]`

    const results = await client.fetch(query)

    return results
}

export async function fetchSpecials() {
    const query = `*[_type == "special"]`

    const results = await client.fetch(query)

    return results
}