import React, { useState, useEffect } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err))
    },[])
    return  data ;
};

export default useFetch;
