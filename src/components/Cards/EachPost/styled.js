import styled from "styled-components"
import { Color1, Color5 } from "../../../constants/colors"
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs"

export const UpArrow = styled(BsArrowUpCircleFill)`
cursor: pointer;
color: ${Color1};
`

export const DownArrow = styled(BsArrowDownCircleFill)`
cursor: pointer;
color: ${Color1};
`

export const CardArea = styled.div`
width: 50vw;
min-height: 10vh;
border: none;
display: flex;
flex-direction: column;
margin: 0 auto;
margin-top: 2vh;
margin-bottom: 1vh;
border-radius: 5px;
border-top-right-radius: 7px;
box-shadow: 3px 3px 3px gray;
overflow: hidden;
background-color: ${Color5};
@media(max-width: 600px) and (max-height: 900px) {
width: 90vw;
}
@media(min-width: 601px) and (max-width: 900px) {
width: 90vw;
}
`

export const UserName = styled.div`
width: 50vw;
height: 3.25vh;
border-bottom: 1px solid grey;
padding-left: 8px;
display: flex;
align-items: center;
background-color: ${Color1};
color: ${Color5};
cursor: default;
@media(max-width: 600px) and (max-height: 900px) {
width: 100%;
}
@media(min-width: 601px) and (max-width: 900px) {
width: 90vw;
font-size: 22px;
}
p {
    width: 30vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    @media(min-width: 301px) and (max-width: 900px) and (min-height: 501px) and (max-height: 1300px) {
    width: 25%;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-right: 2px;
    }
}
`

export const Text = styled.div`
width: 90%;
min-height: 6vh;
margin-left: 12px;
@media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    h3 {
font-size: 25px;
}
p {
font-size: 18px;
}
    }
@media(max-width: 600px) and (max-height: 900px) {
h3 {
font-size: 18px;
}
p {
font-size: 15px;
}
}
`

export const ComentsAndEnjoys = styled.div`
width: 100%;
height: 3vh;
border-top: 1px solid grey;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Coments = styled.div`
max-width: 50%;
margin-right: 8px;
cursor: default;
@media(min-width: 301px) and (max-width: 900px) and (min-height: 501px) and (max-height: 1300px) {
font-size:12px;
}
`

export const Date = styled.h6`
color: gray;
font-size: 10px;
color: ${Color5};
width: 50%;
font-weight: 100;
margin-left: -150px;
@media(max-width: 600px) and (max-height: 900px) {
    margin-left: 5px;
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    }
@media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    font-size: 18px;
    margin-left: -60px;
    }

@media(min-width: 301px) and (max-width: 900px) and (min-height: 401px) and (max-height: 1300px) {
font-size: 8px;
}
`

export const Enjoy = styled.div`
max-width: 45%;
margin-left: 10px;
display: flex;
align-items: center;
`

export const CountEnjoys = styled.p`
font-weight: bold;
margin: 0 10px;
@media(min-width: 601px) and (max-width: 900px) and (min-height: 901px) and (max-height: 1300px) {
    font-size: 20px;
    }
`

export const DetailButton = styled.div`
width: 8vw;
font-size: 12px;
height: 3vh;
border: none;
border-top-right-radius: 5px;
background-color: ${Color1};
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
color: ${Color5};
cursor: pointer;
margin-right: -5px;
@media(min-width: 301px) and (max-width: 900px) and (min-height: 601px) and (max-height: 1300px) {
font-size: 12px;
margin-left: 15px;
}

@media(min-width: 301px) and (max-width: 900px) and (min-height: 401px) and (max-height: 1300px) {
font-size: 12px;
margin-left: 11px;
}
`