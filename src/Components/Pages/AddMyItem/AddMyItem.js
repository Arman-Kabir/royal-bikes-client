import React from 'react';
import './AddMyItem.css';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';

const AddMyItem = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    // console.log(user);

    const handleAddItemSubmit = event => {
        event.preventDefault();
        // console.log(data);
        const itemData = {
            description: event.target.description.value,
            email: event.target.email.value,
            image: event.target.image.value,
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value
        }


        // send data to server and then database
        const url = `http://localhost:5000/inventoryitem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemData)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add Item</h2>
            <form onSubmit={handleAddItemSubmit}>

                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="text" name="image" placeholder='image url' required />
                <br />

                <input className='w-100 mb-2' type="text" name="price" placeholder='price' required/>
                <br />
                <input className='w-100 mb-2' type="number" name="quantity" placeholder='quantity'  required />
                <br />
                <input className='w-100 mb-2' type="text" name="supplier" placeholder='supplier' required />
                <br />
                <textarea className='w-100 mb-2' type="text" name="description" placeholder='description' required />
                <br />
                <input className='btn btn-primary' type="submit" value="add item" />
            </form>
        </div>
    );
};

export default AddMyItem;