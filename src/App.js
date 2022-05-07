import { Route, Routes } from 'react-router-dom';
import './App.css';
import BikeDetails from './Components/Pages/BikeDetails/BikeDetails';
import Home from './Components/Pages/HomePage/Home/Home';
import ManageInventory from './Components/Pages/Manage/ManageInventory/ManageInventory';
import Header from './Components/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:id' element={<BikeDetails></BikeDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
