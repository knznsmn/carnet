import type { ReactNode } from 'react';
import styles from './homelayout.module.css';

interface CustomHomeLayoutProps {
  children: ReactNode;
}

export default function CustomHomeLayout({ children }: CustomHomeLayoutProps) {
  return (
      <main className={styles.main}>{children}</main>
  );
}