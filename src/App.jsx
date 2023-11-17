import { Suspense, lazy } from 'react'
import { Route, Routes } from "react-router-dom";
import NavAppBar from './components/NavAppBar';
import Loading from './pages/Loading';
//import Loading from "./pages/Loading";
const LazyHome = lazy(() => import("./pages/HomePage"));
const LazyCarPage = lazy(() => import("./pages/CarPage"));
const LazyComparePage = lazy(() => import("./pages/ComparePage"));
const LazyListPage = lazy(() => import("./pages/ListPage"));
const LazyListAdvanced = lazy(() => import("./pages/ListPageAdvancedSearch"));


export default function App() {

  return (
    <>

      <NavAppBar />
      <Routes>
        <Route path='Engine4You'
          element={
            <Suspense fallback={<Loading />}>
              <LazyHome />
            </Suspense>
          }
        />
        <Route path='/carPage/:id'
          element={
            <Suspense fallback={<Loading />}>
              <LazyCarPage />
            </Suspense>
          }
        />
        <Route path='/compare'
          element={
            <Suspense fallback={<Loading />}>
              <LazyComparePage />
            </Suspense>
          }
        />
        <Route path='/list'
          element={
            <Suspense fallback={<Loading />}>
              <LazyListPage />
            </Suspense>
          }
        />
        <Route path='/list/advanced'
          element={
            <Suspense fallback={<Loading />}>
              <LazyListAdvanced />
            </Suspense>
          }
        />

      </Routes>
    </>



  )
}
