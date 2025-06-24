'use client';
import { MainLayout } from '@/components/MainLayout';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Content } from '@/components/Content';

export default function Main() {
  return (
    <MainLayout>
      <Header />
      <Content />
      <Footer />
    </MainLayout>
  );
}