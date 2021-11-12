import axios from "axios"
import { urlBase } from "../constants/url"

export const CreatePost = (form, getPostsList) => {
    const token = localStorage.getItem("token")
    
    axios.post(`${urlBase}/posts`, form, {
        headers: {
            Authorization: token,
        }
    })
        .then((response) => {
            alert("Post criado com sucesso!")
            getPostsList()
        })
        .catch((error) => {
            alert("Não foi possível criar esse post, tente novamente mais tarde!")
        })
}