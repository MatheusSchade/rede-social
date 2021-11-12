import axios from "axios"
import { urlBase } from "../constants/url"
import { goToFeed } from "../routes/coordinator"

export const PostSignUp = (history, form, setRightButtonText) => {
    
    axios.post(`${urlBase}/users/signup`, form)
        .then((response) => {
            localStorage.setItem(`token`, response.data.token)
            goToFeed(history)
            setRightButtonText("LOGOUT")
        })
        .catch((error) => {
            alert(`Erro no cadastro, tente novamente mais tarde!`, error)

        })
}