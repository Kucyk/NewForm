import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";

const TableToolbar = ({ rows, selectedRows, classes, handleDelete }) => {
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
    <div className={"custom-toolbar-select"}>
      <Tooltip title={"Delete"}>
        <IconButton onClick={handleClick}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TableToolbar;
