import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="p-4 text-3xl font-bold underline">
        404 Not Found
      </h1>
      <p onClick={() => navigate('/my-blog')}>
        Back To Home
      </p>
    </div>
  );
}

export default NotFound;
