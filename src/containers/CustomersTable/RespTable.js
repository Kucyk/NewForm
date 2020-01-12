import MUIDataTable from "mui-datatables";
import React, { Fragment } from "react";
import TableToolbar from "../../components/CustomerList/TableToolbar/TableToolbar";
// import TableFooter from '../../components/CustomerList/TableFooter/TableFooter'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import { purple, amber } from "@material-ui/core/colors/";
// import { withStyles } from "@material-ui/core/styles";
import Media from "react-media";

const RespTable = ({ rows, handleDelete, classes }) => {
  let theme = null;
  theme = () =>
    createMuiTheme({
      palette: {
        // primary: purple,
        // secondary: {
        //   main: amber[500],
        //   light: amber[200],
        //   dark: amber[700]
        // },
        type: "dark"
      },
      overrides: {
        MUIDataTable: {
          root: {
            fontSize: 10,
            maxWidth: 250
          },
          paper: {
            // boxShadow: "none"
            // backgroundColor: "#424242",
            // fontSize:5
          }
        },
        MUIDataTableHeadCell: {
          root: {
            // width: '100%',
            // maxWidth: '100%',
            // padding:0,
            // margin:0,
            // backgroundColor: "#FF0000",
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
            fontSize: 7
          }
        }
      }
    });

  const columns = ["Imię", "Nazwisko", "Email", "Miasto", "Zawód", "Numer"];

  const options = {
    customToolbarSelect: selectedRows => (
      <TableToolbar
        selectedRows={selectedRows}
        rows={rows}
        handleDelete={handleDelete}
      />
    ),
    filter: true,
    // selectableRows: true,
    displayRowCheckbox: true,
    displaySelectAll: true,
    adjustForCheckbox: false,
    rowsPerPage: 6, //!!!!!!!!!!!!!!
    // filterType: "dropdown",
    // pagination:false,
    selectableRowsOnClick: false,
    disableToolbarSelect: false,
    // responsive:'', //!!!!!!!
    rowsPerPageOptions: [6], //!!!!!!!
    // selectableRows:'single',
    // selectableRowsHeader:true,
    // resizableColumns:true
    // expandableRows:true
    responsive: "scrollMaxHeight"
    // pagination:true,
    // resizableColumns: true,
    // rowsPerPage: 7,
    //isRowSelectable:false //!!!!!!!!!
    //selectableRows: 'none' //!!!!!!!!!!!
  };

  const optionsOnSmallScreen = {
    ...options,
    selectableRows: "none",
    rowsPerPageOptions: [8],
    rowsPerPage: 8
  };

  return (
    <Media
      queries={{
        xsmall: "(max-width: 425px)",
        small: "(min-width: 426px) and (max-width: 699px)",
        large: "(min-width: 700px)"
      }}
    >
      {matches => (
        <Fragment>
          {matches.xsmall && (
            <MuiThemeProvider theme={theme}>
              <MUIDataTable
                title={"Lista Uczestników"}
                data={rows}
                columns={columns}
                options={optionsOnSmallScreen}
              />
            </MuiThemeProvider>
          )}
          {matches.small && (
            <MuiThemeProvider theme={theme}>
              <MUIDataTable
              style={{fontSize:10}}
                title={"Lista Uczestników"}
                data={rows}
                columns={columns}
                options={options}
              />
            </MuiThemeProvider>
          )}
          {matches.large && (
            <MUIDataTable
              title={"Lista Uczestników"}
              data={rows}
              columns={columns}
              options={options}
            />
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default RespTable;
