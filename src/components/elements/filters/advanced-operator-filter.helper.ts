import dayjs from 'dayjs';
import { DateFilterMacro } from './filter.enum';

export const generateId = () => {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substring(2, 9);
};

export const parseDateMacroToTimestamp = (macroStr: string): { fromDate?: number; toDate?: number } => {
  if (!macroStr) return {};
  const now = dayjs().startOf('day');
  const parts = macroStr.split('|');
  const macro = parts[0];
  let start: dayjs.Dayjs = now,
    end: dayjs.Dayjs = now;

  if (macro === DateFilterMacro.EXACT) {
    const exactDate = parts[1];
    if (exactDate) {
      const startExactDate = dayjs(exactDate).startOf('day');
      const endExactDate = dayjs(exactDate).endOf('day');
      return { fromDate: startExactDate.unix(), toDate: endExactDate.unix() };
    }
    return {};
  }

  if (macro === DateFilterMacro.DATE_RANGE) {
    const fromStr = parts[1];
    const toStr = parts[2];
    const fromDate = fromStr ? dayjs(fromStr).startOf('day').unix() : undefined;
    const toDate = toStr ? dayjs(toStr).endOf('day').unix() : undefined;
    return { fromDate, toDate };
  }

  switch (macro) {
    case DateFilterMacro.TODAY:
      start = now.startOf('day');
      end = now.endOf('day');
      break;
    case DateFilterMacro.TOMORROW:
      start = now.add(1, 'day').startOf('day');
      end = now.add(1, 'day').endOf('day');
      break;
    case DateFilterMacro.YESTERDAY:
      start = now.subtract(1, 'day').startOf('day');
      end = now.subtract(1, 'day').endOf('day');
      break;
    case DateFilterMacro.THIS_WEEK: {
      const diff = (7 + (now.day() - 1)) % 7;
      start = now.subtract(diff, 'day');
      end = start.add(6, 'day').endOf('day');
      break;
    }
    case DateFilterMacro.LAST_WEEK: {
      const diff = (7 + (now.day() - 1)) % 7;
      start = now.subtract(diff, 'day').subtract(7, 'day');
      end = start.add(6, 'day').endOf('day');
      break;
    }
    case DateFilterMacro.THIS_MONTH:
      start = now.startOf('month');
      end = now.endOf('month');
      break;
    case DateFilterMacro.LAST_MONTH:
      start = now.subtract(1, 'month').startOf('month');
      end = now.subtract(1, 'month').endOf('month');
      break;
    case DateFilterMacro.LAST_7_DAYS:
      start = now.subtract(7, 'day');
      end = now.endOf('day');
      break;
    case DateFilterMacro.NEXT_7_DAYS:
      start = now;
      end = now.add(7, 'day').endOf('day');
      break;
    case DateFilterMacro.LAST_30_DAYS:
      start = now.subtract(30, 'day');
      end = now.endOf('day');
      break;
    case DateFilterMacro.NEXT_30_DAYS:
      start = now;
      end = now.add(30, 'day').endOf('day');
      break;
    default:
      return {};
  }
  return { fromDate: start.unix(), toDate: end.unix() };
};
