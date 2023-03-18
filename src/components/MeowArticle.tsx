'use client';
import React, { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export const MeowArticle = () => {
  const [text, setText] = useState<string>('데이터 준비중...');

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then(res => res.json())
      .then(data => setText(data.data[0]));
  }, []);
  return <article className={styles.article}>{text}</article>;
};
