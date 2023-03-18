import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import os from 'os';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('🚀 ~ file: page.tsx:11 ~ Home ~ 홈페이지다:');
  console.log('🚀 ~ file: page.tsx:5 ~ os:', os.hostname());
  return <h1>홈페이지다!</h1>;
}
