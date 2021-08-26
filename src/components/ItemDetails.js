import React from 'react';

export default function ItemDetails({ item, onClick }) {

    const prop = Object.keys(item).map(property => {
        return <li className='list-group-item' key={property}>{property}</li>
    })
    console.log(item[prop])

    return (
        <div className="p-3 mb-2 bg-light text-dark">
            <div className="card" style={{ width: '18rem' }}>
                    <img src={item.avatar_url} className="card-img-top" alt={item.login} />
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:'center'}}>{item.login}</h5>
                    </div>
            </div>
            <div className="list-group">
                {
                    Object.keys(item).map((key, i) => (
                        <div  className="list-group-item list-group-item-action" key={i}>
                            <div className='row'>
                            <div className="col-md-6">{key}</div>
                            <div className="col-md-6">{item[key]}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <button onClick={onClick} className='btn btn-primary'>Back</button>
        </div>
    )
}

