import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:2000/api", // your backend URL
});

// Get all blogs
export const fetchBlogs = () => API.get("/blogs");

// Get a single blog by slug
export const fetchBlogBySlug = (slug) => API.get(`/blogs/${slug}`);
