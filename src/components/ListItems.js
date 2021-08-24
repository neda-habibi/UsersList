import React from 'react';

export default function ListItem({text , onClick}){
    return(
        <li className='list-group-item' onClick = {onClick}>{text}</li>
    )
}