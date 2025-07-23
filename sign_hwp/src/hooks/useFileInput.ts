import { useState } from 'react';

export function useFileInput() {
  const [file, setFile] = useState<File | null>(null);
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };
  const reset = () => setFile(null);
  return { file, onFileChange, reset };
} 