import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kenny Robert');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
     

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogs = {title, body, author}

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(blogs)            
        })
        .then(() => {
            console.log('new blog added')
            setIsPending(false);
            navigate('/', {replace: true})
           

        })

        

    }

    return ( 
        <div className="create">

            <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>

            <label>Title</label>
            <input type="text" required 
             value={title}
             onChange={(e) => setTitle(e.target.value)}
            />

            <label>Body</label>
            <textarea  required
             value={body}
             onChange={(e) => setBody(e.target.value)}
             />

            <select 
             value={author}
             onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Kenny Robert">Kenny Robert</option>
                <option value="Robert Kenny">Robert Kenny</option>
            </select>

            {!isPending && <button>Submit Blog</button>}
             {isPending && <button disabled>Adding blog....</button>}
            
        </form>
        </div>
     );
}
 
export default Create;