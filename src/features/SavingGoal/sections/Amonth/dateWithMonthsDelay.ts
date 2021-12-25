import { SetStateAction } from 'react';

export function dateWithMonthsDelay(
  months: number,
  setMonthCounter: {
    (value: SetStateAction<number>): void;
    (arg0: number): void;
  }
) {
  const date = new Date();
  date.setMonth(date.getMonth() + months);

  if (date < new Date()) {
    setMonthCounter(0);
    return new Date();
  } else {
    return date;
  }
}
