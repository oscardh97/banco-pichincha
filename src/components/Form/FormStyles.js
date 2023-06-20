import styled from "styled-components";

const StyledForm = styled.div`
  width: 50%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
`;


export const StyledFormHeader = styled.h1`
  width: 100%;
  text-align: center;
  padding: 25px 0px;
  border-bottom: 2px solid gray;
`;

export const StyledFormBody = styled.div`
  .field-container {
    display: inline-block;
    width: 45%;
    padding: 10px;
    label, input {
      display: block;
      width: 90%;
      padding: 10px 0px;
    }
  }
`;

export const StyledFormFooter = styled.div`
`;

export default StyledForm;
