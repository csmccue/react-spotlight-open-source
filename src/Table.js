import React from 'react';
import { useState } from 'react';
import usersData from './users.json';

export default function Table() {
  const [users, setUsers] = useState(usersData);
  console.log(users);
  return (
    <div>Table</div>
  );
}
