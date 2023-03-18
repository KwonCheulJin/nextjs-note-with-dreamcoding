import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};
export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} 상세 페이지!</h1>;
}
