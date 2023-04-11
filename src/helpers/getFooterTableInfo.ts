type Props = {
  count: number;
  limit: number;
  currentPage: number;
  setLimit: (limit: number) => void;
};

const getFooterTableInfo = ({ count, currentPage, limit, setLimit }: Props) => {
  const countPage = Math.ceil(count / limit);
  const deltaCount = count - (countPage - 1) * limit;
  const startShowCount = (currentPage + 1) * limit - limit + 1;

  const endShowCount =
    currentPage + 1 === countPage
      ? startShowCount + deltaCount - 1
      : startShowCount + limit - 1;

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  return { countPage, deltaCount, startShowCount, endShowCount, selectHandler };
};

export default getFooterTableInfo;
