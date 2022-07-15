import { Layout } from './Layout';
import './styles/global.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <ToastContainer />
      <Layout />;
    </>
  );
}
