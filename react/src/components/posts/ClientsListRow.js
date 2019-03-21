import React from 'react';
import { Link } from 'react-router';

export const ClientsListRow = ({client, onDelete}) => {
  return (
    <tr key={client.id}>
      <td>{client.name}</td>
      <td>{client.cpf}</td>
      <td>{client.email}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/posts/${client.id}`} className="btn btn-primary">Editar</Link>
          <a onClick={onDelete.bind(this, client)} className="btn btn-danger">Excluir</a>
        </div>
      </td>
    </tr>
  )
};
