import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <li className="list-group-item list-group-item-action">
      <div className="row align-items-start" onClick={onClick}>
        <div className="col">{item.login}</div>
        <img
          className="col"
          className="img-thumbnail"
          style={{ width: "60px", height: "60px" }}
          src={item.avatar_url}
        />
      </div>
    </li>
  );
}
