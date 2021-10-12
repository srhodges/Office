import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
  console.log(props)
    return (
        <>
            <Link className="post" to={`/posts/${props.id}`}>
                <img className="post-image" src={props.imgURL} alt={props.title} />
                <div className="post-title">{props.title}</div>
                <div className="post-author">{props.author}</div>
                <div className="post-content">{props.content}</div>
            </Link>
        </>
    )
}
export default Post