import { HttpStatusCode } from 'axios';
import { OrderType } from '../enums';

export interface BaseEntity<T> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: Partial<T>;
  updatedBy?: Partial<T>;
  createdById?: string;
  updatedById?: string;
}

export interface Error {
  message: string;
  statusCode: HttpStatusCode | number;
}

export interface PageOptions<T> {
  orderType?: OrderType;
  orderBy?: keyof T;
  page: number;
  take: number;
  search?: string;
  isRelations?: boolean;
  isDeleted?: boolean;
}

export interface DeleteOptional {
  soft: boolean | string;
}

export interface ResList<T> {
  total: number;
  list: T[];
}
