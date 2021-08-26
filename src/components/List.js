import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import ItemDetails from './ItemDetails';
import Pagination from './Pagination';

export default function List() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 10;
    const totalSize = 10000;
    const pageCount = Math.ceil(totalSize / pageSize);

    useEffect(() => {
        let offset = (currentPage - 1)*10 +1;
        console.log("offset ", offset,"current ", currentPage)
        fetch(`https://api.github.com/users?since=${offset}&per_page=${7}`)
            .then(response => response.json())
            .then(response => {
                setItems(response);
                setLoading(false);
            });
    }
        , [currentPage])

    const list = items.map((item,i)=> {
        return <ListItem item={item} key={item.id} onClick={() => setSelectedUser(item)} />
    })

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!selectedUser) {
        return (
            <>
            <div className="p-3 mb-2 bg-light text-dark">
                <li className="list-group-item active" className='row'>
                        <div className='col-md-4'>Login</div>
                        <div className='col-md-8'>Avatar</div>
                </li>
                <ul className="list-group">{list}</ul>
            </div>
            <Pagination pageCount = {pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </>
        )
    }
    if (selectedUser) {
        return <ItemDetails item={selectedUser} onClick={() => setSelectedUser(null)} />
    }

}