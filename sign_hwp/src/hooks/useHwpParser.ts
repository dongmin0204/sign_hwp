import { useEffect, useState } from 'react';
import { parseHwp } from '../lib/hwp/parseHwp';

export function useHwpParser(file: File | null) {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file || !file.name.endsWith('.hwp')) {
      setHtml(null);
      return;
    }
    setLoading(true);
    setError(null);
    file.arrayBuffer()
      .then(buffer => parseHwp(buffer))
      .then(setHtml)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [file]);

  return { html, loading, error };
} 