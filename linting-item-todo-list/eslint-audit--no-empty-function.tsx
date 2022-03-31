// eg src/pages/about/about.tsx
import React, { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.info('do somthing after rendering');
    return () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
  }, []);

  return <div>foo</div>;
};

export default Component;
