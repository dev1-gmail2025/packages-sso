export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

export const extractNumberAtStartString = (string: string) => {
  if (!string) return 0;
  const match = string.match(/^\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

export const camelToKebabCase = (str: string) => {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

/**
 * Pha màu để làm nhạt màu gốc (blend với màu trắng)
 * @param color Màu HEX gốc (VD: '#008a77')
 * @param percentage Phần trăm nhạt đi (0-100)
 */
export const lightenColorTree = (color: string, percentage: number): string => {
  const amt = Math.round(2.55 * percentage);
  const R = parseInt(color.substring(1, 3), 16) + amt;
  const G = parseInt(color.substring(3, 5), 16) + amt;
  const B = parseInt(color.substring(5, 7), 16) + amt;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

export const stripHtml = (html: string): string => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || '';
};

export const truncateText = (text: string, maxLength: number = 27): string => {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
};

export const normalizeText = (text: string) => {
  const vietnameseChars = [
    {
      base: 'a',
      accents: ['á', 'à', 'ả', 'ã', 'ạ', 'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ', 'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ'],
    },
    {
      base: 'e',
      accents: ['é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ'],
    },
    { base: 'i', accents: ['í', 'ì', 'ỉ', 'ĩ', 'ị'] },
    {
      base: 'o',
      accents: ['ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ'],
    },
    {
      base: 'u',
      accents: ['ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự'],
    },
    { base: 'y', accents: ['ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ'] },
    { base: 'd', accents: ['đ'] },
  ];
  return vietnameseChars
    .reduce((text, { base, accents }) => text.replace(new RegExp(`[${accents.join('')}]`, 'g'), base), text)
    .toLowerCase();
};

export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    // kiểm tra chuỗi rỗng hoặc là chuỗi "Invalid Date"
    return trimmed === '' || trimmed.toLowerCase() === 'invalid date' || trimmed === '-';
  }
  if (Array.isArray(value) && value.length === 0) return true;
  if (value instanceof Date) {
    return isNaN(value.getTime()); // xử lý Invalid Date
  }
  if (
    typeof value === 'object' &&
    !(value instanceof Date) &&
    !(value instanceof Map) &&
    !(value instanceof Set) &&
    Object.keys(value).length === 0
  )
    return true;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  return false;
};

export const checkEmptyText = (value: any): string => {
  return isEmpty(value) ? '---' : value;
};
