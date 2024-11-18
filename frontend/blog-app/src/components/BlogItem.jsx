import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import axios from 'axios'

export default function BlogItem() {
    const allBlogs=useLoaderData()
    const navigate=useNavigate()

    const deleteBlog=async(id)=>{
        await axios.delete(`http://localhost:8080/blog/${id}`)
        navigate("/")
    }
    return (
        <>
         {
            allBlogs?.map((blog,index)=>(
            <div key={index} className="card shadow p-3 mb-5 bg-body rounded border-0">
                <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <h6>{blog.date}</h6>
                    <p className="card-text text-truncate" ><Markdown>{blog.description}</Markdown></p>
                    <p><a href={`/blogView/${blog.id}`}>View more</a></p>
                    <button onClick={()=>deleteBlog(blog.id)} className="btn btn-danger">Delete</button>
                </div>
            </div>))
        }
        </>
    )
}
