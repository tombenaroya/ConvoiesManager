import React, { useState } from "react";
import ConvoyBrief from "data/convoyBrief.json";
import ConvoyRow from "components/ConvoyRow";
import useFilterConvoies from "hooks/useFilterConvoies";
import useSortConvoies from "hooks/useSortConvoies";

const ConvoyTable = ({ filterText, convoies, openConvoyDetails }) => {
  const CONVOY_BRIEF = ConvoyBrief;
  const [sortProp, setSortProp] = useState("");
  const [reverse, setReverse] = useState(false);

  const requestSort = (currSortKey, sortKey, reverse) => {
    setSortProp(sortKey);
    setReverse(sortKey !== currSortKey ? true : !reverse);
  };

  const { filterConvoiesByInput } = useFilterConvoies(CONVOY_BRIEF, filterText);
  const { sortConvoies } = useSortConvoies(sortProp, reverse);

  const compose = (f, g) => (x) => f(g(x));
  const filterSortConvoies = compose(sortConvoies, filterConvoiesByInput);
  const filteredSortedConvoies = filterSortConvoies(convoies);

  return (
    <table dir="rtl" className="table table-striped text-center table-hover table-primary">
      <thead>
        <tr>
          {CONVOY_BRIEF.map(({ displayName, realName }, index) => (
            <th key={index} onClick={() => requestSort(sortProp, realName, reverse)}>
              {displayName} {realName === sortProp ? (reverse ? "👇" : "👆") : undefined}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredSortedConvoies.map((convoy) => (
          <ConvoyRow
            onClick={() => openConvoyDetails(convoy)}
            key={convoy.id}
            convoy={convoy}
            briefs={CONVOY_BRIEF}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ConvoyTable;
