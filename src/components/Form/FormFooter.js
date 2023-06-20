import Button from "../Button";
import { StyledFormFooter } from "./FormStyles";

const FormFooter = ({ buttons = [] }) => {
  const renderButtons = () => (
    buttons.map(({text, onClick}) => (
      <Button text={text} onClick={onClick}/>
    ))
  );
  return (<StyledFormFooter>
    {renderButtons()}
  </StyledFormFooter>);
};

export default FormFooter;
