import { useContext } from "react";
import { AuthContext } from "../context";
import { Link } from "react-router-dom";

function NavBar({links}) {
    const { setIsAuth } = useContext(AuthContext)

    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="fixed top-0 left-0 right-0 bg-white">
            <nav className="flex justify-between max-w-[300px] w-[95%] mx-auto py-4">
                <button className="text-xl text-red-500 font-bold" onClick={logOut}>
                    Выйти
                </button>
                {links.map(link => 
                    <Link 
                            to={link.to} 
                            className="text-xl font-bold text-blue-400"
                            key={link.to}>
                        {link.name}
                    </Link>
                )}
            </nav>
        </div>
    )
  }
  
  export default NavBar;
  