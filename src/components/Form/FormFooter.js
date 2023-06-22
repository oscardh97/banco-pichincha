import Button from "../Button";
import { StyledFormFooter } from "./FormStyles";

const FormFooter = ({ buttons = [] }) => {
  const renderButtons = () => (
    buttons.map(({text, onClick, ...props}, index) => (
      <Button key={`btn-footer-${index}`} data-testid={`btn-footer-${index}`} text={text} onClick={onClick} {...props}/>
    ))
  );
  return (<StyledFormFooter>
    {renderButtons()}
  </StyledFormFooter>);
};

export default FormFooter;
