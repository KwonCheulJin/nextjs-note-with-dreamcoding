import GoProductsButton from '@/components/GoProductsButton';
import { getProducts } from '@/service/products';
import { getProduct } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품의 이름: ${slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }
  return (
    <>
      <h1>{product.name} 상세 페이지!</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.image}
        width={300}
        height={300}
      />
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id,
  }));
}
