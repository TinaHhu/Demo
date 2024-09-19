import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';
import Contact from './routers/contact';
import Root from './routers/router';


// const router = createBrowserRouter([
//   {
//     path: '/', // 根路由
//     element: <Root />, // 正常的根组件
//     errorElement: <ErrorPage />, // 处理未找到的根组件，即是 404 页面 
//   },
//   {
//     path: "contacts", // 联系路由
//     element: <Contact />,
//     errorElement: <ErrorPage />,
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/', // 根路由
    element: <Root />, // 正常的根组件
    errorElement: <ErrorPage />, // 处理未找到的根组件，即是 404 页面 
    children: [
      {
        path: "contacts", // 子路由
        element: <Contact />,
        errorElement: <ErrorPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

