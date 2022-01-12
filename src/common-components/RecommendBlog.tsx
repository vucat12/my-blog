import { useNavigate } from 'react-router-dom';
import { BlogProps } from '../Model/Blogs';

function RecommendBlog(props: BlogProps) {
  const navigate = useNavigate();

  return (
    <div>
      <p onClick={() => navigate('/my-blog')}>
        Recommend Blog == {props.title}
      </p>
    </div>
  );
}

export default RecommendBlog;
