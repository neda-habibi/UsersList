import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <tr onClick={onClick} data-bs-toggle="tooltip" data-bs-placement="right" title="click to view details">
        <td style={{width:'80%'}}>{item.login}</td>
        <td>
        <img
          className="img-thumbnail"
          style={{ width: "60px", height: "60px" }}
          src={item.avatar_url}
          alt='avatar'
        />
        </td>
    </tr>
  );
}
