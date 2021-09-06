const useFormatConvoies = () => {
  const mapConvoies = formatFunction => convoies => convoies.map(formatFunction);
  const formatDate = convoy => ({
    ...convoy,
    startDate: new Date(Number(convoy.startDate)).toLocaleString(),
    finishDate: new Date(Number(convoy.finishDate)).toLocaleString()
  });

  const formatConvoiesDate = mapConvoies(formatDate);

  return {
    formatConvoiesDate
  };
};

export default useFormatConvoies;
