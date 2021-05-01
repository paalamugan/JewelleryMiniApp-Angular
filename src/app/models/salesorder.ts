import { Product } from "./product";

export class SalesOrder {
    id: number;
    total: number;
    product1: Array<Product>;
}