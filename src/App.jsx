import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import NavBar from "./components/NavBar"
import { AuthContext } from "./context";
import AppRouter from "./pages/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])


  return ( 
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <NavBar links={[
            {to: '/about', name: 'О проекте'},
            {to: '/posts', name: 'Посты'}
            ]}/>
        <div className="pt-[60px]">
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
