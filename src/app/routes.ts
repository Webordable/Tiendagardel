import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Craftsmanship from './pages/Craftsmanship';
import Shipping from './pages/Shipping';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'artesania',
        Component: Craftsmanship,
      },
      {
        path: 'envios',
        Component: Shipping,
      },
      {
        path: 'contacto',
        Component: Contact,
      },
    ],
  },
]);