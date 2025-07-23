// src/lib/hwp/parseHwp.ts
export async function parseHwp(buffer: ArrayBuffer): Promise<string> {
  // @ts-ignore
  if (!window.HWP || typeof window.HWP.parse !== 'function') {
    throw new Error('hwp.js가 로드되지 않았거나 parse 함수가 없습니다.');
  }
  // @ts-ignore
  return await window.HWP.parse(buffer);
} 