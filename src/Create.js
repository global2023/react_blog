import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('yoshi')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsLoading(true)
        // console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(blog) //convent object to string
        }).then(
            () => {
                console.log('new blog added')
                setIsLoading(false)
                // history.go(-1);
                history.push('/')
            }
        )
    }

    return ( <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="">Blog title:</label>
            <input 
                type="text" 
                required
                value = {title}
                onChange = { (e) => setTitle(e.target.value) }
            />
            <label htmlFor="">Blog Body</label>
            <textarea name="" id="" cols="30" rows="10"
                required
                value = {body}
                onChange = { (e) => { setBody(e.target.value) }}
                ></textarea>
                <label htmlFor="">
                    Blog AUthor:
                </label>
                <select name="" id=""
                    value = {author}
                    onChange = {(e) =>{setAuthor(e.target.value)}}
                >
                    <option value="mariio">mariio</option>
                    <option value="yoshi">yoshi</option>
                </select>
            {! isLoading && <button>Add Blog</button>}
            {isLoading && <button disabled>Adding Blog...</button>}
            {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}


        </form>
    </div> );
}
 
export default Create;