import * as HWP from 'hwp.js';

export const initHwp = () =>
  HWP.init({
    locateFile: (f: string) => `/hwp-wasm/${f}`,
  }); 