import styled from "styled-components";

export const GoBeckBtn = styled.button`
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

export const WrapperBtn = styled.div`
display: flex;
justify-content: left;
`