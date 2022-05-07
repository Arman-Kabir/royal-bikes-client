import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventoryItem from './Components/Pages/AddInventoryItem/AddInventoryItem';
import BikeDetails from './Components/Pages/BikeDetails/BikeDetails';
import Home from './Components/Pages/HomePage/Home/Home';

import ManageInventories from './Components/Pages/Manage/ManageInventories/ManageInventories';
import Login from './Components/Pages/Signing/Login/Login';
import Register from './Components/Pages/Signing/Register/Register';
import RequireAuth from './Components/Pages/Signing/RequireAuth/RequireAuth';
import Header from './Components/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/add-inventory-item' element={<AddInventoryItem></AddInventoryItem>}></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <BikeDetails></BikeDetails>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
