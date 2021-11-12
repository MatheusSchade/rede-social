import axios from "axios"
import { urlBase } from "../constants/url"


export const GetPostComments = (id, setCommentList) => {
    const token = localStorage.getItem('token')

    axios.get(`${urlBase}/posts/${id}/comments`, {
        headers: {
            Authorization: token,
        }
    })
        .then((response) => {
            setCommentList(response.data)

        })
        .catch((error) => {
            alert(error.response)
        })
}