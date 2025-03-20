import type { ReactNode } from 'react';
import HomeLayout from './homelayout';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}