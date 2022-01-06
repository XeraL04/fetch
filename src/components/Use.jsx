import React from 'react'
import {useEffect, useState} from 'react'

function Use() {

    const [dataList,setData]=useState([]);


useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {setData(data)})
        .catch(err =>{

        });

    },[])
    return (
        <div>
           <p className='titl'>DATA</p>
            <ul>{dataList.map((user)=>(<li key={user.id}>{user.name}</li>))}</ul>
        </div>
    )
}

export default Use
