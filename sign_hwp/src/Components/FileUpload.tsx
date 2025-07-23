import React from 'react';
import { useFileInput } from '../hooks/useFileInput';
import { useHwpParser } from '../hooks/useHwpParser';
import HwpPreview from './preview/HwpPreview';
import { PreviewWrapper, PreviewImage } from '../styles/FileUpload.styled';

const FileUpload: React.FC = () => {
  const { file, onFileChange, reset } = useFileInput();
  const { html, loading, error } = useHwpParser(file);
  const previewUrl = file && file.type.startsWith('image/') ? URL.createObjectURL(file) : null;

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 32 }}>
      <input type="file" accept=".hwp,image/*" onChange={onFileChange} />
      <button onClick={reset} style={{ marginLeft: 8 }}>초기화</button>
      {file && <div style={{ marginTop: 8 }}>파일명: {file.name}</div>}
      {/* 이미지 미리보기 */}
      {file && file.type.startsWith('image/') && previewUrl && (
        <PreviewWrapper>
          <PreviewImage src={previewUrl} alt="preview" />
        </PreviewWrapper>
      )}
      {/* HWP 미리보기 */}
      {file && file.name.endsWith('.hwp') && (
        <HwpPreview html={html} loading={loading} error={error} />
      )}
    </div>
  );
};

export default FileUpload; 