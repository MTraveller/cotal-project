/**
 *  After many hours researching React errors
 *  418 and 423 regarding hydration:
 *  https://reactjs.org/docs/error-decoder.html/?invariant=418&args and
 *  https://reactjs.org/docs/error-decoder.html/?invariant=423&args
 *  which is a real Gatsby issue when it comes to SSR:
 *  https://github.com/gatsbyjs/gatsby/discussions/17914
 *  So instead of re-rendering with a two-pass rendering solution,
 *  the below code returns true first when the function
 *  has been mounted which then returns the child component.
 *
 *  Thanks to https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 *  for a perfect explanation of this issue and how to fix it.
 */

import { useState, useEffect } from 'react';

export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return children;
}
