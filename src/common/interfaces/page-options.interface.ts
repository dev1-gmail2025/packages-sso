import { OrderType } from '../enums/order-type.enum';

export interface PageOptionsDto {
  orderType?: OrderType;
  orderBy?: string | 'createdAt';
  page: number;
  take: number;
  search?: string;
}
