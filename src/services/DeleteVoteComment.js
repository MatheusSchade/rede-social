import axios from "axios"
import { urlBase } from "../constants/url"

export const DeleteVoteComment = (id, voteId, getPostComments) => {
    const token = localStorage.getItem('token')

    axios.delete(`${urlBase}/comments/${voteId}/votes`, {
        headers: {
            Authorization: token,
        }
    })
        .then((response) => {
            getPostComments(id)

        })
        .catch((error) => {
            alert("Deu erro!")
        })
}