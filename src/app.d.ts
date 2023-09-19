// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		type Products = Product[]

		interface Product {
			_id: string;
			title: string;
			image: {_type: string; asset: Object};
			price: Number;
			duration: number;
		}
	}
}

export { };

