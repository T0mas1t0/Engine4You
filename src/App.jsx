import React from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Loading from './pages/Loading';
//import Loading from "./pages/Loading";
const LazyHome = React.lazy(() => import("./pages/HomePage"));
const LazyCarPage = React.lazy(() => import("./pages/CarPage"));

export default function App() {

  return (
    <Routes>
      <Route path='/'
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyHome />
          </React.Suspense>
        }
      />
      <Route path='/carPage'
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyCarPage />
          </React.Suspense>
        }
      />
    </Routes>



  )
}
