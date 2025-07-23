import { initHwp } from './initHwp';

export async function parseHwp(buffer: ArrayBuffer): Promise<string> {
  const hwp = await initHwp();
  // 실제 hwp.js API에 맞게 수정 필요
  return hwp.parse(buffer); // 예: HTML string 반환
} 