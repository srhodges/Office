import './PostCard.css';
import { Link } from 'react-router-dom'

const PostCard = (props) => {
    return (
        <div className="post-card">
            <Link className="card" to={`/posts/${props.id}`}>
          <img className="post-card-image" src={props.imgURL} alt={props.title} />
          <h3 className="post-card-title">{props.title}</h3>
          <h4 className="post-card-author">{props.author}</h4>
                <div>Read More</div>
            </Link>
        </div>
    )
}

export default PostCard