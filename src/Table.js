import React from 'react';
import { useState } from 'react';
import usersData from './users.json';
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';

export default function Table() {
  const [users, setUsers] = useState(usersData);
  console.log(users);

  return (
    <>
      <div>Table</div>
      <BaseTable data={users} width={500} height={400}></BaseTable>
    </>
  );
}
