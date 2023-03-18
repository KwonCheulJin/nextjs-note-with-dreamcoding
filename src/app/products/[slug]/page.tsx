import { getProducts } from '@/service/products';
import { getProduct } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default function ItemPage({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }
  return <h1>{product} 상세 페이지!</h1>;
}

export function generateStaticParams() {
  const products = getProducts();
  return products.map(product => ({
    slug: product,
  }));
}
