import React from 'react';
import { ClientsListRow } from './ClientsListRow';

export const ClientsList = ({clients, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>CPF</th>
        <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      {clients.map(client => ClientsListRow({client, onDelete}))}
      </tbody>
    </table>
  )
};
