import { createBrowserRouter } from "react-router";
import { lazy } from 'react';
import RootHomeLayout from "../layouts/RootHomeLayout";
import ErrorPage from "../pages/ErrorPage";
import { Suspense } from "react";
import Loading from "../components/Loading";
import PrivateRoute from "../auths/PrivateRoute";
import RootAuthLayout from "../layouts/RootAuthLayout";
const HomePage = lazy(() => import("../pages/HomePage"));
const AllArticlesPage = lazy(() => import("../pages/AllArticlesPage"));
const MyArticlesPage = lazy(() => import("../pages/MyArticlesPage"));
const PostArticlesPage = lazy(() => import("../pages/PostArticlesPage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ArticleDetailsPage = lazy(() => import("../pages/ArticleDetailsPage"));
const CategoryArticlesPage = lazy(() => import("../pages/CategoryArticlesPage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootHomeLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/all-articles",
        element: (
          <Suspense fallback={<Loading />}>
            <AllArticlesPage />
          </Suspense>
        ),
      },
      {
        path: "/my-articles",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoute>
              <MyArticlesPage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/post-article",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoute>
              <PostArticlesPage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/article/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoute>
              <ArticleDetailsPage />
            </PrivateRoute>
          </Suspense>
        )},
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutUsPage />
          </Suspense>
        ),
      },
      {
        path: '/category-articles/:category',
        element: (
          <Suspense fallback={<Loading/>}>
            <CategoryArticlesPage/>
          </Suspense>
        )
      }
    ],
  },
  {
    path: '/auth',
    element: <RootAuthLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/auth/login',
            element: <LoginPage/>
        },
        {
            path: '/auth/register',
            element: <RegisterPage/>
        }
    ]
  }
]);
export default router;
