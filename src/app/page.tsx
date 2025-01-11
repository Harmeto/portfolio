'use server'
import Blog from "@/app/components/blog/blog";
import Navbar from "@/app/components/navbar/navbar";
import Profile from "@/app/components/profile/profile";
import Footer from "./components/footer/footer";
import Proyectos from "./components/proyectos/proyectos";

export default async function Home() {
  const blogs = await fetch('http://localhost:3000/api/blogs');
  const json = await blogs.json();
  return (
    <div className="flex flex-col max-h-screen">
      <Navbar />
      <div className="flex flex-col flex-wrap justify-center items-center gap-10 mt-10">
        <Profile />
        <Proyectos />
        <h2 className="text-2xl font-bold">Blogs recientes</h2>
        <div className="flex flex-wrap justify-center max-w-[90vw] items-center gap-10 mt-2">
          {json.data.map((blog: any) => (
            <Blog
              key={blog._id}
              title={blog.title} 
              description={blog.description} 
              image={blog.image} 
            date={new Date(blog.createdAt).toLocaleDateString()} 
            author={blog.author} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
