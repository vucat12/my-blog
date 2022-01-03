import NotFound from '../common-components/NotFound';
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
  }
];

export default routes;