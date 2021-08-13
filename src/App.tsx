import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

interface Props {}

const App = (props: Props) => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
