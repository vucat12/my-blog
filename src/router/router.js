import NotFound from '../common-components/NotFound';
import DetailedBlog from '../components/DetailedBlog';
import MyBlog from '../components/MyBlog';

const routes = [
  {
    path: '/my-blog',
    title: 'MyBlog',
    content: <MyBlog/>
  },
  {
    path: '*',
    title: 'NotFound',
    content: <NotFound/>
  },
  {
    path: 'detailed-blog/:id',
    title: 'NotFound',
    content: <DetailedBlog/>
  }
];

export default routes;