import React from "react";
import ContentView from "./ContentView";

export default function ItemDetails({ item, onClick }) {
  const prop = Object.keys(item).map((property) => {
    return (
      <li className="list-group-item" key={property}>
        {property}
      </li>
    );
  });

  return (
    <div className="p-3 mb-2 text-dark" style={{ marginTop:'10px' }}>
      <>
        <button onClick={onClick} className="btn btn-primary me-1">
          &#10550;
        </button>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={item.avatar_url}
            className="card-img-top"
            alt={item.login}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" , color:'#000000' }}>
              {item.login}
            </h5>
          </div>
        </div>
        <div className="list-group" style={{opacity: '0.5'}}>
          {Object.keys(item).map((key, i) => (
            <div
              className="list-group-item list-group-item-action"
              key={i}
              style={{ minWidth: "300px", marginBottom: "10px" }}
            >
              <div className="row">
                <div className="col-md-4">{key}</div>
                <div className="col-md-8"><ContentView text={item[key]} /></div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onClick} className="btn btn-primary me-1" style={{marginTop:'10px'}}>
          Back
        </button>
      </>
    </div>
  );
}
