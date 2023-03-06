import styled from 'styled-components';

export const InputField = styled.input`
width: 100%;
// max-width: 400px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 16px;
margin-bottom: 10px;


`;

export const BlueButton = styled.button`
  background-color: #4D5DAD;
  color: white;
  width: 120px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const TodoTitle = styled.h3`
text-decoration: ${props => props.is_active ? "line-through" : "none"}; innerHTML: ${props => props.name};`