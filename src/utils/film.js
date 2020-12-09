import dayjs from "dayjs";

export const humanizeFilmCardDate = (dueDate) => {
  return dayjs(dueDate).format(`YYYY`);
};
export const humanizeDatePopup = (dueDate) => {
  return dayjs(dueDate).format(`DD MMMM YYYY`);
};

