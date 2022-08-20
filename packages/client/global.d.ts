import type { AttributifyAttributes } from '@unocss/preset-attributify';

interface Window {
  // drawio 绘图
  GraphViewer: any;
  // 百度脑图
  kityminder: any;
}
declare module 'react' {
  type HTMLAttributes<T> = AttributifyAttributes;
}
