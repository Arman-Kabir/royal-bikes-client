import React, { useEffect, useState } from 'react';

const useBikes = (limitItem) => {
    console.log(limitItem);
    const [bikes, setBikes] = useState([]);
  
    useEffect(() => {
        const url = `http://localhost:5000/inventory?item=${limitItem}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    return [bikes, setBikes];
};

export default useBikes;