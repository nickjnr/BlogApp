package com.blogApp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.blogApp.entities.Blog;
import com.blogApp.repositories.BlogRepo;

@Service
public class BlogService {

   
    BlogRepo blogRepo;

    public BlogService(BlogRepo blogRepo) {
        this.blogRepo = blogRepo;
    }

    public Blog add(Blog blog){
        System.out.println(blog);
        return blogRepo.save(blog);
    }

    public Blog editById(Blog blog,int id){
        blog.setId(id);
        return blogRepo.save(blog);
    }

    public List<Blog> getAllBlogs() {
       return blogRepo.findAll();
    }

    public Blog getBlogById(int id){
        return blogRepo.findById(id).orElseThrow(()->new RuntimeException());
    }
    public void deleteById(int id) {
        blogRepo.deleteById(id);
    }

    
}
