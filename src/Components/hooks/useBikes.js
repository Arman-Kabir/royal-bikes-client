import React, { useEffect, useState } from 'react';

const useBikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/inventory`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    return [bikes, setBikes];
};

export default useBikes;