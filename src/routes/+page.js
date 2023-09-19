import { fetchProducts, fetchSpecials } from "$lib/index.js";

export async function load() {
    const products = await fetchProducts()
    const specials = await fetchSpecials()

    return {
        products,
        specials
    }
}