import StyledLayout from "./LayoutStyle";

const Layout = ({ children }) => {
  return <StyledLayout className="layout">
    <div id="layout-header">
      <img id="header-logo" alt="logo" src="./logo.png"/>
    </div>

    <div id="layout-wrapper">
      {children}
    </div>
    
  </StyledLayout>
};

export default Layout;
