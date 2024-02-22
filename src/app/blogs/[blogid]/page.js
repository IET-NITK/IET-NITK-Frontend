// Import necessary modules
"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import './styleblog.css'
// Import Tailwind CSS classes
import 'tailwindcss/tailwind.css';

// Component definition
const BlogId = ({ params }) => {
  console.log(params.blogid)
  // State to store the fetched data
  const [blogData, setBlogData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=blog.BlogPage&fields=*');
        const data = await response.json();
        console.log("check",data);
        // Find the blog post with the matching id
        const matchingBlog = data.items.find(blog => blog.id === parseInt(params.blogid));
        
        // Update the state with the matching blog data
        setBlogData(matchingBlog);
        console.log("blog :",matchingBlog.blog_img_url)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [params.id]); // Include params.id in the dependency array to refetch data when id changes

  // Render the component
  return (
    <>
    <Navbar />
  
    <div className="min-h-screen bg-rose-100 flex items-center justify-center">
    
      <div className="max-w-4xl w-full">
        {blogData ? (
          <div>
            <h2 className=" mb-2 text-center blogstyle">{blogData.title}</h2>
          <ReactMarkdown className="prose pt-3  text-black blogbody p-8 rounded-md shadow-xl z-10">{blogData.blog_body}</ReactMarkdown>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
    <Footer /></>
  );
};

// Export the component
export default BlogId;
