import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import ItemDetails from './ItemDetails';

export default function List() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(response => {
                setItems(response);
            });
    }
        , [])

    const list = items.map(item => {
        return <ListItem item={item} key={item.id} onClick={() => setSelectedUser(item)} />
    })

    // if (loading) {
    //     return (
    //         <div class="d-flex justify-content-center">
    //             <div class="spinner-border" role="status">
    //                 <span class="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }

     if (!selectedUser) {
        return <ul className="list-group">{list}</ul>;
    }
    else {
        return <ItemDetails item={selectedUser} onClick={() => setSelectedUser(null)} />
    }

}