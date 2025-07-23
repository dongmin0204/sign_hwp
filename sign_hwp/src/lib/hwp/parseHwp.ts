// src/lib/hwp/parseHwp.ts
import * as HWP from 'hwp.js';

let readyPromise: Promise<void> | null = null;

export async function parseHwp(buffer: ArrayBuffer): Promise<string> {
  // hwp.js 모듈 초기화 대기
  if (!readyPromise) {
    // @ts-ignore - hwp.js는 ready 프로퍼티를 제공
    readyPromise = HWP.ready instanceof Promise ? HWP.ready : Promise.resolve();
  }
  await readyPromise;

  if (typeof (HWP as any).parse !== 'function') {
    throw new Error('hwp.js parse 함수를 찾을 수 없습니다.');
  }

  // @ts-ignore - parse 반환값은 문자열
  return HWP.parse(buffer);
}