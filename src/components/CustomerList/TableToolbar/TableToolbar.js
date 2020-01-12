import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const tableToolbarStyles = {
  iconButton: {
    // marginRight: "24px",
    // top: "50%",
    // display: "inline-block",
    // position: "relative",
    // transform: "translateY(-50%)"
  },
  deleteIcon: {
    // color: "#000"
  }
};

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
        <IconButton className={classes.iconButton} onClick={handleClick}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default withStyles(tableToolbarStyles, {
  name: "TableToolbar"
})(TableToolbar);
