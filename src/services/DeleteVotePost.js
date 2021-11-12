import axios from "axios";
import { urlBase } from "../constants/url";

export const DeleteVotePost = (type, id, getPostsList) => {
    const token = localStorage.getItem('token')

    axios.delete(`${urlBase}/posts/${id}/votes`, {
        headers: {
            Authorization: token,
        }
    })
        .then((response) => {
            getPostsList()

        })
        .catch((error) => {
            alert("Deu erro!")
        })
}

