import { useContext } from "react";
import { AuthContext } from "../context";

import BaseInput from '../components/BaseInput'
import BaseButton from '../components/BaseButton'

function Login() {
    const { setIsAuth } = useContext(AuthContext)

    const login = e => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <main className="mx-auto max-w-[1000px] w-[95%] mb-10">
            <h1 className="text-3xl font-bold text-center mb-4">
                Страница для логина
            </h1>
            <form onSubmit={login}>
                <BaseInput placeholder="Введите логин" styleName="mb-4"/>
                <BaseInput placeholder="Введите пароль" type="password" styleName="mb-4"/>
                <BaseButton>
                    Войти
                </BaseButton>
            </form>
        </main>
    )
}
  
export default Login;
  