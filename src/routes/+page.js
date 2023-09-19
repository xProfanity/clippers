import { fetchProducts } from "$lib/index.js";

export async function load() {
    const blogs = await fetchProducts()

    return {
        blogs
    }
}