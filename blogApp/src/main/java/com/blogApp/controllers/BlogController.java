package com.blogApp.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.blogApp.entities.Blog;
import com.blogApp.services.BlogService;

import java.net.http.HttpRequest;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/blog")
@CrossOrigin
public class BlogController{

    @Autowired
    private BlogService blogService;
    
   @GetMapping
   public ResponseEntity<List<Blog>> getMethodName() {
       return new ResponseEntity<>( blogService.getAllBlogs(),HttpStatus.OK);
   }

   @GetMapping("/{id}")
   public ResponseEntity<Blog> getMethodName(@PathVariable int id) {
    
       return new ResponseEntity<>(blogService.getBlogById(id),HttpStatus.OK) ;
   }
   
   
   @PostMapping
   public ResponseEntity<Blog> createBlog(@RequestBody Blog blog) {
       return new ResponseEntity<>(blogService.add(blog),HttpStatus.CREATED) ;
   }

   @PutMapping("/{id}")
   public ResponseEntity<Blog> putMethodName(@PathVariable int id, @RequestBody Blog blog) {
       blog.setId(id);
       blogService.editById(blog, id);
       return new ResponseEntity<>(blog,HttpStatus.OK);
   }
   
   @DeleteMapping("/{id}")
   public void deleteById(@PathVariable int id)
   {     
        blogService.deleteById(id);
        
   }

   
   
}
