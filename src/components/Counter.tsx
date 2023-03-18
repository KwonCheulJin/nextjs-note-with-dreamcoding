'use client';
import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>숫자 증가 시키기</button>
    </>
  );
};
