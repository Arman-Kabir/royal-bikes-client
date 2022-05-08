import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email;
    console.log('email', email);
    const [myitems, setMyitems] = useState([]);

    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            if (email) {
                const url = `http://localhost:5000/inventoryitem?email=${email}`;
                console.log('url=', url);
                fetch(url)
                    .then(res => res.json())
                    .then(data => setMyitems(data))
            }
        }
        getMyItems();

    }, [user]);

    const handleItemDelete = id => {
        console.log('inventory item delete id', id);
        const proceed = window.confirm('are u sure you want to Delete');

        if (proceed) {
            console.log('deleting inventory item with id', id);
            const url = `http://localhost:5000/inventoryitem/${id}`;
            console.log(url);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        console.log(data);
                        const remaining = myitems.filter(i => i._id !== id);
                        setMyitems(remaining);
                    }

                })
        }

    }



    return (
        <div>
            <h2 className='text-center'>Hello, {user?.email}. You have <span className='fw-bold text-info'>{myitems.length}</span> Items</h2>
            <div className='myitems-container container'>
                {
                    myitems.map(item => <MyItem key={item._id} item={item}
                        handleItemDelete={handleItemDelete}></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;