import { getProducts } from '@/service/products';
import { getProduct } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react';

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
    notFound();
  }
  return <h1>{product.name} 상세 페이지!</h1>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id,
  }));
}
