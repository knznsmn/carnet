import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '../components/Layout';
import SearchBar from '@theme/SearchBar';
import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      noFooter
      title={`Brain on the Cloud | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.page}>
        <h1>Deuxieme Cerveau</h1>
        Notes and Giggles
      </main>
    </Layout>
  );
}
