import axios from "axios"
import { urlBase } from "../constants/url"
import { goToFeed } from "../routes/coordinator";

export const PostLogin = (history, form, setRightButtonText) => {

    axios.post(`${urlBase}/users/login`, form)
        .then((response) => {
            localStorage.setItem(`token`, response.data.token)
            goToFeed(history)
            setRightButtonText("LOGOUT")
        })
        .catch((error) => {
            alert(`Erro no login, tente novamente mais tarde!`, error.response.data.message)
        })
}