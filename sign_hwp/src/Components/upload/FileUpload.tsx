import React from 'react';
import { useFileInput } from '../../hooks/useFileInput';
import { useHwpParser } from '../../hooks/useHwpParser';
import HwpPreview from '../preview/HwpPreview';

const FileUpload: React.FC = () => {
  const { file, onFileChange, reset } = useFileInput();
  const { html, loading, error } = useHwpParser(file);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 32 }}>
      <input type="file" accept=".hwp" onChange={onFileChange} />
      <button onClick={reset} style={{ marginLeft: 8 }}>초기화</button>
      {file && <div style={{ marginTop: 8 }}>파일명: {file.name}</div>}
      <HwpPreview html={html} loading={loading} error={error} />
    </div>
  );
};

export default FileUpload; 