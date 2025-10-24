export const objectToStyleInline = (styleObj: Record<string, any>): string => {
  return Object.entries(styleObj)
    .map(([key, value]) => `${camelToKebabCase(key)}:${value}`)
    .join(';');
};

function camelToKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
