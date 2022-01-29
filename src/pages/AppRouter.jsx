import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Posts from "./Posts";
import PostPage from "./PostPage";
import Login from "./Login";
import { useContext } from "react";
import { AuthContext } from "../context";
import BaseLoader from "../components/BaseLoader";

function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <BaseLoader />
    }

    return (
        isAuth
            ?
            <Routes>
                <Route 
                    exact
                    path="/about" 
                    element={<About />} />
                <Route 
                    exact
                    path="/posts" 
                    element={<Posts />} />
                <Route 
                    exact
                    path="/posts/:id" 
                    element={<PostPage />} />
                <Route
                    path="*"
                    element={<Navigate  to="/posts" />} />
            </Routes>
            :
            <Routes>
                <Route 
                    exact
                    path="/about" 
                    element={<About />} />
                <Route
                    path="*"
                    element={<Navigate  to="/login" />} />
                <Route
                    path="/login"
                    element={<Login />} />
            </Routes>
    )
  }
  
  export default AppRouter;
  