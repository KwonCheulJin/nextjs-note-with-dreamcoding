import Link from 'next/link';
import React from 'react';

const products = ['shirt', 'pants', 'skirt', 'shoes'];

export default function ProductsPage() {
  const productList = products.map(product => (
    <li key={product}>
      <Link href={`/products/${product}`}>{product}</Link>
    </li>
  ));
  return (
    <>
      <h1>제품 상세 페이지!</h1>
      <ul>{productList}</ul>
    </>
  );
}
