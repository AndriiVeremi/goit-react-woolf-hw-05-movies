import styled from "styled-components";

export const CollectionItem = styled.li`
width: 270px;
padding: 10px;
gap: 20px;
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
border: 1px solid #333;
border-radius: 5px;
transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover{
    scale: 1.03;
}
` 
export const CollectionTitle = styled.h2`
color: #333;
` 