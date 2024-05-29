import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from '@/router';
import { Modal } from '@/containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
      <Modal />
      <ToastContainer
        position="top-center"
        theme="colored"
        hideProgressBar={true}
      />
    </Suspense>
  );
}
