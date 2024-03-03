import styled from "styled-components";

export const CastList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
`
export const CastItem = styled.li`
display: flex;
flex-direction: column;
gap: 15px;
border: 1px solid #333;
padding: 10px;
width: 200px;
height: 300px;
align-items: center;
background-color: #ebebeb;
border-radius: 5px;
`
export const CastDesc = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const CastName = styled.p`
font-weight: 700;
font-size: 16px;
`
export const CastText = styled.p`
font-size: 16px;
`