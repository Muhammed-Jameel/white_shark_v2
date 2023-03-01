import styled from "styled-components";


const Row = styled.div`
margin-top: 15vh;
&::after {
    content: "";
    clear: both;
    display: table;
}`

const Column = styled.div`
float: left;
width: 100%;

@media only screen and (min-width: 900px){
    width: ${props => (props.span ? props.span /12 * 100 : "8.33")}%;
}

`

export {Row,Column}