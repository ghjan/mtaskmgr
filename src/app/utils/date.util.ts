import {isValid, differenceInYears, parse, format, isFuture, isDate} from 'date-fns';
export const isValidDate = (dateStr: string) => {
  const date = parse(dateStr);
  return isDate(date)
    && isValid(date)
    && !isFuture(date)
    && differenceInYears(Date.now(), date) < 150;
};

export const convertToDate = (date: Date) => {
  return format(date, 'YYYY-MM-DD');
};
