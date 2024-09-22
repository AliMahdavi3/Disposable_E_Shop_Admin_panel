import { useLocation } from 'react-router-dom';
import './App.css';
import AuthLayout from './layouts/auth/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {

  const location = useLocation();

  return (
    <div>
      {
        location.pathname.includes('/auth') ? (

          <AuthLayout />

        ) : (

          <AdminLayout />

        )
      }
    </div>
  );
}

export default App;
