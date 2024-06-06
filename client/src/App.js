import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//Layout
import HeaderBar from "./layout/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./layout/SideBar";

import FormProduct from './components/FormProduct';
import FormEditProduct from './components/FormEditProduct';


//pages
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";

//admin
import HomePageAdmin from './components/pages/admin/HomePageAdmin';
import ManageUser from './components/pages/admin/ManageUser';

//user
import HomePageUser from './components/pages/user/HomePageUser';

//routes
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute';

//function
import { currentUser } from "./functions/auth"

import { useDispatch } from 'react-redux';
import { login } from './store/userSlice';
import Notfound404 from './components/pages/Notfound404';

import ResponsiveAppBar from './layout/ResponsiveAppBar';


function App() {
  // javascript
  const dispatch = useDispatch()

  const idToken =  localStorage.getItem('token')
  console.log(idToken)
  currentUser(idToken).then(res=>{
    console.log(res)
    dispatch(login({
      name:res.data.name,
      role:res.data.role,
      token:idToken,
    }))
  }).catch(err=>console.log(err))

  return (
    <BrowserRouter>

    <>
      <CssBaseline />
      { /* Publish */}
    <Routes>
        <Route path='*' element={<Notfound404/>} />
        <Route path='/' element={
          <>
        <ResponsiveAppBar/> <h1>Homepage</h1>
          </>
        } />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />


        { /* User */}
        <Route path='/user/index' element={
        <UserRoute>
          <HomePageUser/>
        </UserRoute>
        } />
      



      { /* Admin */}
        <Route path='/admin/index' element={
        <AdminRoute>
          <HomePageAdmin />
        </AdminRoute>
        } />

        <Route path='/admin/manageuser' element={
        <AdminRoute>
          <ManageUser />
        </AdminRoute>
        } />

        <Route path='/admin/viewtable' element={
        <AdminRoute>
          <FormProduct />
        </AdminRoute>
        } />

        <Route path='/edit/:id' element={
        <AdminRoute>
        <FormEditProduct />
        </AdminRoute>
        } />

    </Routes>

    </>

    </BrowserRouter>
  );
}

export default App;

