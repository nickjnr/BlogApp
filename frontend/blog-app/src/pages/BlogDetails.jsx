import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'

export default function BlogDetails() {
    const blog = useLoaderData()
    const navigate=useNavigate()
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>{blog.title}</h2>
                        <h5>{blog.date}</h5>
                        <button onClick={()=>navigate(`/editBlog/${blog.id}`)} className="btn btn-success fs-6 mt-2 text-center" style={{ width: "80px" }}>Edit</button>
                        <h6 className='mt-4 border p-3'><Markdown>{blog.description}</Markdown></h6>
                        <div className="text-center">

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
