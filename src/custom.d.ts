// TODO:  언제 생겼는지, 어떤거랑 연관 있는지 파악하기

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
