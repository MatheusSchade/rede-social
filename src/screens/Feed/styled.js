import styled from "styled-components"
import { Color1, Color5 } from "../../constants/colors";

export const Body = styled.div`
padding-top: 20px;
width: 49.75vw;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
margin-top: 10vh;
@media(max-width: 900px) and (max-height: 1300px) {
width: 100vw;
}
`

export const PostTitle = styled.input`
height: 4vh;
border: none;
border-bottom: 1px solid grey;
text-align: center;
width: 50vw;
outline: none;
background-color: ${Color5};
@media(max-width: 600px) and (max-height: 900px) {
width: 100%;
}
@media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
width: 100%;
font-size: 24px;
}
`

export const PostComment = styled.input`
width: 50vw;
min-height: 15vh;
text-align: center;
border: none;
margin-bottom: 0px;
outline: none;
background-color: ${Color5};
@media(max-width: 600px) and (max-height: 900px) {
width: 100%;
}
@media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
width: 100%;
font-size: 24px;
}
`

export const Form = styled.form`
width: 49.8vw;
height: 23.9vh;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 3px 3px 3px gray;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
margin: 0 auto;
@media(max-width: 600px) and (max-height: 900px) {
width: 90vw;
}
@media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
width: 90%;
}

button {
    width: 102%;
    margin: 0 auto;
    cursor: pointer;
    height: 4vh;
    border: none;
    cursor: pointer;
    background-color: ${Color1};
    color: white;
    font-weight: bold;
    border: 2px solid ${Color1};
    outline: none;
    @media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    width: 100%;
    font-size: 20px;
    }
}
`