import axios from "axios"
import { urlBase } from "../constants/url"

export const GetPostsList = (setPostList) => {
    const token = localStorage.getItem('token')

    axios.get(`${urlBase}/posts`, {
        headers: {
            Authorization: token,
        }
    })
        .then((response) => {
            setPostList(response.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
}
