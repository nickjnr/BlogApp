import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddBlog() {
    const [blogData,setBlogData]=useState({})
    const navigate=useNavigate()

    const onHandleChange=(e)=>{
        setBlogData(pre=>({...pre,[e.target.name]:e.target.value}))
    }

    const onHandleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/blog",blogData)
        navigate("/")
    }

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2 '>
                        <form>
                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input type="text" class="form-control" name="title" onChange={onHandleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea type="text" class="form-control" name="description" rows="10" onChange={onHandleChange}/>
                            </div>
                            <div className='text-center'>
                                <button type="submit" class="btn btn-success" onClick={onHandleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
