import { useNavigate } from "react-router-dom";

import StyledLayout from "./LayoutStyle";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleClickImgHeader = () => {
    navigate("/");
  };

  return <StyledLayout className="layout">
    <div id="layout-header">
      <img id="header-logo" onClick={handleClickImgHeader} alt="logo" src="/logo.png"/>
    </div>

    <div id="layout-wrapper">
      {children}
    </div>
    
  </StyledLayout>
};

export default Layout;
