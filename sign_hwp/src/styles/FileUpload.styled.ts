import styled from 'styled-components';

export const UploadContainer = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 18px;
  max-width: 420px;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(60, 60, 120, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #646cff;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 0.5rem;
  &:hover {
    background: #4b53c0;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileName = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const PreviewWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 180px;
  border-radius: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(100, 108, 255, 0.08);
`;

export const UploadButton = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  border: none;
  background: #222;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(100, 108, 255, 0.08);
  &:hover:enabled {
    background: #646cff;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`; 