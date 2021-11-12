import React, { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import useForm from "../hooks/useForm"
import { goToLogin } from "../routes/coordinator"
import { PostLogin } from "../services/PostLogin"
import { PostSignUp } from "../services/PostSignUp"
import { CreatePost } from "../services/CreatePost"
import { GetPostsList } from "../services/GetPostsList"
import { CreateComment } from "../services/CreateComent"
import { GetPostComments } from "../services/GetPostComments"
import { DeleteVotePost } from "../services/DeleteVotePost"
import { DeleteVoteComment } from "../services/DeleteVoteComment"
import { HatePost } from "../services/HatePost"
import { EnjoyPost } from "../services/EnjoyPost"
import { HateComment } from "../services/HateComment"
import { EnjoyComment } from "../services/EnjoyComment"

const GlobalState = (props) => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "", title: "", body: "" })
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "LOGOUT" : "LOGIN")
    const [postList, setPostList] = useState([])
    const [commentList, setCommentList] = useState([])
    const [postDirection, setPostDirection] = useState([])
    const [commentDirection, setCommentDirection] = useState([])

    // Pegar lista de comentários;

    const getPostsList = () => {
        GetPostsList(setPostList)
    }

    // Converter data no formato advindo da api;

    const stringToDate = (date) => {
        let nwd = date && date.split("-")
        let year = nwd && nwd[0]
        let month = nwd && nwd[1]
        let newdt = nwd && nwd[2].split("T")
        let day = newdt && newdt[0]
        let newHour = newdt && newdt[1].split(".")
        let moment = newHour && newHour[0]
        let time = moment && moment.split(":")
        let hour = time && time[0] - 3
        if (hour < 0) { hour = hour + 3 }
        let minute = time && time[1]
        let second = time && time[2]
        let phrase = `${day && day}-${month && month}-${year && year}, às ${hour && hour}:${minute && minute}:${second && second}`
        return phrase
    }

    // Votar em um comentário;

    const enjoyComment = (id, voteId) => {
        EnjoyComment(id, voteId, commentDirection, getPostComments, setCommentDirection, deleteVoteComment)
    }

    const hateComment = (id, voteId) => {
        HateComment(id, voteId, setCommentDirection, commentDirection, deleteVoteComment, getPostComments)
    }

    const deleteVoteComment = (id, voteId) => {
        DeleteVoteComment(id, voteId, getPostComments)
    }

    // Votar em um post;

    const enjoyPost = (type, id) => {
        EnjoyPost(type, id, deleteVotePost, setPostDirection, postDirection, getPostsList)
    }

    const hatePost = (type, id) => {
        HatePost(type, id, getPostsList, deleteVotePost, setPostDirection, postDirection)
    }

    const deleteVotePost = (type, id) => {
        DeleteVotePost(type, id, getPostsList)
    }

    // Comentar em um post;

    const onSubmitNewComment = (event, id) => {
        event.preventDefault()
        clear()
        CreateComment(id, form, getPostComments)
    }

    // Pegar comentários dos posts;

    const getPostComments = (id) => {
        GetPostComments(id, setCommentList)
    }

    // Postar um novo Post;

    const onSubmitNewPost = (event, history) => {
        event.preventDefault()
        clear()
        CreatePost(form, getPostsList)
    }

    // Botão de Login e Logout do Header;

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = (history) => {
        if (token) {
            logout()
            setRightButtonText("LOGIN")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    // Formulário de login;

    const onSubmitForm = (event, history) => {
        event.preventDefault()
        clear()
        PostLogin(history, form, setRightButtonText)
    }

    // Formulário de Cadastro;

    const onSignUpForm = (event, history) => {
        event.preventDefault()
        clear()
        PostSignUp(history, form, setRightButtonText)
    }

    return (
        <GlobalContext.Provider value={{
            stringToDate,
            enjoyComment,
            hateComment,
            commentList,
            hatePost,
            enjoyPost,
            onSubmitNewComment,
            getPostComments,
            onSubmitNewPost,
            postList,
            rightButtonAction,
            rightButtonText,
            onSubmitForm,
            onSignUpForm,
            form,
            onChange,
            clear,
            setRightButtonText,
            setPostList,
            getPostsList
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState