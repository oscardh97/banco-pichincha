import styled from "styled-components";

const StyledDropdown = styled.div`
  background-color: white;
  display: inline-block;
  button {
    border: 1px solid #a7a3a3;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .options {
    position: absolute;
    margin: 5px 0px;
    list-style-type: none;
    padding: 0;
    border: 1px solid grey;
    li {
      padding: 2px;
      background-color: white;
      margin: 0;
      padding: 5px;
    }
    li:hover {
      background-color: #a7a3a3;
      cursor: pointer;
    }
  }

  .arrow {
    margin-left: 5px;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
`;

export default StyledDropdown;
