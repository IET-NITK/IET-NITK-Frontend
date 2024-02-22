/*import BlogCard from './Blogcard';
import Navbar from "@/components/Navbar/Navbar";

const BlogList = () => {
  return (
    <div>
     <Navbar />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       Img="./blog.png"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     </div>
  );
};

export default BlogList;*/

"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './Blogcard';
import Footer from '@/components/footer';
import Navbar from "@/components/Navbar/Navbar";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=blog.BlogPage&fields=*');
        const data = await response.json();
        setBlogs(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Navbar />
      {currentBlogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          blogger={blog.blog_authors}
          img={blog.blog_img_url}
          description={blog.blog_body}
          blogid={blog.id}
        />
      ))}
    
      <br></br>
      <Footer />
    </div>
  );
};

export default BlogList;
