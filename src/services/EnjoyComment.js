import axios from "axios"
import { urlBase } from "../constants/url"

export const EnjoyComment = (id, voteId, commentDirection, getPostComments, setCommentDirection, deleteVoteComment) => {
    const token = localStorage.getItem('token')

    const index = commentDirection.findIndex((item) => item.postnumber === voteId)
    commentDirection.splice(index, 1)

    if (index === -1) {

        const body = {
            direction: 1,
        }
        axios.post(`${urlBase}/comments/${voteId}/votes`, body, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                getPostComments(id)

                const newCommentChoosen = {
                    postnumber: voteId,
                    status: response.status
                }

                const postIndex = commentDirection.findIndex((item) => item.postnumber === voteId)

                if (postIndex === -1) {
                    setCommentDirection(
                        [...commentDirection, newCommentChoosen]

                    )
                } else {
                    commentDirection.splice(postIndex, 1, newCommentChoosen)
                    setCommentDirection(commentDirection)
                }

            })
            .catch((error) => {
                alert(error.response)
            })
    } else {
        deleteVoteComment(id, voteId)
    }
}