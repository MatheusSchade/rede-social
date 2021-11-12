import axios from "axios"
import { urlBase } from "../constants/url"

export const CreateComment = (id, form, getPostComments) => {
    const token = localStorage.getItem('token')

    axios.post(`${urlBase}/posts/${id}/comments`, form, {
        headers: {
            Authorization: token,
        }
    })
        .then((response) => {
            alert("Comentário adicionado com sucesso!")
            getPostComments(id)

        })
        .catch((error) => {
            alert(error.response)
        })
}