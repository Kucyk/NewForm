import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const CustomerListItem = ({
  firstName,
  lastName,
  city,
  email,
  occupation,
  number,
  id,
  onDeleteCustomer,
  customerId
}) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">{firstName}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{city}</TableCell>
      <TableCell align="center">{occupation}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="center">
        <IconButton onClick={() => onDeleteCustomer(customerId)}>
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CustomerListItem;
