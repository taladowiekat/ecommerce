import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from './layouts/Layout.jsx'
import Home from './components/web/home/Home.jsx';
import Categories from './components/web/categories/Categories.jsx';
import Dashlayout from './layouts/Dashlayout.jsx';
import DashHome from './components/dashboard/home/Home.jsx'
import Dashcategoty from './components/dashboard/categories/Categories.jsx'
import Register from './components/web/register/Register.jsx';
import Login from './components/web/login/Login.jsx';
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';
import CategoriesDetails from "./components/web/categories/CategoriesDetails.jsx";
import Product from "./components/web/products/Product.jsx";
export default function App() {


  const [user,setUser] = useState(null);

  const saveCurrentUser=() => {
    const token =localStorage.getItem('userToken');
    const decoded=jwtDecode(token);
    console.log(decoded);
  }

 useEffect(()=>{
  if (localStorage.getItem('userToken')){
    saveCurrentUser();
  }
 })
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout user={user} setUser={setUser}/>,
      children:[
          {
            path:'register',
            element:<Register />
          },
          {
            path:'login',
            element:<Login saveCurrentUser={saveCurrentUser} />
          },
          {
            // path:'/',
            index:true,
            element:<Home />
          },
          {
            path:'products/category/:categoryId',
            element:<CategoriesDetails/>
          },
          {
            path:'product/:productId',
            element:<Product/>
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
        element:<Dashlayout />,
        children:[{
        path:'home',
        element:<DashHome />
      }
      ,{
        path:'category',
        element:<Dashcategoty/>
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
    }
  ]);
  return (
    <createContextProvider>
      <RouterProvider router={router} />
    </createContextProvider>
  )
}
