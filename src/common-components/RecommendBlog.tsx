import { useNavigate } from 'react-router-dom';
import { BlogProps } from '../Model/Blogs';

function RecommendBlog(props: BlogProps) {
  const navigate = useNavigate();

  return (
    <div className='sm:inline-block sm:w-3/6 text-center px-4'>
      <div className='font-bold' onClick={() => navigate('/my-blog')}>
        {props.title}
      </div>
      <p>{props.createdDate}</p>
      <p className='text-left'>{props.content}</p>

      <hr className="hr-gray my-2"></hr>
    </div>
  );
}

export default RecommendBlog;
