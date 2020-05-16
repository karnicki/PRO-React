import React from "react";
import PropTypes from "prop-types";

export default function TableHeader({ columnsNames, setSelectedHeader }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th onClick={() => setSelectedHeader(c)} key={c}>
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedHeader: PropTypes.func.isRequired,
};
