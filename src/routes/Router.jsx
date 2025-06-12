import { createBrowserRouter } from "react-router";
import RootHomeLayout from "../layouts/RootHomeLayout";
import ErrorPage from "../pages/ErrorPage";
import { Suspense } from "react";
import HomePage from "../pages/HomePage";
import Loading from "../components/Loading";
import PrivateRoute from "../auths/PrivateRoute";
import AllArticlesPage from "../pages/AllArticlesPage";
import MyArticlesPage from "../pages/MyArticlesPage";
import PostArticlesPage from "../pages/PostArticlesPage";
import AboutUsPage from "../pages/AboutUsPage";
import RootAuthLayout from "../layouts/RootAuthLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ArticleDetailsPage from "../pages/ArticleDetailsPage";
import CategoryArticlesPage from "../pages/CategoryArticlesPage";

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
          <Suspense>
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
