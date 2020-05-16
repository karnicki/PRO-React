import React from "react";
import PropTypes from "prop-types";

export default function TableHeader({ columnsNames }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c}>{c}</th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
