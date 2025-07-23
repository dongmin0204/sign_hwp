import React from 'react';

interface Props {
  html: string | null;
  loading: boolean;
  error: string | null;
}

const HwpPreview: React.FC<Props> = ({ html, loading, error }) => {
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div style={{ color: 'red' }}>에러: {error}</div>;
  if (!html) return <div>미리보기 없음</div>;
  return (
    <div
      style={{ border: '1px solid #eee', padding: 16, marginTop: 16, background: '#fafafa' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default HwpPreview; 