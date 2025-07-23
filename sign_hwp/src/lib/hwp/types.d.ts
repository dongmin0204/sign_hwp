declare module 'hwp.js' {
  export const ready: Promise<void>;
  export function parse(buffer: ArrayBuffer): string;
}