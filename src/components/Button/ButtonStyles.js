import styled from "styled-components";

const StyledButton = styled.button`
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};;
  margin: 10px;
  background-color: ${props => props.secondary ? "#d2d5dd" : "#FFD000"};
  border: none;
  padding: 15px 10px;
  border-radius: 10px;
  color: #1B294A;
  font-weight: bolder;
  opacity: ${props => props.disabled ? "0.5" : "1"};
`;

export default StyledButton;
