import MUIDataTable from "mui-datatables";
import React, { Fragment } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TableToolbar from "./TableToolbar/TableToolbar";
import PropTypes from "prop-types";

const CustomersList = ({ rows, handleDelete }) => {
  let theme = null;
  theme = () =>
    createMuiTheme({
      palette: {
        type: "dark"
      },
      overrides: {
        MUIDataTable: {
          root: {
            fontSize: 10,
            maxWidth: 250
          }
        },
        MUIDataTableHeadCell: {
          root: {
            fontSize: 8,
            padding: "10px 5px",
            textAlign: "center"
          }
        },
        MUIDataTableCell: {
          root: {
            width: 30,
            height: 30,
            color: "red"
          }
        },
        MUIDataTableBodyRow: {
          root: {
            padding: 100
          }
        },
        MUIDataTableBody: {
          root: {
            fontSize: 6,
            padding: 100
          }
        },
        MUIDataTableBodyCell: {
          root: {
            padding: "15px 7px 15px 7px",
            fontSize: 6
          }
        }
      }
    });

  const columns = ["Imię", "Nazwisko", "Email", "Miasto", "Numer"];

  const options = {
    customToolbarSelect: selectedRows => (
      <TableToolbar
        selectedRows={selectedRows}
        rows={rows}
        handleDelete={handleDelete}
      />
    ),
    filter: true,
    displayRowCheckbox: true,
    displaySelectAll: true,
    adjustForCheckbox: false,
    rowsPerPage: 6,
    selectableRowsOnClick: false,
    disableToolbarSelect: false,
    rowsPerPageOptions: [6],
    responsive: "scrollMaxHeight"
  };

  const optionsOnSmallScreen = {
    ...options,
    selectableRows: "none",
    rowsPerPageOptions: [8],
    rowsPerPage: 8
  };

  const xsmall = useMediaQuery("(max-width:374px)");
  const small = useMediaQuery("(min-width: 375px) and (max-width: 699px)");
  const large = useMediaQuery("(min-width:700px)");
  return (
    <Fragment>
      {xsmall && (
        <MuiThemeProvider theme={theme}>
          <MUIDataTable
            title={"Lista Uczestników"}
            data={rows}
            columns={columns}
            options={optionsOnSmallScreen}
          />
        </MuiThemeProvider>
      )}
      {small && (
        <MuiThemeProvider theme={theme}>
          <MUIDataTable
            title={"Lista Uczestników"}
            data={rows}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      )}
      {large && (
        <MUIDataTable
          title={"Lista Uczestników"}
          data={rows}
          columns={columns}
          options={options}
        />
      )}
    </Fragment>
  );
};

CustomersList.propTypes = {
  rows: PropTypes.array,
  handleDelete: PropTypes.func
};

export default CustomersList;
