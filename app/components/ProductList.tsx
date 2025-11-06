import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[]
};

export default function ProductList({ products } : Props) {
  return (
    <section aria-label="Liste des produits">
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </section>
  )
}