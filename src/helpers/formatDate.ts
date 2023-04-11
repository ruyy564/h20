export const formatDateForInput = (s: string) => {
  const [dd, mm, yy] = s.split('.');

  return `${yy}-${mm}-${dd}`;
};

const formatDate = (s: string) => {
  const [yy, mm, dd] = s.split('-');

  return `${dd}.${mm}.${yy}`;
};

export default formatDate;
