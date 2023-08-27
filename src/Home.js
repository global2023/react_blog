import { userState, useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isPending, error}   = useFetch('http://localhost:8000/blogs');
    // let name = 'mario'

    // const [age, setAge] = useState(25);  // useState is a hook
    // const handleClick = (e) => {
    //     // console.log("hello", e);
    //     // name = 'mario2'
    //     // console.log(name)
    //     setName('mario3');
    //     setAge(30)
    // }
    const handleClick2 = (name, e) => {
        console.log ('hello '+name, e.target)
    }
    //fires on every render
 
    //better defined here because data blogs are here
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        // setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
           {blogs && <BlogList blogs = {blogs} title = 'All Blogs' body = {'body'} /> } 
            {/* <BlogList blogs = {blogs.filter( (blog) => blog.author === 'mario')} title = "Mario's blogs" body = {'body'}/> */}

{/* 
            <h2>Homepage</h2>
            <p>{name} is {age}</p>
             */}
            {/* <button onClick = {() => setName('tom')}>Change Name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;