import React from 'react';
import { useState } from 'react';
import usersData from './users.json';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';

export default function RTable() {
  const [users, setUsers] = useState(usersData);
  console.log(users);



  return (
    <>
      <div>Table</div>
      <Table data={users}>
        <Column width={80} sortable fixed resizable>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKe="id" />
        </Column>
      </Table>
    </>
  );
}
