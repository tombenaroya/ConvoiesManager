import React from "react";

const ConvoyRow = ({ convoy, briefs, onClick }) => {
  return (
    <tr onClick={onClick}>
      {briefs.map(({ realName }, index) => (
        <td key={index}>{convoy[realName]}</td>
      ))}
    </tr>
  );
};

export default ConvoyRow;
