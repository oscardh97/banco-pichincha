import styled from "styled-components";

const StyledTable = styled.div`
  background-color: white;
  margin: 30px 0px;
  padding: 20px;
  table {
    width: 100%;
    th {
      background-color: #e3e0e0;
    }
    td, th {
      text-align: left;
      border: none;
      border-bottom: 1px solid #e3e0e0;
      padding: 15px;
    }
    td img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    td .table-actions button {
      border: none;
    }

    .actions-column span {
      font-size: 40px;
      line-height: 0.01px;
      text-align: right;
      float: right;
      color: #747474;
      font-weight: bolder;
      cursor: pointer;
    }
  }
`;

export default StyledTable;
