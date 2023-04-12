import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Componenents/Layout/Main';
import Home from './Componenents/Home/Home';
import JobDetails from './Componenents/JobDetails/JobDetails';
import AppliedJobs from './Componenents/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader : async ({params})=> {
          const res = await fetch('/jobsData.json');
          const data = await res.json();
          const job = data.find(details => details.id == params.id)
          return job;
        }
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
