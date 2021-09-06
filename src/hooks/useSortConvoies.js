const useSortConvoies = (sortKey, reverse) => {
  const sort = sortFunction => convoies => [...convoies].sort(sortFunction);

  const sortBy = (key, reverse) => (current, next) => {
    if (current[key] < next[key]) {
      return reverse ? -1 : 1;
    }

    if (current[key] > next[key]) {
      return !reverse ? 1 : -1;
    }

    return 0;
  };

  const sortConvoies = sort(sortBy(sortKey, reverse));

  return { sortConvoies };
};

export default useSortConvoies;
