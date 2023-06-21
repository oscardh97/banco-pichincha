import styled from "styled-components";

const StyledToast = styled.div`
  color: white;
  width: 300px;
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 15px 5px;
  font-weight: 600;
  text-align: center;
  background-color: ${ props => props.type === "error" ? "#ff4d4d" : "#C7EA46"};
`;

export default StyledToast;
