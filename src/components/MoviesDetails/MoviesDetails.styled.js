import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsWrapper = styled.div``;

export const Details = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
`;

export const DetailsTitle = styled.h1`
  padding-top: 20px;
  font-size: 45px;
  margin-bottom: 130px;
`;

export const DetailsInfo = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const DetailsInfoBord = styled.span`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  gap: 20px;
`;

export const AdditionalWrapper = styled.div`
border-top: 1px solid #333;
padding: 10px;
`;

export const AdditionalTitle = styled.h2`
text-align: center;
margin-bottom: 30px;
`;

export const AdditionalList = styled.div`
display: flex;
gap: 30px;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`;



export const AdditionalLink = styled(NavLink)`
padding: 8px 22px;
background-color: #fff;
border-radius: 10px;
border: 1px solid #5d5d5d;
color: #5d5d5d;
&:hover {
    background-color: #4f4f4f;
    border: 1px solid #4f4f4f;
    color: #fff;
}
`;