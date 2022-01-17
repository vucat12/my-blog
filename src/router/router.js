import NotFound from '../common-components/NotFound';
import DetailedBlog from '../components/DetailedBlog';
import MyBlog from '../components/MyBlog';
import MyResume from '../components/MyResume';

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
  },
  {
    path: '/my-resume',
    title: 'MyResume',
    content: <MyResume/>
  }
];

export default routes;