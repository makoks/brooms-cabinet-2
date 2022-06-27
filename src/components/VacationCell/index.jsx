import React from 'react';
import { getDateObject } from '../../utils/helpers';
import './styles.css';

export const VacationCell = ({ dateString, vacationDays, setVacationDays, disabled }) => {
  const cellText = vacationDays.includes(dateString) ? vacationDays.indexOf(dateString) + 1 : null;

  const onClickHandler = () => {
    if (vacationDays.includes(dateString)) {
      setVacationDays(vacationDays.filter(day => day !== dateString));
    } else {
      setVacationDays(vacationDays.concat(dateString).sort((a, b) => getDateObject(a) - getDateObject(b)));
    }
  };

  if (disabled) {
    return cellText ? <span className="vacation-cell vacation-cell_disabled">{cellText}</span> : '';
  }
  return (
    <span
      className={`vacation-cell${cellText ? ' vacation-cell_active' : ''}`}
      onClick={onClickHandler}
    >
      {cellText ?? '.'}
    </span>
  );
};
