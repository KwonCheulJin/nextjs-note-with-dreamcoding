import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

export default async function ProductsPage() {
  const products = await getProducts();
  const productList = products.map(({ id, name }) => (
    <li key={id}>
      <Link href={`/products/${id}`}>{name}</Link>
    </li>
  ));
  return (
    <>
      <h1>제품 상세 페이지!</h1>
      <ul>{productList}</ul>
    </>
  );
}
