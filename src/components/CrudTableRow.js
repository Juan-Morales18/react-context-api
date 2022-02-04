import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

function CrudTableRow({ dataRow }) {
  const { setDataToEdit, deleteData } = useContext(CrudContext);

  let { name, constellation, id } = dataRow;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(dataRow)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default CrudTableRow;
