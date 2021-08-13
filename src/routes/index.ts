import DesignerPage from '@/pages/DesignerPage';
import PreviewPage from '@/pages/PreviewPage';
const routes = [
  {
    path: '/',
    exact: true,
    component: DesignerPage,
  },
  {
    path: '/preview',
    exact: true,
    component: PreviewPage,
  },
];

export default routes;
