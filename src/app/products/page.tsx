import { MeowArticle } from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clothesImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

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
      <Image
        src={clothesImage}
        alt="Clothes"
        priority
      />
      <ul>{productList}</ul>
      <MeowArticle />
    </>
  );
}
