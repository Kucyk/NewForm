import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";

import PropTypes from "prop-types";

const TableToolbar = ({ rows, selectedRows, handleDelete }) => {
  const handleClick = () => {
    let itemsIndexes;
    let ids;

    itemsIndexes = selectedRows.data.map(item => {
      return item.index;
    });
    ids = itemsIndexes.map(index => rows[index][6]);

    handleDelete(ids);
  };

  return (
    <div data-test='tableToolbarComponent' className={"custom-toolbar-select"}>
      <Tooltip title={"Delete"}>
        <IconButton onClick={handleClick}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </div>
  );
};

TableToolbar.propTypes={
  rows: PropTypes.array,
  handleDelete: PropTypes.func,
  selectedRows:PropTypes.object
}


export default TableToolbar;
