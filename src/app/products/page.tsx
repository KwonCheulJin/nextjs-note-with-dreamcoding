import { Product, getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

export default async function ProductsPage() {
  const products = await getProducts();
  const productList = products.map(product => (
    <li key={product.id}>
      <Link href={`/products/${product.id}`}>{product.name}</Link>
    </li>
  ));
  return (
    <>
      <h1>제품 상세 페이지!</h1>
      <ul>{productList}</ul>
    </>
  );
}
