import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import ItemDetails from "./ItemDetails";
import Pagination from "./Pagination";

const List = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 7;
  const totalSize = 10000;
  const pageCount = Math.ceil(totalSize / pageSize);

  useEffect(() => {
    let offset = (currentPage - 1) * 10 + 1;
    fetch(`https://api.github.com/users?since=${offset}&per_page=${7}`)
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setLoading(false);
      });
  }, [currentPage]);

  const list = items.map((item, i) => {
    return (
      <ListItem
        item={item}
        key={item.id}
        onClick={() => setSelectedUser(item)}
      />
    );
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!selectedUser) {
    return (
      <>
        <div className="container" style={{ marginTop: '20px' }}>
          <h1>List Of Github Users</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Login</th>
                <th scope="col">Avatar</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </table>
        </div>
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }
  if (selectedUser) {
    return (
      <ItemDetails item={selectedUser} onClick={() => setSelectedUser(null)} />
    );
  }
}

export default List;