import dayjs from 'dayjs';

const getDate = (date: number, template = 'MMM DD, YYYY') => {
  const checkedDate = dayjs(date).isValid() ? date : Date.now();
  const dateInstance = dayjs(checkedDate);

  if (dateInstance.year() === 1970) {
    date *= 1000;
  }

  return dayjs(date).format(template);
};

export default getDate;
