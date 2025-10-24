declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.xlsx' {
  const value: string;
  export default value;
}

declare module '*.xls' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.ttf' {
  const value: string;
  export default value;
}

declare module '*.css' {
  const content: any;
  export default content;
}
