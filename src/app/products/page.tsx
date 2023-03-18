import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // next: { revalidate: 3 },
    // cache: 'no-store',
  });
  const data = await res.json();
  const factText = data.data[0];
  const productList = products.map(({ id, name }) => (
    <li key={id}>
      <Link href={`/products/${id}`}>{name}</Link>
    </li>
  ));
  return (
    <>
      <h1>제품 상세 페이지!</h1>
      <ul>{productList}</ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
