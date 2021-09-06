const useFilterConvoies = (briefs, filterText) => {
  const filterConvoies = filterFunction => convoies => convoies.filter(filterFunction);
  const filterByInput = (input, briefs, convoy) =>
    briefs.some(({ realName }) => convoy[realName].includes(input));

  const filterConvoiesByInput = filterConvoies(convoy => filterByInput(filterText, briefs, convoy));

  return { filterConvoiesByInput };
};

export default useFilterConvoies;
