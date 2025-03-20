import { RootProvider } from 'fumadocs-ui/provider';
import 'fumadocs-ui/style.css';
import '../styles/globals.css';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
