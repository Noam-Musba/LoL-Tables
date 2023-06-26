import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns.js";
import LCK_TABLE_DATA from "./LCK_TABLE_DATA.json";
import LPL_TABLE_DATA from "./LPL_TABLE_DATA.json";
import "./table.css";

function LckMainTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => LCK_TABLE_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
    initialState: {
      sortBy: [
        {
          id: "standing",
          desc: false,
        },
      ],
    },
  }, useSortBy);


  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup)=>(
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column)=>(
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : " —"}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return(
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>  
  );
}

export default LckMainTable;
