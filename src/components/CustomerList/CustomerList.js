import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import CustomerListItem from "./CustomerListItem/CustomerListItem";

const CustomersList = ({ rows, onDeleteCustomer }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Nr.</TableCell>
            <TableCell align="center">Imię</TableCell>
            <TableCell align="center">Nazwisko</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Miasto</TableCell>
            <TableCell align="center">Zawód</TableCell>
            <TableCell align="center">Numer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <CustomerListItem
              key={row.key}
              customerId={row.key}
              id={row.id}
              onDeleteCustomer={onDeleteCustomer}
              firstName={row.firstName}
              lastName={row.lastName}
              email={row.email}
              city={row.city}
              occupation={row.occupation}
              number={row.number}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersList;
