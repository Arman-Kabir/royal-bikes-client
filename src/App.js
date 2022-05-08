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
import MyItems from './Components/Pages/MyItems/MyItems/MyItems';
import AddMyItem from './Components/Pages/AddMyItem/AddMyItem';
import ManageMyItems from './Components/Pages/Manage/ManageMyItems/ManageMyItems';
import Blogs from './Components/Pages/Blogs/Blogs';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';
import ItemDetails from './Components/Pages/ItemDetails/ItemDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>

        <Route path='/add-inventory-item' element={<AddInventoryItem></AddInventoryItem>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/manage-my-item' element={
          <RequireAuth>
            <ManageMyItems></ManageMyItems>
          </RequireAuth>
        }></Route>

        <Route path='/add-my-item' element={
          <RequireAuth>
            <AddMyItem></AddMyItem>
          </RequireAuth>
        }></Route>

        {/* <Route path='/add-my-item' element={<AddMyItem></AddMyItem>}></Route> */}

        {/* <Route path='/add-inventory-item' element={<AddInventoryItem></AddInventoryItem>}></Route> */}
        {/* <Route path='/my-items' element={<MyItems></MyItems>}></Route> */}

        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>


        <Route path='/inventory/:id' element={
          <RequireAuth>
            <BikeDetails></BikeDetails>
          </RequireAuth>
        }></Route>

        <Route path='/inventoryitem/:id' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
