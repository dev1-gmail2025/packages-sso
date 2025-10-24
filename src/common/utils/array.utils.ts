import { getKeyValuesFromObject } from './object.utils';

export const checkArraysMatching = (smallArray: any[], bigArray: any[]): boolean => {
  if (!smallArray.length) return false;

  const smallArrayKeys = Object.keys(smallArray[0]);

  const smallArrayObj = smallArray.reduce((r, e) => {
    const key = getKeyValuesFromObject(e, smallArrayKeys);
    r[key] = true;
    return r;
  }, {});

  const bigArrayObj = bigArray.reduce((r, e) => {
    const key = getKeyValuesFromObject(e, smallArrayKeys);
    r[key] = true;
    return r;
  }, {});

  for (const e of Object.keys(smallArrayObj)) if (!bigArrayObj[e]) return false;

  for (const e of Object.keys(bigArrayObj)) if (!smallArrayObj[e]) return false;

  return true;
};

export const mapOrder = (originalArray: any[], orderArray: any[], key: string) => {
  if (!originalArray || !orderArray || !key) return [];

  const clonedArray = [...originalArray];
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
  });

  return orderedArray;
};
