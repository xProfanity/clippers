import { fetchProducts, fetchSpecials, fetchTestimonials } from "$lib/index.js";

export async function load() {
    const products = await fetchProducts()
    const specials = await fetchSpecials()
    const testimonials = await fetchTestimonials()

    return {
        products,
        specials,
        testimonials
    }
}