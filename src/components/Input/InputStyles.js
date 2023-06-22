import styled from "styled-components";

const StyledInput = styled.input`
  border: 1.5px solid #b5b4b4;
  border-color: ${ props => props.isvalid === 0 ? "red" : "#b5b4b4" };
  border-radius: 5px;
  padding: 5px;
  background-color: ${props => props.disabled ? "#b5b4b4" : "white"}
`;

export const StyledErrorMessage = styled.span`
  font-size: 10px;
  color: red;
  position: absolute;
`;

export default StyledInput;
