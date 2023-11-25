import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from './Layout.jsx'
import Home from '../components/web/home/Home.jsx';
import Categories from './../components/web/categories/Categories.jsx';
import Dashlayout from './Dashlayout.jsx'
import DashHome from '../components/dashboard/home/Home.jsx';
import Dashcategoty from '../components/dashboard/categories/Categories.jsx'
import Register from "../components/web/register/Register.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'register',
        element:<Register/>,
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'categories',
        element:<Categories/>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<Dashlayout/>,
    children:[
      {
        path:'home',
        element:<DashHome/>
      },
      {
        path:'category',
        element:<Dashcategoty/>,
      }
    ]
  }
]);


