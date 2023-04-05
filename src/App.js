import { Toaster } from 'react-hot-toast';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Route';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
