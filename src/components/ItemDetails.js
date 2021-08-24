import React from 'react';

export default function ItemDetails( {item , onClick} ) {
    const {id, login, avatar_url} = item;
    return (
        <div>
            <div>
                <label>id: </label>
                <span>{id}</span>
            </div>
            <div>
                <label>login: </label>
                <span>{login}</span>
            </div>
            <div>
                <label>avatar: </label>
                <img src={avatar_url} />
            </div>
            <button onClick={onClick} className='btn btn-primary'>Back</button>
        </div>
    )
}