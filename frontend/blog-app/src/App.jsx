import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import AddBlog from './pages/AddBlog'
import axios from 'axios'
import EditBlog from './pages/EditBlog'
import BlogDetails from './pages/BlogDetails'

const getAllBlogs=async()=>{
  let blogs=[]
  await axios.get("http://localhost:8080/blog").then(res=>{
    blogs=res.data
  })
  return blogs
}
const getBlog=async({params})=>{
  let blogs=[]
  await axios.get(`http://localhost:8080/blog/${params.id}`).then(res=>{
    blogs=res.data
  })
  return blogs
}


const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllBlogs},
    {path:"/addBlog",element:<AddBlog/>},
    {path:"/blogView/:id",element:<BlogDetails/>,loader:getBlog},
    {path:"/editBlog/:id",element:<EditBlog/>,loader:getBlog}
  ]}
  
])
export default function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}
