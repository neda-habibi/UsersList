import React from 'react';

export default function ListItem({item , onClick}){
    return(
        <li className='list-group-item' onClick = {onClick}>{item.login}</li>
    )
}