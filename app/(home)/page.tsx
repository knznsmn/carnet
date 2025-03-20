import Link from 'next/link';
import SearchClient from './SearchClient';
import styles from './page.module.css';

export const metadata = {
  title: 'Deuxieme Cerveau',
};

export default function HomePage() {
  return (
    <article className={styles.page}>
      <h1>Deuxieme Cerveau</h1>
      <SearchClient />
    </article>
  );
}
