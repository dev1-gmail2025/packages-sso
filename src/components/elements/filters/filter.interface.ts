import { FilterOperator } from './filter.enum';

export type FilterFieldType = 'select' | 'date';

export interface FilterRule {
  field: string;
  operator: FilterOperator;
  value: string;
  fromDate?: number;
  toDate?: number;
}

export interface AdvancedFilterOption {
  label: string;
  value: string;
}

export interface AdvancedOperatorFilterField {
  key: string;
  label: string;
  type: FilterFieldType;
  options?: AdvancedFilterOption[];
  defaultValue: string;
}

export type FilterRowState = {
  id: string;
  fieldKey: string;
  operator: FilterOperator;
  value: string;
};
