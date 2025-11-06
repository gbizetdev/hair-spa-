import { Product } from '@/types/product';
import fs from 'fs';
import path from 'path';
import ProductList from '../components/ProductList';

export default async function ProductsPage() {
  let products: Product[] = [];
  const file = path.join(process.cwd(), 'data', 'products.json');

  try {
    const raw = await fs.promises.readFile(file, 'utf-8');
    products = JSON.parse(raw);
  } catch(err) {
    console.log('impossible de lire products.json', err);
  }
  
  return (
    <main>
      <ProductList products={products} />
    </main>
  )
}