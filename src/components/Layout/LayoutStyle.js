import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  #layout-header {
    width: 100%;
    padding: 10px 0px;
    #header-logo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      cursor: pointer;
    }
  }
  #layout-wrapper {
    padding: 50px;
    background-color: #e3e0e0;
  }
`;

export default StyledLayout;
