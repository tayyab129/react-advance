import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post({id,author,body}) {


    return (
        <li className={classes.post}>
            <Link to={id}>
            <p className={classes.author}>{author}</p>
            <h1 className={classes.text}>{body}</h1>
            </Link>
        </li>
    )
}

export default Post;