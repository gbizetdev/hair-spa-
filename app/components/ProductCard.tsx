import { Product } from "@/types/product";

type Props = {
  product: Product
};

export default function ProductCard({ product } : Props) {
  return (
    <a href="#" role="listitem">
      <article>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </article>
    </a>
  )
}