import { useEffect, useState } from 'react';

export default function useRender() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient)  return null; 
  
}