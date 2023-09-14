import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

const CrudTable = ({
  headers,
  tableData,
  createCallback,
  editCallback,
  deleteCallback,
}) => {
  useEffect(() => {
    console.log(tableData);
  }, []);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "613px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((heading, index) => (
                <TableCell> {heading} </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(tableData).map((rowKey, index) => (
              <TableRow hover role="checkbox" tabIndex={-1}>
                {tableData[rowKey].map((col, index) => (
                  <TableCell>{col}</TableCell>
                ))}
                <TableCell>
                  <Button onClick={() => editCallback(rowKey)}> Edit </Button>
                  <Button onClick={() => deleteCallback(rowKey)}>
                    {" "}
                    Delete{" "}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CrudTable;
