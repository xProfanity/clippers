export type Products = Product[]

export interface Product {
    _id: string;
    title: string;
    image: {_type: string; asset: Object};
    price: Number;
    duration: number;
}