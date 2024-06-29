import { Outlet } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <div className='App'>
      <AppLayout />
      <Outlet />
    </div>
  );
}

export default App;
