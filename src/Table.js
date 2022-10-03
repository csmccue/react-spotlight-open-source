import React from 'react';
import { useState } from 'react';
import usersData from './users.json';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

export default function RTable() {
  const [users, setUsers] = useState(usersData);
  const ImageCell = ({ rowData, dataKey, ...rest }) => (
    <Cell {...rest}>
      <img src={rowData[dataKey]} width="50" />
    </Cell>
  );

  return (
    <>
      <div>Table</div>
      <div className="table">
        <Table data={users}>
          <Column width={80} sortable resizable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={80} sortable resizable>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>
          <Column width={80} sortable resizable>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="first_name" />
          </Column>
          <Column width={80} sortable resizable>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="last_name" />
          </Column>
          <Column width={80} sortable resizable>
            <HeaderCell>Image or something</HeaderCell>
            <ImageCell dataKey="image" />
          </Column>
        </Table>
      </div>
    </>
  );
}
