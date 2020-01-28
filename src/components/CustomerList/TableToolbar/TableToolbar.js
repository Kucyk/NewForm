import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const TableToolbar = ({ selectedRows, handleClick }) => (
  <div data-test="tableToolbarComponent" className={"custom-toolbar-select"}>
    <Tooltip title={"Delete"}>
      <IconButton onClick={() => handleClick(selectedRows)}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </div>
);

TableToolbar.propTypes = {
  handleClick: PropTypes.func,
  selectedRows: PropTypes.shape({
    lookup: PropTypes.shape({
      2: PropTypes.bool
    }),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        dataIndex: PropTypes.number
      })
    )
  })
};

export default TableToolbar;
