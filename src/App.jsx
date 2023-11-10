import React from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Loading from './pages/Loading';
//import Loading from "./pages/Loading";
const LazyHome = React.lazy(() => import("./pages/HomePage"));
const LazyCarPage = React.lazy(() => import("./pages/CarPage/CarPage"));
const LazyComparePage = React.lazy(() => import("./pages/ComparePage/ComparePage"));


export default function App() {

  return (
    <>
    <Nav />
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
