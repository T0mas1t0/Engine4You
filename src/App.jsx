import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavAppBar from './components/NavAppBar';
import Loading from './pages/Loading';
//import Loading from "./pages/Loading";
const LazyHome = React.lazy(() => import("./pages/HomePage"));
const LazyCarPage = React.lazy(() => import("./pages/CarPage"));
const LazyComparePage = React.lazy(() => import("./pages/ComparePage"));


export default function App() {

  return (
    <>
    
    <NavAppBar/>
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
      <Route path='/compare'
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyComparePage />
            </React.Suspense>
          }
      />
    </Routes>
    </>



  )
}
