'use client';

import { useState } from 'react';
import Search from 'fumadocs-ui/components/dialog/search-default';

export default function SearchClient() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <button onClick={() => setOpen(true)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <div>⌘ K</div>
      </button>
      <Search open={open} onOpenChange={setOpen} />
    </section>
  );
}