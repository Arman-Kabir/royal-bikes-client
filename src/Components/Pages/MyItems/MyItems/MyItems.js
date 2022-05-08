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
                const url = `https://lit-tundra-62538.herokuapp.com/inventoryitem?email=${email}`;
                console.log('url=', url);
                fetch(url,{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
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
            const url = `https://lit-tundra-62538.herokuapp.com/inventoryitem/${id}`;
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
            <h2 className='text-center mt-5'>Hello,Mr. <span className='text-danger'>{user?.email}</span> ... You have <span className='fw-bold text-info'>{myitems.length}</span> Items</h2>
            <div className='myitems-container container mt-5'>
                {
                    myitems.map(item => <MyItem key={item._id} item={item}
                        handleItemDelete={handleItemDelete}></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;