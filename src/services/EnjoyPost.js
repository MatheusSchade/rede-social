import axios from "axios";
import { urlBase } from "../constants/url";

export const EnjoyPost = (type, id, deleteVotePost, setPostDirection, postDirection, getPostsList) => {
    const token = localStorage.getItem('token')

    const index = postDirection.findIndex((item) => item.postnumber === id)
    postDirection.splice(index, 1)

    if (index === -1) {


        const body = {
            direction: 1,
        }

        axios.post(`${urlBase}/${type}/${id}/votes`, body, {
            headers: {
                Authorization: token,
            }
        })
            .then((response) => {
                getPostsList()

                const newPostChoosen = {
                    postnumber: id,
                    status: response.status
                }

                const postIndex = postDirection.findIndex((item) => item.postnumber === id)

                if (postIndex === -1) {
                    setPostDirection(
                        [...postDirection, newPostChoosen]
                    )
                } else {
                    postDirection.splice(postIndex, 1, newPostChoosen)
                    setPostDirection(postDirection)
                }

            })
            .catch((error) => {
                alert(error.response)
            })


    } else {
        deleteVotePost(type, id)
    }

}