import styled from "styled-components";

export const SearchFormWrapper = styled.div`
height: 80px;
align-items: center;
display: flex;
justify-content: center;
`

export const SearchForm = styled.form`
display: flex;
gap: 20px;
` 

export const SearchFormLabel = styled.label`

` 

export const SearchFormInput = styled.input`
width: 360px;
height: 40px;
font-size: 24px;
border: 1px solid #333;
border-radius: 8px;
padding: 0px 10px;
` 

export const SearchFormBtn = styled.button`
font-size: 18px;
 padding: 8px 22px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #5d5d5d;
  color: #5d5d5d;
  margin-left: auto;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
 
  &:hover {
    background-color: #4f4f4f;
    border: 1px solid #4f4f4f;
    color: #fff;
  }
` 