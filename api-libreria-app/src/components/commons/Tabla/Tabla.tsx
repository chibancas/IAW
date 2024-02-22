import React, { FC } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import ColumnLibro, { IColumn, ILibro } from "@/interfaces/ILibros";


interface Props {
    rows: ILibro[],
    columns: IColumn[],
    key:string
}

export const Tabla:FC<Props> = ({rows, columns,key}) => {
  const renderCell = React.useCallback (( libro: ILibro,  columnKey: React.Key) => {
    console.log(rows)
  },[]);
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.isbn}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
export default Tabla