declare module 'hwp.js' {
  export function init(opts: { locateFile: (f: string) => string }): Promise<any>;
} 