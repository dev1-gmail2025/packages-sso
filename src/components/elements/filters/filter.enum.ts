export const FIELD_WIDTH = '180px';
export const OPERATOR_WIDTH = '140px';
export const VALUE_WIDTH = '250px';

export enum FilterOperator {
  Equals = 'Equals',
  NotEquals = 'NotEquals',
  Contains = 'Contains',
  NotContains = 'NotContains',
  IsNull = 'IsNull',
  IsNotNull = 'IsNotNull',
  GreaterThan = 'GreaterThan',
  LessThan = 'LessThan',
  GreaterThanOrEqual = 'GreaterThanOrEqual',
  LessThanOrEqual = 'LessThanOrEqual',
}

export enum DateFilterMacro {
  EXACT = 'EXACT',
  DATE_RANGE = 'DATE_RANGE',
  TODAY = 'TODAY',
  TOMORROW = 'TOMORROW',
  YESTERDAY = 'YESTERDAY',
  THIS_WEEK = 'THIS_WEEK',
  LAST_WEEK = 'LAST_WEEK',
  THIS_MONTH = 'THIS_MONTH',
  LAST_MONTH = 'LAST_MONTH',
  LAST_7_DAYS = 'LAST_7_DAYS',
  NEXT_7_DAYS = 'NEXT_7_DAYS',
  LAST_30_DAYS = 'LAST_30_DAYS',
  NEXT_30_DAYS = 'NEXT_30_DAYS',
}

export const FULL_OPERATOR_OPTIONS = [
  { label: 'Là', value: FilterOperator.Equals },
  { label: 'Không là', value: FilterOperator.NotEquals },
  { label: 'Chứa', value: FilterOperator.Contains },
  { label: 'Không chứa', value: FilterOperator.NotContains },
  { label: 'Lớn hơn', value: FilterOperator.GreaterThan },
  { label: 'Lớn hơn hoặc bằng', value: FilterOperator.GreaterThanOrEqual },
  { label: 'Nhỏ hơn', value: FilterOperator.LessThan },
  { label: 'Nhỏ hơn hoặc bằng', value: FilterOperator.LessThanOrEqual },
  { label: 'Trống', value: FilterOperator.IsNull },
  { label: 'Không trống', value: FilterOperator.IsNotNull },
];

export const OPERATOR_OPTIONS = [
  { label: 'Là', value: FilterOperator.Equals },
  { label: 'Không là', value: FilterOperator.NotEquals },
  { label: 'Chứa', value: FilterOperator.Contains },
  { label: 'Không chứa', value: FilterOperator.NotContains },
  { label: 'Trống', value: FilterOperator.IsNull },
  { label: 'Không trống', value: FilterOperator.IsNotNull },
];

export const DATE_OPERATOR_OPTIONS = [
  { label: 'Là', value: FilterOperator.Equals },
  { label: 'Trống', value: FilterOperator.IsNull },
  { label: 'Không trống', value: FilterOperator.IsNotNull },
];

export const DATE_OPTIONS = [
  { label: 'ngày chính xác', value: DateFilterMacro.EXACT },
  { label: 'khoảng ngày', value: DateFilterMacro.DATE_RANGE },
  { label: 'hôm nay', value: DateFilterMacro.TODAY },
  { label: 'ngày mai', value: DateFilterMacro.TOMORROW },
  { label: 'hôm qua', value: DateFilterMacro.YESTERDAY },
  { label: 'tuần này', value: DateFilterMacro.THIS_WEEK },
  { label: 'tuần trước', value: DateFilterMacro.LAST_WEEK },
  { label: 'tháng này', value: DateFilterMacro.THIS_MONTH },
  { label: 'tháng trước', value: DateFilterMacro.LAST_MONTH },
  { label: 'trong 7 ngày qua', value: DateFilterMacro.LAST_7_DAYS },
  { label: 'trong 7 ngày tiếp theo', value: DateFilterMacro.NEXT_7_DAYS },
  { label: 'trong 30 ngày qua', value: DateFilterMacro.LAST_30_DAYS },
  { label: 'trong 30 ngày tiếp theo', value: DateFilterMacro.NEXT_30_DAYS },
];
